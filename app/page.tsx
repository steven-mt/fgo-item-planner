"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useState } from "react";
import { Header } from "./_components/Header";
import { MaterialsTable } from "./_components/MaterialsTable";
import { Planner } from "./_components/Planner";
import { SideDrawer } from "./_components/SideDrawer";
import { usePlannerStateContext } from "./_context/usePlannerStateContext";
import { useUserContext } from "./_context/useUserContext";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";
import { useLSTheme } from "./_hooks/useLSTheme";
import { darkTheme, lightTheme } from "./_theme/theme";
import { ExpCard, GrailCost, ParsedItem } from "./_types/material";
import {
  CardMaterials,
  CombinedRequirements,
  ExpRequirements,
  ItemRequirements,
  Page,
} from "./_types/planner";
import { AppendSkillNumber, ParsedServant } from "./_types/servant";
import { Database } from "./_types/supabase";
import { getUserFetch, insertUserFetch } from "./_utils";
import {
  EXP_4_ID,
  EXP_5_ID,
  GRAIL_ITEM_ID,
  MASH_SVT_ID,
  MIN_ASCENSION_LEVEL,
  MIN_SERVANT_LEVEL,
  MIN_SKILL_LEVEL,
  QP_ITEM_ID,
} from "./_utils/constants";

let didInit = false;

const addMats = (
  newMats: ItemRequirements | ExpRequirements,
  combinedMats: CombinedRequirements,
) => {
  for (const newMaterial of newMats) {
    if ("item" in newMaterial) {
      const foundExistingItem = combinedMats.items.find(
        (itemAndAmount) => itemAndAmount.item.id === newMaterial.item.id,
      );

      if (foundExistingItem) {
        foundExistingItem.totalAmount += newMaterial.amount;

        const existingUseAmount = foundExistingItem.uses[newMaterial.use];

        foundExistingItem.uses[newMaterial.use] = existingUseAmount
          ? existingUseAmount + newMaterial.amount
          : newMaterial.amount;

        continue;
      }

      combinedMats.items.push({
        item: newMaterial.item,
        totalAmount: newMaterial.amount,
        uses: { [newMaterial.use]: newMaterial.amount },
      });
      continue;
    }

    const foundExistingExp = combinedMats.expCards.find(
      (expCard) => expCard.card.id === newMaterial.expCard.id,
    );
    if (foundExistingExp) {
      foundExistingExp.amount += newMaterial.amount;
      continue;
    }
    combinedMats.expCards.push({
      card: newMaterial.expCard,
      amount: newMaterial.amount,
    });
  }
};

export default function Home() {
  // Layout
  const drawerWidth = 240;

  const [isDarkLs, setIsDarkLs] = useLSTheme();

  const switchTheme = () => {
    setIsDarkLs(!isDarkLs);
  };

  const cache = createCache({
    key: "css",
    prepend: true,
  });

  // Drawer
  const [selectedPage, setSelectedPage] = useState<Page>("Inputs");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Auth and user data
  const { setCurrentUser } = useUserContext();

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const authUser = session.user;

        if (!authUser.email)
          return alert("Missing email, database entry for user not created");

        let userData = await getUserFetch(authUser.id);

        if (!userData)
          userData = await insertUserFetch({
            id: authUser.id,
            email: authUser.email,
          });

        setCurrentUser({
          authData: authUser,
          userData: userData,
        });
      } else {
        setCurrentUser({ authData: null, userData: null });
      }
    };

    getUser();
  }, [setCurrentUser, supabase.auth]);

  // API data
  const [allSvtData, setAllSvtData] = useState<ParsedServant[]>();
  const [itemData, setItemData] = useState<ParsedItem[]>();
  const [expCardData, setExpCardData] = useState<ExpCard[]>();
  const [grailCostData, setGrailCostData] = useState<GrailCost>();

  useEffect(() => {
    const getData = async () => {
      const svtData = (await (
        await fetch("/api/data")
      ).json()) as ParsedServant[];

      setAllSvtData(svtData);

      const items = (await (await fetch("/api/items")).json()) as ParsedItem[];

      setItemData(items);

      const expData = (await (await fetch("/api/exp")).json()) as ExpCard[];

      setExpCardData(expData);

      const grailData = (await (
        await fetch("/api/grailCost")
      ).json()) as GrailCost;

      setGrailCostData(grailData);
    };

    if (!didInit) {
      didInit = true;
      getData();
    }
  }, []);

  // Calculate material requirements
  const getExpMats = useCallback(
    (
      svtData: ParsedServant,
      expCardRarity: 4 | 5,
      from: number | null,
      to: number | null,
    ): ExpRequirements => {
      const materials: ExpRequirements = [];

      if (!expCardData) return materials;

      const fromLevel = from === null ? MIN_SERVANT_LEVEL : from;
      let toLevel = to === null ? MIN_SERVANT_LEVEL : to;

      // Only Mash cannot be leveled to 120 for now so limit level accordingly
      if (svtData.id === MASH_SVT_ID && toLevel > svtData.expGrowth.length)
        toLevel = svtData.expGrowth.length;

      if (fromLevel < toLevel) {
        const expRequired =
          svtData.expGrowth[toLevel - 1] - svtData.expGrowth[fromLevel - 1];

        const expCardID = expCardRarity === 4 ? EXP_4_ID : EXP_5_ID;

        const foundExpCardData = expCardData.find(
          (expcard) => expcard.id === expCardID,
        );
        if (!foundExpCardData) throw new Error("Exp card data not found");
        materials.push({
          expCard: foundExpCardData,
          amount: Math.ceil(expRequired / foundExpCardData.expFeed), // without bonus
        });
      }

      return materials;
    },
    [expCardData],
  );

  const getGrailMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): ItemRequirements => {
      const materials: ItemRequirements = [];

      if (!itemData || !grailCostData) return materials;

      const fromLevel = from === null ? MIN_SERVANT_LEVEL : from;
      let toLevel = to === null ? MIN_SERVANT_LEVEL : to;

      const maxLevelNoGrail = svtData.ascensionLevels[4];

      if (toLevel <= maxLevelNoGrail) return materials;

      // set upper bound to maximum possible level using expGrowth array for Mash
      if (svtData.id === MASH_SVT_ID && toLevel > svtData.expGrowth.length)
        toLevel = svtData.expGrowth.length;

      if (fromLevel < toLevel) {
        const grailFrom =
          fromLevel > maxLevelNoGrail ? fromLevel : maxLevelNoGrail;

        let nextLvMax: number;

        for (const grailLevel of Object.values(grailCostData[svtData.rarity])) {
          nextLvMax = grailFrom + grailLevel.addLvMax;

          const qpCost = grailLevel.qp;
          if (qpCost > 0) {
            const foundQPData = itemData.find((item) => item.id === QP_ITEM_ID);
            if (!foundQPData)
              throw new Error("QP item data not found, id: " + QP_ITEM_ID);
            materials.push({
              item: foundQPData,
              amount: qpCost,
              use: "grail",
            });
          }

          const foundGrailData = itemData.find(
            (item) => item.id === GRAIL_ITEM_ID,
          );
          if (!foundGrailData)
            throw new Error("Grail item data not found, id: " + GRAIL_ITEM_ID);
          materials.push({
            item: foundGrailData,
            amount: 1,
            use: "grail",
          });

          if (nextLvMax > 100) {
            const coinID = svtData.appendSkills[100].unlockMaterials[0].id;
            const foundCoinData = itemData.find((item) => item.id === coinID);
            if (!foundCoinData)
              throw new Error(
                "Servant coin item data not found, id: " + coinID,
              );
            materials.push({
              item: foundCoinData,
              amount: 30,
              use: "grail",
            });
          }

          if (nextLvMax >= toLevel) break;
        }
      }
      return materials;
    },
    [grailCostData, itemData],
  );

  const getAscensionMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): ItemRequirements => {
      const materials: ItemRequirements = [];

      if (!itemData) return materials;

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_ASCENSION_LEVEL : from;
      const toLevel = to === null ? MIN_ASCENSION_LEVEL : to;

      if (fromLevel < toLevel) {
        for (let index = fromLevel; index < toLevel; index++) {
          // Exclude id for Mash who has no ascension materials
          if (svtData.id === MASH_SVT_ID) break;

          svtData.ascensionMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (!foundItemData)
              throw new Error("Item data not found, id: " + newItem.id);
            materials.push({
              item: foundItemData,
              amount: newItem.amount,
              use: "ascension",
            });
          });

          const qpCost = svtData.ascensionMaterials[index].qp;

          if (qpCost > 0) {
            const foundQPData = itemData.find((item) => item.id === QP_ITEM_ID);
            if (!foundQPData)
              throw new Error("QP item data not found, id: " + QP_ITEM_ID);
            materials.push({
              item: foundQPData,
              amount: qpCost,
              use: "ascension",
            });
          }
        }
      }
      return materials;
    },
    [itemData],
  );

  const getSkillMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): ItemRequirements => {
      const materials: ItemRequirements = [];

      if (!itemData) return materials;

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_SKILL_LEVEL : from;
      const toLevel = to === null ? MIN_SKILL_LEVEL : to;

      if (fromLevel < toLevel) {
        for (let index = fromLevel; index < toLevel; index++) {
          svtData.skillMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (!foundItemData)
              throw new Error("Item data not found, id: " + newItem.id);
            materials.push({
              item: foundItemData,
              amount: newItem.amount,
              use: "skill",
            });
          });

          const qpCost = svtData.skillMaterials[index].qp;
          if (qpCost > 0) {
            const foundQPData = itemData.find((item) => item.id === QP_ITEM_ID);
            if (!foundQPData)
              throw new Error("QP item data not found, id: " + QP_ITEM_ID);
            materials.push({
              item: foundQPData,
              amount: qpCost,
              use: "skill",
            });
          }
        }
      }

      return materials;
    },
    [itemData],
  );

  const getAppendMats = useCallback(
    (
      svtData: ParsedServant,
      number: AppendSkillNumber,
      from: number | null,
      to: number | null,
    ): ItemRequirements => {
      const materials: ItemRequirements = [];

      if (!itemData) return materials;

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_ASCENSION_LEVEL : from;
      const toLevel = to === null ? MIN_ASCENSION_LEVEL : to;

      let startIndex = fromLevel;

      if (fromLevel === 0) {
        startIndex = 1;

        svtData.appendSkills[number].unlockMaterials.forEach((newItem) => {
          const foundItemData = itemData.find((item) => item.id === newItem.id);
          if (!foundItemData)
            throw new Error("Item data not found, id: " + newItem.id);
          materials.push({
            item: foundItemData,
            amount: newItem.amount,
            use: "append",
          });
        });
      }

      if (fromLevel < toLevel) {
        for (let index = startIndex; index < toLevel; index++) {
          svtData.appendSkillMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (!foundItemData)
              throw new Error("Item data not found, id: " + newItem.id);
            materials.push({
              item: foundItemData,
              amount: newItem.amount,
              use: "append",
            });
          });

          const qpCost = svtData.appendSkillMaterials[index].qp;
          if (qpCost > 0) {
            const foundQPData = itemData.find((item) => item.id === QP_ITEM_ID);
            if (!foundQPData)
              throw new Error("QP item data not found, id: " + QP_ITEM_ID);
            materials.push({
              item: foundQPData,
              amount: qpCost,
              use: "append",
            });
          }
        }
      }
      return materials;
    },
    [itemData],
  );

  const { plannerState } = usePlannerStateContext();

  const plannerMats: CardMaterials[] = [];

  if (allSvtData) {
    plannerState.forEach((cardData) => {
      if (cardData.servantID === null) return;

      const svtData = allSvtData.find((svt) => svt.id === cardData.servantID);
      if (!svtData) return;

      const svtMats: CombinedRequirements = { items: [], expCards: [] };

      let newMats: ItemRequirements | ExpRequirements;
      newMats = getExpMats(svtData, 5, cardData.level.from, cardData.level.to);
      addMats(newMats, svtMats);

      newMats = getAscensionMats(
        svtData,
        cardData.ascension.from,
        cardData.ascension.to,
      );
      addMats(newMats, svtMats);

      newMats = getSkillMats(svtData, cardData.skill1.from, cardData.skill1.to);
      addMats(newMats, svtMats);
      newMats = getSkillMats(svtData, cardData.skill2.from, cardData.skill2.to);
      addMats(newMats, svtMats);
      newMats = getSkillMats(svtData, cardData.skill3.from, cardData.skill3.to);
      addMats(newMats, svtMats);

      newMats = getAppendMats(
        svtData,
        100,
        cardData.append1.from,
        cardData.append1.to,
      );
      addMats(newMats, svtMats);
      newMats = getAppendMats(
        svtData,
        101,
        cardData.append2.from,
        cardData.append2.to,
      );
      addMats(newMats, svtMats);
      newMats = getAppendMats(
        svtData,
        102,
        cardData.append3.from,
        cardData.append3.to,
      );
      addMats(newMats, svtMats);

      newMats = getGrailMats(svtData, cardData.level.from, cardData.level.to);
      addMats(newMats, svtMats);

      plannerMats.push({
        cardID: cardData.cardID,
        materials: svtMats,
      });
    });
  }

  return (
    <>
      {/* MUI Tailwind interoperability */}
      <CacheProvider value={cache}>
        <StyledEngineProvider injectFirst>
          {/*  */}

          <ThemeProvider theme={isDarkLs ? darkTheme : lightTheme}>
            <CssBaseline />

            <Header
              isDark={isDarkLs}
              switchTheme={switchTheme}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />

            <SideDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Box
              sx={{
                p: 1,
                overflow: "auto",
                height: `calc(100vh - ${useAppBarHeight()}px)`,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              {!allSvtData && <div>loading servant data...</div>}
              {!itemData && <div>loading item data...</div>}
              {!expCardData && <div>loading exp card data...</div>}
              {!grailCostData && <div>loading grail cost data...</div>}

              {allSvtData && expCardData && grailCostData && itemData && (
                <>
                  {selectedPage === "Inputs" && (
                    <Planner
                      allSvtData={allSvtData}
                      plannerMats={plannerMats}
                    />
                  )}

                  {selectedPage === "Materials" && (
                    <MaterialsTable
                      allSvtData={allSvtData}
                      itemData={itemData}
                      plannerMats={plannerMats}
                    />
                  )}
                </>
              )}
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </>
  );
}
