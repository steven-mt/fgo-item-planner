/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

/**
 * Trait/Individuality Enum
 */
export type Trait =
  | "unknown"
  | "genderMale"
  | "genderFemale"
  | "genderUnknown"
  | "classSaber"
  | "classLancer"
  | "classArcher"
  | "classRider"
  | "classCaster"
  | "classAssassin"
  | "classBerserker"
  | "classShielder"
  | "classRuler"
  | "classAlterEgo"
  | "classAvenger"
  | "classDemonGodPillar"
  | "classGrandCaster"
  | "classBeastI"
  | "classBeastII"
  | "classMoonCancer"
  | "classBeastIIIR"
  | "classForeigner"
  | "classBeastIIIL"
  | "classBeastUnknown"
  | "classPretender"
  | "classUOlgaMarie"
  | "attributeSky"
  | "attributeEarth"
  | "attributeHuman"
  | "attributeStar"
  | "attributeBeast"
  | "alignmentLawful"
  | "alignmentChaotic"
  | "alignmentNeutral"
  | "alignmentGood"
  | "alignmentEvil"
  | "alignmentBalanced"
  | "alignmentMadness"
  | "alignmentSummer"
  | "basedOnServant"
  | "human"
  | "undead"
  | "artificialDemon"
  | "demonBeast"
  | "daemon"
  | "demon"
  | "soldier"
  | "amazoness"
  | "skeleton"
  | "zombie"
  | "ghost"
  | "automata"
  | "golem"
  | "spellBook"
  | "homunculus"
  | "lamia"
  | "centaur"
  | "werebeast"
  | "chimera"
  | "wyvern"
  | "dragonType"
  | "gazer"
  | "handOrDoor"
  | "demonGodPillar"
  | "oni"
  | "hand"
  | "door"
  | "threatToHumanity"
  | "divine"
  | "humanoid"
  | "dragon"
  | "dragonSlayer"
  | "roman"
  | "wildbeast"
  | "atalante"
  | "saberface"
  | "weakToEnumaElish"
  | "riding"
  | "arthur"
  | "skyOrEarth"
  | "skyOrEarthServant"
  | "brynhildsBeloved"
  | "undeadOrDaemon"
  | "undeadOrDemon"
  | "demonic"
  | "skyOrEarthExceptPseudoAndDemi"
  | "skyOrEarthExceptPseudoAndDemiServant"
  | "divineOrDaemonOrUndead"
  | "divineOrDemonOrUndead"
  | "saberClassServant"
  | "superGiant"
  | "king"
  | "greekMythologyMales"
  | "illya"
  | "feminineLookingServant"
  | "argonaut"
  | "associatedToTheArgo"
  | "genderCaenisServant"
  | "hominidaeServant"
  | "blessedByKur"
  | "demonicBeastServant"
  | "canBeInBattle"
  | "notBasedOnServant"
  | "livingHuman"
  | "cardArts"
  | "cardBuster"
  | "cardQuick"
  | "cardExtra"
  | "buffPositiveEffect"
  | "buffNegativeEffect"
  | "buffIncreaseDamage"
  | "buffIncreaseDefence"
  | "buffDecreaseDamage"
  | "buffDecreaseDefence"
  | "buffMentalEffect"
  | "buffPoison"
  | "buffCharm"
  | "buffPetrify"
  | "buffStun"
  | "buffBurn"
  | "buffSpecialResistUp"
  | "buffSpecialResistDown"
  | "buffEvadeAndInvincible"
  | "buffSureHit"
  | "buffNpSeal"
  | "buffEvade"
  | "buffInvincible"
  | "buffTargetFocus"
  | "buffGuts"
  | "skillSeal"
  | "buffCurse"
  | "buffAtkUp"
  | "buffPowerModStrUp"
  | "buffDamagePlus"
  | "buffNpDamageUp"
  | "buffCritDamageUp"
  | "buffCritRateUp"
  | "buffAtkDown"
  | "buffPowerModStrDown"
  | "buffDamageMinus"
  | "buffNpDamageDown"
  | "buffCritDamageDown"
  | "buffCritRateDown"
  | "buffDeathResistDown"
  | "buffDefenceUp"
  | "buffMaxHpUpPercent"
  | "buffMaxHpDownPercent"
  | "buffMaxHpUp"
  | "buffMaxHpDown"
  | "buffImmobilize"
  | "buffIncreasePoisonEffectiveness"
  | "buffPigify"
  | "buffCurseEffectUp"
  | "buffTerrorStunChanceAfterTurn"
  | "buffConfusion"
  | "buffOffensiveMode"
  | "buffDefensiveMode"
  | "buffLockCardsDeck"
  | "buffDisableColorCard"
  | "buffChangeField"
  | "buffIncreaseDefenceAgainstIndividuality"
  | "buffDefUp"
  | "buffInvinciblePierce"
  | "buffHpRecoveryPerTurn"
  | "buffNegativeEffectImmunity"
  | "buffNegativeEffectAtTurnEnd"
  | "attackPhysical"
  | "attackProjectile"
  | "attackMagical"
  | "criticalHit"
  | "faceCard"
  | "cardNP"
  | "kingproteaGrowth"
  | "kingproteaInfiniteProliferation"
  | "kingproteaProliferation"
  | "kingproteaProliferationNPDefense"
  | "fieldSunlight"
  | "fieldShore"
  | "fieldForest"
  | "fieldBurning"
  | "fieldCity"
  | "shadowServant"
  | "aoeNP"
  | "stNP"
  | "giant"
  | "childServant"
  | "buffSpecialInvincible"
  | "buffSkillRankUp"
  | "buffSleep"
  | "nobunaga"
  | "fieldImaginarySpace"
  | "existenceOutsideTheDomain"
  | "curse"
  | "fieldShoreOrImaginarySpace"
  | "shutenOnField"
  | "shuten"
  | "genji"
  | "vengeance"
  | "enemyGardenOfSinnersLivingCorpse"
  | "enemyGardenOfSinnersApartmentGhostAndSkeleton"
  | "enemyGardenOfSinnersBaseModel"
  | "enemyGardenOfSinnersVengefulSpiritOfSevenPeople"
  | "enemySaberEliWerebeastAndHomunculusAndKnight"
  | "enemySaberEliSkeletonAndGhostAndLamia"
  | "enemySaberEliBugAndGolem"
  | "enemySeraphEater"
  | "enemySeraphShapeshifter"
  | "enemySeraphTypeI"
  | "enemySeraphTypeSakura"
  | "enemyHimejiCastleKnightAndGazerAndMassProduction"
  | "enemyHimejiCastleDronesAndHomunculusAndAutomata"
  | "enemyHimejiCastleSkeletonAndScarecrow"
  | "enemyGuda3MiniNobu"
  | "enemyDavinciTrueEnemy"
  | "enemyDavinciFalseEnemy"
  | "enemyCaseFilesRareEnemy"
  | "enemyLasVegasBonusEnemy"
  | "enemySummerCampRareEnemy"
  | "enemyLittleBigTenguTsuwamonoEnemy"
  | "eventSaberWars"
  | "eventRashomon"
  | "eventOnigashima"
  | "eventOnigashimaRaid"
  | "eventPrisma"
  | "eventPrismaWorldEndMatch"
  | "eventNeroFest2"
  | "eventGuda2"
  | "eventNeroFest3"
  | "eventSetsubun"
  | "eventApocrypha"
  | "eventBattleInNewYork1"
  | "eventOniland"
  | "eventOoku"
  | "eventGuda4"
  | "eventLasVegas"
  | "eventBattleInNewYork2"
  | "eventSaberWarsII"
  | "eventSummerCamp"
  | "eventGuda5"
  | "cursedBook"
  | "buffCharmFemale"
  | "mechanical"
  | "fae"
  | "hasCostume"
  | "weakPointsRevealed"
  | "chenGongNpBlock"
  | "knightsOfTheRound"
  | "divineSpirit"
  | "buffNullifyBuff"
  | "enemyGudaMiniNobu"
  | "burningLove"
  | "buffStrongAgainstWildBeast"
  | "buffStrongAgainstDragon"
  | "fairyTaleServant"
  | "classBeastIV"
  | "havingAnimalsCharacteristics"
  | "like"
  | "exaltation"
  | "gubijin"
  | "yuMeiren"
  | "milleniumCastle"
  | "protoMerlinNPChargeBlock"
  | "valkyrie"
  | "immuneToPigify"
  | "summerModeServant"
  | "shinsengumiServant"
  | "ryozanpaku"
  | "demonUnused"
  | "levitating"
  | "obstacleMaker"
  | "defender"
  | "hasGoddessMetamorphosis"
  | "servantsWithSkyAttribute"
  | "moon"
  | "cardWeak"
  | "cardStrong"
  | "servant"
  | "shadow"
  | "chenGongNp"
  | "cantBeSacrificed"
  | "gutsBlock"
  | "classBeastILost"
  | "holdingHolyGrail"
  | "standardClassServant"
  | "classBeast"
  | "classBeastVI"
  | "classBeastVIBoss"
  | "buffBound"
  | "buffDamageCut"
  | "marking"
  | "manuscriptComplete"
  | "myFairSoldier"
  | "zeroStarServant"
  | "oneStarServant"
  | "twoStarServant"
  | "threeStarServant"
  | "fourStarServant"
  | "fiveStarServant"
  | "wrathOfTheEnshrinedDeity"
  | "caitCuCerpriestessAscension0To2"
  | "caitCuCerpriestessAscension3To4"
  | "fieldAir"
  | "caitCuCerpriestessOnTheField"
  | "buffNpPerTurn"
  | "buffStarPerTurn"
  | "burnEffectivenessUp"
  | "murasamaAscension0"
  | "classUOlgaMarieFlare"
  | "elementalsWrath";
/**
 * Condition Type Enum
 */
export type NiceCondType =
  | "none"
  | "questClear"
  | "itemGet"
  | "useItemEternity"
  | "useItemTime"
  | "useItemCount"
  | "svtLevel"
  | "svtLimit"
  | "svtGet"
  | "svtFriendship"
  | "svtGroup"
  | "event"
  | "date"
  | "weekday"
  | "purchaseQpShop"
  | "purchaseStoneShop"
  | "warClear"
  | "flag"
  | "svtCountStop"
  | "birthDay"
  | "eventEnd"
  | "svtEventJoin"
  | "missionConditionDetail"
  | "eventMissionClear"
  | "eventMissionAchieve"
  | "questClearNum"
  | "notQuestGroupClear"
  | "raidAlive"
  | "raidDead"
  | "raidDamage"
  | "questChallengeNum"
  | "masterMission"
  | "questGroupClear"
  | "superBossDamage"
  | "superBossDamageAll"
  | "purchaseShop"
  | "questNotClear"
  | "notShopPurchase"
  | "notSvtGet"
  | "notEventShopPurchase"
  | "svtHaving"
  | "notSvtHaving"
  | "questChallengeNumEqual"
  | "questChallengeNumBelow"
  | "questClearNumEqual"
  | "questClearNumBelow"
  | "questClearPhase"
  | "notQuestClearPhase"
  | "eventPointGroupWin"
  | "eventNormaPointClear"
  | "questAvailable"
  | "questGroupAvailableNum"
  | "eventNormaPointNotClear"
  | "notItemGet"
  | "costumeGet"
  | "questResetAvailable"
  | "svtGetBeforeEventEnd"
  | "questClearRaw"
  | "questGroupClearRaw"
  | "eventGroupPointRatioInTerm"
  | "eventGroupRankInTerm"
  | "notEventRaceQuestOrNotAllGroupGoal"
  | "eventGroupTotalWinEachPlayer"
  | "eventScriptPlay"
  | "svtCostumeReleased"
  | "questNotClearAnd"
  | "svtRecoverd"
  | "shopReleased"
  | "eventPoint"
  | "eventRewardDispCount"
  | "equipWithTargetCostume"
  | "raidGroupDead"
  | "notSvtGroup"
  | "notQuestResetAvailable"
  | "notQuestClearRaw"
  | "notQuestGroupClearRaw"
  | "notEventMissionClear"
  | "notEventMissionAchieve"
  | "notCostumeGet"
  | "notSvtCostumeReleased"
  | "notEventRaceQuestOrNotTargetRankGoal"
  | "playerGenderType"
  | "shopGroupLimitNum"
  | "eventGroupPoint"
  | "eventGroupPointBelow"
  | "eventTotalPoint"
  | "eventTotalPointBelow"
  | "eventValue"
  | "eventValueBelow"
  | "eventFlag"
  | "eventStatus"
  | "notEventStatus"
  | "forceFalse"
  | "svtHavingLimitMax"
  | "eventPointBelow"
  | "svtEquipFriendshipHaving"
  | "movieNotDownload"
  | "multipleDate"
  | "svtFriendshipAbove"
  | "svtFriendshipBelow"
  | "movieDownloaded"
  | "routeSelect"
  | "notRouteSelect"
  | "limitCount"
  | "limitCountAbove"
  | "limitCountBelow"
  | "badEndPlay"
  | "commandCodeGet"
  | "notCommandCodeGet"
  | "allUsersBoxGachaCount"
  | "totalTdLevel"
  | "totalTdLevelAbove"
  | "totalTdLevelBelow"
  | "commonRelease"
  | "battleResultWin"
  | "battleResultLose"
  | "eventValueEqual"
  | "boardGameTokenHaving"
  | "boardGameTokenGroupHaving"
  | "eventFlagOn"
  | "eventFlagOff"
  | "questStatusFlagOn"
  | "questStatusFlagOff"
  | "eventValueNotEqual"
  | "limitCountMaxEqual"
  | "limitCountMaxAbove"
  | "limitCountMaxBelow"
  | "boardGameTokenGetNum"
  | "battleLineWinAbove"
  | "battleLineLoseAbove"
  | "battleLineContinueWin"
  | "battleLineContinueLose"
  | "battleLineContinueWinBelow"
  | "battleLineContinueLoseBelow"
  | "battleGroupWinAvove"
  | "battleGroupLoseAvove"
  | "svtLimitClassNum"
  | "overTimeLimitRaidAlive"
  | "onTimeLimitRaidDead"
  | "onTimeLimitRaidDeadNum"
  | "raidBattleProgressAbove"
  | "svtEquipRarityLevelNum"
  | "latestMainScenarioWarClear"
  | "eventMapValueContains"
  | "resetBirthDay"
  | "shopFlagOn"
  | "shopFlagOff"
  | "purchaseValidShopGroup"
  | "svtLevelClassNum"
  | "svtLevelIdNum"
  | "limitCountImageEqual"
  | "limitCountImageAbove"
  | "limitCountImageBelow"
  | "eventTypeStartTimeToEndDate"
  | "existBoxGachaScriptReplaceGiftId"
  | "notExistBoxGachaScriptReplaceGiftId"
  | "limitedPeriodVoiceChangeTypeOn"
  | "startRandomMission"
  | "randomMissionClearNum"
  | "progressValueEqual"
  | "progressValueAbove"
  | "progressValueBelow"
  | "randomMissionTotalClearNum"
  | "weekdays"
  | "eventFortificationRewardNum"
  | "questClearBeforeEventStart"
  | "notQuestClearBeforeEventStart"
  | "eventTutorialFlagOn"
  | "eventTutorialFlagOff"
  | "eventSuperBossValueEqual"
  | "notEventSuperBossValueEqual"
  | "allSvtTargetSkillLvNum"
  | "superBossDamageAbove"
  | "superBossDamageBelow"
  | "eventMissionGroupAchieve"
  | "svtFriendshipClassNumAbove"
  | "notWarClear"
  | "svtSkillLvClassNumAbove"
  | "svtClassLvUpCount"
  | "svtClassSkillLvUpCount"
  | "svtClassLimitUpCount"
  | "svtClassFriendshipCount"
  | "completeHeelPortrait"
  | "notCompleteHeelPortrait"
  | "classBoardSquareReleased"
  | "svtLevelExchangeSvt"
  | "svtLimitExchangeSvt"
  | "skillLvExchangeSvt"
  | "svtFriendshipExchangeSvt"
  | "exchangeSvt";
/**
 * Quest Type Enum
 */
export type NiceQuestType =
  | "main"
  | "free"
  | "friendship"
  | "event"
  | "heroballad"
  | "warBoard";
/**
 * Quest Flag Enum
 */
export type NiceQuestFlag =
  | "none"
  | "noBattle"
  | "raid"
  | "raidConnection"
  | "noContinue"
  | "noDisplayRemain"
  | "raidLastDay"
  | "closedHideCostItem"
  | "closedHideCostNum"
  | "closedHideProgress"
  | "closedHideRecommendLv"
  | "closedHideTrendClass"
  | "closedHideReward"
  | "noDisplayConsume"
  | "superBoss"
  | "noDisplayMissionNotify"
  | "hideProgress"
  | "dropFirstTimeOnly"
  | "chapterSubIdJapaneseNumerals"
  | "supportOnlyForceBattle"
  | "eventDeckNoSupport"
  | "fatigueBattle"
  | "supportSelectAfterScript"
  | "branch"
  | "userEventDeck"
  | "noDisplayRaidRemain"
  | "questMaxDamageRecord"
  | "enableFollowQuest"
  | "supportSvtMultipleSet"
  | "supportOnlyBattle"
  | "actConsumeBattleWin"
  | "vote"
  | "hideMaster"
  | "disableMasterSkill"
  | "disableCommandSpeel"
  | "supportSvtEditablePosition"
  | "branchScenario"
  | "questKnockdownRecord"
  | "notRetrievable"
  | "displayLoopmark"
  | "boostItemConsumeBattleWin"
  | "playScenarioWithMapscreen"
  | "battleRetreatQuestClear"
  | "battleResultLoseQuestClear"
  | "branchHaving"
  | "noDisplayNextIcon"
  | "windowOnly"
  | "changeMasters"
  | "notDisplayResultGetPoint"
  | "forceToNoDrop"
  | "displayConsumeIcon"
  | "harvest"
  | "reconstruction"
  | "enemyImmediateAppear"
  | "noSupportList"
  | "live"
  | "forceDisplayEnemyInfo"
  | "alloutBattle"
  | "recollection"
  | "notSingleSupportOnly";
/**
 * Quest After Clear Enum
 */
export type NiceQuestAfterClearType =
  | "close"
  | "repeatFirst"
  | "repeatLast"
  | "resetInterval"
  | "closeDisp";
/**
 * Consume Type Enum
 */
export type NiceConsumeType = "none" | "ap" | "rp" | "item" | "apAndItem";
/**
 * Function Type Enum
 */
export type NiceFuncType =
  | "none"
  | "addState"
  | "subState"
  | "damage"
  | "damageNp"
  | "gainStar"
  | "gainHp"
  | "gainNp"
  | "lossNp"
  | "shortenSkill"
  | "extendSkill"
  | "releaseState"
  | "lossHp"
  | "instantDeath"
  | "damageNpPierce"
  | "damageNpIndividual"
  | "addStateShort"
  | "gainHpPer"
  | "damageNpStateIndividual"
  | "hastenNpturn"
  | "delayNpturn"
  | "damageNpHpratioHigh"
  | "damageNpHpratioLow"
  | "cardReset"
  | "replaceMember"
  | "lossHpSafe"
  | "damageNpCounter"
  | "damageNpStateIndividualFix"
  | "damageNpSafe"
  | "callServant"
  | "ptShuffle"
  | "lossStar"
  | "changeServant"
  | "changeBg"
  | "damageValue"
  | "withdraw"
  | "fixCommandcard"
  | "shortenBuffturn"
  | "extendBuffturn"
  | "shortenBuffcount"
  | "extendBuffcount"
  | "changeBgm"
  | "displayBuffstring"
  | "resurrection"
  | "gainNpBuffIndividualSum"
  | "setSystemAliveFlag"
  | "forceInstantDeath"
  | "damageNpRare"
  | "gainNpFromTargets"
  | "gainHpFromTargets"
  | "lossHpPer"
  | "lossHpPerSafe"
  | "shortenUserEquipSkill"
  | "quickChangeBg"
  | "shiftServant"
  | "damageNpAndCheckIndividuality"
  | "absorbNpturn"
  | "overwriteDeadType"
  | "forceAllBuffNoact"
  | "breakGaugeUp"
  | "breakGaugeDown"
  | "moveToLastSubmember"
  | "extendUserEquipSkill"
  | "updateEnemyEntryMaxCountEachTurn"
  | "expUp"
  | "qpUp"
  | "dropUp"
  | "friendPointUp"
  | "eventDropUp"
  | "eventDropRateUp"
  | "eventPointUp"
  | "eventPointRateUp"
  | "transformServant"
  | "qpDropUp"
  | "servantFriendshipUp"
  | "userEquipExpUp"
  | "classDropUp"
  | "enemyEncountCopyRateUp"
  | "enemyEncountRateUp"
  | "enemyProbDown"
  | "getRewardGift"
  | "sendSupportFriendPoint"
  | "movePosition"
  | "revival"
  | "damageNpIndividualSum"
  | "damageValueSafe"
  | "friendPointUpDuplicate"
  | "moveState"
  | "changeBgmCostume"
  | "func126"
  | "func127"
  | "updateEntryPositions"
  | "buddyPointUp"
  | "addFieldChangeToField"
  | "subFieldBuff"
  | "eventFortificationPointUp"
  | "gainNpIndividualSum"
  | "setQuestRouteFlag"
  | "lastUsePlayerSkillCopy"
  | "changeEnemyMasterFace";
/**
 * Function Target Type Enum
 */
export type NiceFuncTargetType =
  | "self"
  | "ptOne"
  | "ptAnother"
  | "ptAll"
  | "enemy"
  | "enemyAnother"
  | "enemyAll"
  | "ptFull"
  | "enemyFull"
  | "ptOther"
  | "ptOneOther"
  | "ptRandom"
  | "enemyOther"
  | "enemyRandom"
  | "ptOtherFull"
  | "enemyOtherFull"
  | "ptselectOneSub"
  | "ptselectSub"
  | "ptOneAnotherRandom"
  | "ptSelfAnotherRandom"
  | "enemyOneAnotherRandom"
  | "ptSelfAnotherFirst"
  | "ptSelfBefore"
  | "ptSelfAfter"
  | "ptSelfAnotherLast"
  | "commandTypeSelfTreasureDevice"
  | "fieldOther"
  | "enemyOneNoTargetNoAction"
  | "ptOneHpLowestValue"
  | "ptOneHpLowestRate"
  | "enemyRange";
/**
 * Function Target Team Enum
 */
export type FuncApplyTarget = "player" | "enemy" | "playerAndEnemy";
/**
 * Buff Type Enum
 */
export type NiceBuffType =
  | "none"
  | "upCommandatk"
  | "upStarweight"
  | "upCriticalpoint"
  | "downCriticalpoint"
  | "regainNp"
  | "regainStar"
  | "regainHp"
  | "reduceHp"
  | "upAtk"
  | "downAtk"
  | "upDamage"
  | "downDamage"
  | "addDamage"
  | "subDamage"
  | "upNpdamage"
  | "downNpdamage"
  | "upDropnp"
  | "upCriticaldamage"
  | "downCriticaldamage"
  | "upSelfdamage"
  | "downSelfdamage"
  | "addSelfdamage"
  | "subSelfdamage"
  | "avoidance"
  | "breakAvoidance"
  | "invincible"
  | "upGrantstate"
  | "downGrantstate"
  | "upTolerance"
  | "downTolerance"
  | "avoidState"
  | "donotAct"
  | "donotSkill"
  | "donotNoble"
  | "donotRecovery"
  | "disableGender"
  | "guts"
  | "upHate"
  | "addIndividuality"
  | "subIndividuality"
  | "upDefence"
  | "downDefence"
  | "upCommandstar"
  | "upCommandnp"
  | "upCommandall"
  | "downCommandall"
  | "downStarweight"
  | "reduceNp"
  | "downDropnp"
  | "upGainHp"
  | "downGainHp"
  | "downCommandatk"
  | "downCommanstar"
  | "downCommandnp"
  | "upCriticalrate"
  | "downCriticalrate"
  | "pierceInvincible"
  | "avoidInstantdeath"
  | "upResistInstantdeath"
  | "upNonresistInstantdeath"
  | "delayFunction"
  | "regainNpUsedNoble"
  | "deadFunction"
  | "upMaxhp"
  | "downMaxhp"
  | "addMaxhp"
  | "subMaxhp"
  | "battlestartFunction"
  | "wavestartFunction"
  | "selfturnendFunction"
  | "damageFunction"
  | "upGivegainHp"
  | "downGivegainHp"
  | "commandattackFunction"
  | "deadattackFunction"
  | "upSpecialdefence"
  | "downSpecialdefence"
  | "upDamagedropnp"
  | "downDamagedropnp"
  | "entryFunction"
  | "upChagetd"
  | "reflectionFunction"
  | "upGrantSubstate"
  | "downGrantSubstate"
  | "upToleranceSubstate"
  | "downToleranceSubstate"
  | "upGrantInstantdeath"
  | "downGrantInstantdeath"
  | "gutsRatio"
  | "upDefencecommandall"
  | "downDefencecommandall"
  | "overwriteBattleclass"
  | "overwriteClassrelatioAtk"
  | "overwriteClassrelatioDef"
  | "upDamageIndividuality"
  | "downDamageIndividuality"
  | "upDamageIndividualityActiveonly"
  | "downDamageIndividualityActiveonly"
  | "upNpturnval"
  | "downNpturnval"
  | "multiattack"
  | "upGiveNp"
  | "downGiveNp"
  | "upResistanceDelayNpturn"
  | "downResistanceDelayNpturn"
  | "pierceDefence"
  | "upGutsHp"
  | "downGutsHp"
  | "upFuncgainNp"
  | "downFuncgainNp"
  | "upFuncHpReduce"
  | "downFuncHpReduce"
  | "upDefencecommanDamage"
  | "downDefencecommanDamage"
  | "npattackPrevBuff"
  | "fixCommandcard"
  | "donotGainnp"
  | "fieldIndividuality"
  | "donotActCommandtype"
  | "upDamageEventPoint"
  | "upDamageSpecial"
  | "attackFunction"
  | "commandcodeattackFunction"
  | "donotNobleCondMismatch"
  | "donotSelectCommandcard"
  | "donotReplace"
  | "shortenUserEquipSkill"
  | "tdTypeChange"
  | "overwriteClassRelation"
  | "tdTypeChangeArts"
  | "tdTypeChangeBuster"
  | "tdTypeChangeQuick"
  | "commandattackBeforeFunction"
  | "gutsFunction"
  | "upCriticalRateDamageTaken"
  | "downCriticalRateDamageTaken"
  | "upCriticalStarDamageTaken"
  | "downCriticalStarDamageTaken"
  | "skillRankUp"
  | "avoidanceIndividuality"
  | "changeCommandCardType"
  | "specialInvincible"
  | "preventDeathByDamage"
  | "commandcodeattackAfterFunction"
  | "attackBeforeFunction"
  | "donotSkillSelect"
  | "buffRate"
  | "invisibleBattleChara"
  | "counterFunction"
  | "notTargetSkill"
  | "hpReduceToRegain"
  | "selfturnstartFunction"
  | "overwriteDeadType"
  | "upActionCount"
  | "downActionCount"
  | "shiftGuts"
  | "shiftGutsRatio"
  | "masterSkillValueUp"
  | "buffConvert"
  | "subFieldIndividuality"
  | "commandcodeattackBeforeFunctionMainOnly"
  | "commandcodeattackAfterFunctionMainOnly"
  | "commandattackBeforeFunctionMainOnly"
  | "commandattackAfterFunctionMainOnly"
  | "attackBeforeFunctionMainOnly"
  | "attackAfterFunctionMainOnly"
  | "toFieldChangeField"
  | "toFieldAvoidBuff"
  | "toFieldSubIndividualityField";
/**
 * Class Relation Overwrite Type Enum
 */
export type NiceClassRelationOverwriteType =
  | "overwriteForce"
  | "overwriteMoreThanTarget"
  | "overwriteLessThanTarget";
/**
 * Buff Convert Limit Type
 */
export type NiceBuffConvertLimitType = "all" | "self";
/**
 * Buff Convert Type
 */
export type NiceBuffConvertType = "none" | "buff" | "individuality";
/**
 * Servant Type Enum
 */
export type NiceSvtType =
  | "normal"
  | "heroine"
  | "combineMaterial"
  | "enemy"
  | "enemyCollection"
  | "servantEquip"
  | "statusUp"
  | "svtEquipMaterial"
  | "enemyCollectionDetail"
  | "all"
  | "commandCode"
  | "svtMaterialTd";
/**
 * Servant Flag Enum
 */
export type NiceSvtFlag =
  | "onlyUseForNpc"
  | "svtEquipFriendShip"
  | "ignoreCombineLimitSpecial"
  | "svtEquipExp"
  | "svtEquipChocolate"
  | "normal"
  | "goetia"
  | "matDropRateUpCe";
/**
 * Servant Class
 */
export type SvtClass =
  | "saber"
  | "archer"
  | "lancer"
  | "rider"
  | "caster"
  | "assassin"
  | "berserker"
  | "shielder"
  | "ruler"
  | "alterEgo"
  | "avenger"
  | "demonGodPillar"
  | "moonCancer"
  | "foreigner"
  | "pretender"
  | "grandCaster"
  | "beastII"
  | "ushiChaosTide"
  | "beastI"
  | "beastILost"
  | "beastIIIR"
  | "beastIIIL"
  | "beastIV"
  | "beastUnknown"
  | "unknown"
  | "agarthaPenth"
  | "cccFinaleEmiyaAlter"
  | "salemAbby"
  | "uOlgaMarie"
  | "uOlgaMarieAlienGod"
  | "beast"
  | "beastVI"
  | "beastVIBoss"
  | "uOlgaMarieFlare"
  | "atlasUnmappedClass"
  | "ALL";
/**
 * Servant Attribute Enum
 */
export type Attribute = "human" | "sky" | "earth" | "star" | "beast" | "void";
/**
 * Gift Type Enum
 */
export type NiceGiftType =
  | "servant"
  | "item"
  | "friendship"
  | "userExp"
  | "equip"
  | "eventSvtJoin"
  | "eventSvtGet"
  | "questRewardIcon"
  | "costumeRelease"
  | "costumeGet"
  | "commandCode"
  | "eventPointBuff"
  | "eventBoardGameToken"
  | "eventCommandAssist"
  | "eventHeelPortrait";
/**
 * Skill Type Enum
 */
export type NiceSkillType = "active" | "passive";
/**
 * Skill Script Condition Type
 */
export type SkillScriptCond =
  | "NONE"
  | "NP_HIGHER"
  | "NP_LOWER"
  | "STAR_HIGHER"
  | "STAR_LOWER"
  | "HP_VAL_HIGHER"
  | "HP_VAL_LOWER"
  | "HP_PER_HIGHER"
  | "HP_PER_LOWER";
export type EnemyDeathType = "escape" | "stand" | "effect" | "wait" | "energy";
/**
 * Card Type Enum
 */
export type NiceCardType =
  | "none"
  | "arts"
  | "buster"
  | "quick"
  | "extra"
  | "blank"
  | "weak"
  | "strength";
/**
 * Treasure Device Effect Flag
 */
export type NiceTdEffectFlag = "support" | "attackEnemyAll" | "attackEnemyOne";
/**
 * AI Act Num Enum
 */
export type NiceAiActNum =
  | "nomal"
  | "anytime"
  | "reactionPlyaerSkill"
  | "reactionEnemyturnStart"
  | "reactionEnemyturnEnd"
  | "reactionDead"
  | "reactionPlayeractionend"
  | "reactionWavestart"
  | "maxnp"
  | "afterTurnPlayerEnd"
  | "usenpTarget"
  | "reactionTurnstart"
  | "reactionPlayeractionstart"
  | "reactionEntryUnit"
  | "reactionBeforeResurrection"
  | "reactionBeforeDead"
  | "shiftServantAfter"
  | "reactionBeforeMoveWave"
  | "reactionEnemyTurnStartPriority"
  | "reactionEnemyTurnEndPriority"
  | "unknown";
/**
 * AI Cond Enum
 */
export type NiceAiCond =
  | "none"
  | "hpHigher"
  | "hpLower"
  | "actcount"
  | "actcountMultiple"
  | "turn"
  | "turnMultiple"
  | "beforeActId"
  | "beforeActType"
  | "beforeNotActId"
  | "beforeNotActType"
  | "checkSelfBuff"
  | "checkSelfIndividuality"
  | "checkPtBuff"
  | "checkPtIndividuality"
  | "checkOpponentBuff"
  | "checkOpponentIndividuality"
  | "checkSelfBuffIndividuality"
  | "checkPtBuffIndividuality"
  | "checkOpponentBuffIndividuality"
  | "checkSelfNpturn"
  | "checkPtLowerNpturn"
  | "checkOpponentHeightNpgauge"
  | "actcountThisturn"
  | "checkPtHpHigher"
  | "checkPtHpLower"
  | "checkSelfNotBuffIndividuality"
  | "turnAndActcountThisturn"
  | "fieldturn"
  | "fieldturnMultiple"
  | "checkPtLowerTdturn"
  | "raidHpHigher"
  | "raidHpLower"
  | "raidCountHigher"
  | "raidCountLower"
  | "raidCountValueHigher"
  | "raidCountValueLower"
  | "checkSpace"
  | "turnHigher"
  | "turnLower"
  | "charactorTurnHigher"
  | "charactorTurnLower"
  | "countAlivePt"
  | "countAliveOpponent"
  | "countPtRestHigher"
  | "countPtRestLower"
  | "countOpponentRestHigher"
  | "countOpponentRestLower"
  | "countItemHigher"
  | "countItemLower"
  | "checkSelfBuffcountIndividuality"
  | "checkPtBuffcountIndividuality"
  | "checkSelfBuffActive"
  | "checkPtBuffActive"
  | "checkOpponentBuffActive"
  | "countEnemyCommandSpellHigher"
  | "checkPtAllIndividuality"
  | "checkOpponentAllIndividuality"
  | "starHigher"
  | "starLower"
  | "checkOpponentHpHigher"
  | "checkOpponentHpLower"
  | "checkTargetPosition"
  | "checkSelfBuffActiveAndPassiveIndividuality"
  | "checkPtBuffActiveAndPassiveIndividuality"
  | "checkOpponentBuffActiveAndPassiveIndividuality"
  | "checkPtAllBuff"
  | "checkOpponentAllBuff"
  | "checkPtAllBuffIndividuality"
  | "checkOpponentAllBuffIndividuality"
  | "countAlivePtAll"
  | "countAliveOpponentAll"
  | "checkPtAllBuffActive"
  | "checkOpponentAllBuffActive"
  | "countHigherBuffIndividualitySumPt"
  | "countHigherBuffIndividualitySumPtAll"
  | "countHigherBuffIndividualitySumOpponent"
  | "countHigherBuffIndividualitySumOpponentAll"
  | "countHigherBuffIndividualitySumSelf"
  | "countLowerBuffIndividualitySumPt"
  | "countLowerBuffIndividualitySumPtAll"
  | "countLowerBuffIndividualitySumOpponent"
  | "countLowerBuffIndividualitySumOpponentAll"
  | "countLowerBuffIndividualitySumSelf"
  | "countEqualBuffIndividualitySumPt"
  | "countEqualBuffIndividualitySumPtAll"
  | "countEqualBuffIndividualitySumOpponent"
  | "countEqualBuffIndividualitySumOpponentAll"
  | "countEqualBuffIndividualitySumSelf"
  | "existIndividualityOpponentFront"
  | "existIndividualityOpponentCenter"
  | "existIndividualityOpponentBack"
  | "totalCountHigherIndividualityPt"
  | "totalCountHigherIndividualityPtAll"
  | "totalCountHigherIndividualityOpponent"
  | "totalCountHigherIndividualityOpponentAll"
  | "totalCountHigherIndividualityAllField"
  | "totalCountLowerIndividualityPt"
  | "totalCountLowerIndividualityPtAll"
  | "totalCountLowerIndividualityOpponent"
  | "totalCountLowerIndividualityOpponentAll"
  | "totalCountLowerIndividualityAllField"
  | "totalCountEqualIndividualityPt"
  | "totalCountEqualIndividualityPtAll"
  | "totalCountEqualIndividualityOpponent"
  | "totalCountEqualIndividualityOpponentAll"
  | "totalCountEqualIndividualityAllField"
  | "ptFrontDeadEqual"
  | "ptCenterDeadEqual"
  | "ptBackDeadEqual"
  | "countHigherIndividualityPtFront"
  | "countHigherIndividualityPtCenter"
  | "countHigherIndividualityPtBack"
  | "countHigherIndividualityOpponentFront"
  | "countHigherIndividualityOpponentCenter"
  | "countHigherIndividualityOpponentBack"
  | "countLowerIndividualityPtFront"
  | "countLowerIndividualityPtCenter"
  | "countLowerIndividualityPtBack"
  | "countLowerIndividualityOpponentFront"
  | "countLowerIndividualityOpponentCenter"
  | "countLowerIndividualityOpponentBack"
  | "countEqualIndividualityPtFront"
  | "countEqualIndividualityPtCenter"
  | "countEqualIndividualityPtBack"
  | "countEqualIndividualityOpponentFront"
  | "countEqualIndividualityOpponentCenter"
  | "countEqualIndividualityOpponentBack"
  | "checkPrecedingEnemy"
  | "countHigherRemainTurn"
  | "countLowerRemainTurn"
  | "countHigherAi171"
  | "countLowerAi172"
  | "countEqualAi173"
  | "checkAi174"
  | "checkSelfNpturnHigher"
  | "checkSelfNpturnLower"
  | "checkUseSkillThisturn"
  | "countChainHigher"
  | "countChainLower"
  | "countChainEqual"
  | "checkSelectChain"
  | "countPlayerNpHigher"
  | "countPlayerNpLower"
  | "countPlayerNpEqual"
  | "countPlayerSkillHigher"
  | "countPlayerSkillLower"
  | "countPlayerSkillEqual"
  | "countPlayerSkillHigherIncludeMasterSkill"
  | "countPlayerSkillLowerIncludeMasterSkill"
  | "countPlayerSkillEqualIncludeMasterSkill"
  | "totalTurnHigher"
  | "totalTurnLower"
  | "totalTurnEqual";
/**
 * AI Act Type Enum
 */
export type NiceAiActType =
  | "none"
  | "random"
  | "attack"
  | "skillRandom"
  | "skill1"
  | "skill2"
  | "skill3"
  | "attackA"
  | "attackB"
  | "attackQ"
  | "attackACritical"
  | "attackBCritical"
  | "attackQCritical"
  | "attackCritical"
  | "skillId"
  | "skillIdCheckbuff"
  | "resurrection"
  | "playMotion"
  | "message"
  | "messageGroup"
  | "noblePhantasm"
  | "battleEnd"
  | "loseEnd"
  | "battleEndNotRelatedSurvivalStatus"
  | "changeThinking";
/**
 * AI Act Target Enum
 */
export type NiceAiActTarget =
  | "none"
  | "random"
  | "hpHigher"
  | "hpLower"
  | "npturnLower"
  | "npgaugeHigher"
  | "revenge"
  | "individualityActive"
  | "buffActive"
  | "front"
  | "center"
  | "back";
/**
 * Field AI timing Enum
 */
export type AiTiming =
  | "dead"
  | "turnEnemyStart"
  | "turnEnemyEnd"
  | "turnPlayerStart"
  | "turnPlayerEnd"
  | "waveStart"
  | "turnStart"
  | "unknown";
/**
 * Gender Enum
 */
export type NiceGender = "male" | "female" | "unknown";
/**
 * Command Card Attack Type
 */
export type NiceCommandCardAttackType = "one" | "all";
/**
 * Item Type Enum
 */
export type NiceItemType =
  | "qp"
  | "stone"
  | "apRecover"
  | "apAdd"
  | "mana"
  | "key"
  | "gachaClass"
  | "gachaRelic"
  | "gachaTicket"
  | "limit"
  | "skillLvUp"
  | "tdLvUp"
  | "friendPoint"
  | "eventPoint"
  | "eventItem"
  | "questRewardQp"
  | "chargeStone"
  | "rpAdd"
  | "boostItem"
  | "stoneFragments"
  | "anonymous"
  | "rarePri"
  | "costumeRelease"
  | "itemSelect"
  | "commandCardPrmUp"
  | "dice"
  | "continueItem"
  | "euqipSkillUseItem"
  | "svtCoin"
  | "friendshipUpItem"
  | "pp"
  | "tradeAp"
  | "ri"
  | "stormpod";
/**
 * Item Use Enum
 */
export type NiceItemUse = "skill" | "appendSkill" | "ascension" | "costume";
/**
 * Item Background Type Enum
 */
export type NiceItemBGType =
  | "zero"
  | "bronze"
  | "silver"
  | "gold"
  | "questClearQPReward"
  | "aquaBlue"
  | "six"
  | "unknown";
/**
 * Status Rank Enum
 */
export type NiceStatusRank =
  | "A"
  | "A+"
  | "A++"
  | "A-"
  | "A+++"
  | "B"
  | "B+"
  | "B++"
  | "B-"
  | "B+++"
  | "C"
  | "C+"
  | "C++"
  | "C-"
  | "C+++"
  | "D"
  | "D+"
  | "D++"
  | "D-"
  | "D+++"
  | "E"
  | "E+"
  | "E++"
  | "E-"
  | "E+++"
  | "EX"
  | "?"
  | "None"
  | "Unknown";
/**
 * Servant Policy Enum
 */
export type ServantPolicy =
  | "none"
  | "neutral"
  | "lawful"
  | "chaotic"
  | "unknown";
/**
 * Servant Personality Enum
 */
export type ServantPersonality =
  | "none"
  | "good"
  | "madness"
  | "balanced"
  | "summer"
  | "evil"
  | "goodAndEvil"
  | "bride"
  | "unknown";
/**
 * Servant Voice Type Enum
 */
export type NiceSvtVoiceType =
  | "home"
  | "groeth"
  | "firstGet"
  | "eventJoin"
  | "eventReward"
  | "battle"
  | "treasureDevice"
  | "masterMission"
  | "eventShop"
  | "homeCostume"
  | "boxGachaTalk"
  | "battleEntry"
  | "battleWin"
  | "eventTowerReward"
  | "guide"
  | "eventDailyPoint"
  | "tddamage"
  | "treasureBox"
  | "warBoard"
  | "eventDigging"
  | "eventExpedition"
  | "eventRecipe"
  | "eventFortification"
  | "sum";
/**
 * Voice Condition Type Enum
 */
export type NiceVoiceCondType =
  | "birthDay"
  | "event"
  | "friendship"
  | "svtGet"
  | "svtGroup"
  | "questClear"
  | "notQuestClear"
  | "levelUp"
  | "limitCount"
  | "limitCountCommon"
  | "countStop"
  | "isnewWar"
  | "eventEnd"
  | "eventNoend"
  | "eventMissionAction"
  | "masterMission"
  | "limitCountAbove"
  | "eventShopPurchase"
  | "eventPeriod"
  | "friendshipAbove"
  | "spacificShopPurchase"
  | "friendshipBelow"
  | "costume"
  | "levelUpLimitCount"
  | "levelUpLimitCountAbove"
  | "levelUpLimitCountBelow"
  | "unknown27"
  | "unknown30"
  | "unknown32"
  | "unknown34"
  | "unknown35"
  | "unknown37"
  | "unknown38"
  | "unknown40"
  | "unknown";
/**
 * Shop Type Enum
 */
export type NiceShopType =
  | "none"
  | "eventItem"
  | "mana"
  | "rarePri"
  | "svtStorage"
  | "svtEquipStorage"
  | "stoneFragments"
  | "svtAnonymous"
  | "bgm"
  | "limitMaterial"
  | "grailFragments"
  | "svtCostume"
  | "startUpSummon"
  | "shop13"
  | "tradeAp"
  | "shop15";
/**
 * Pay Type Enum
 */
export type NicePayType =
  | "stone"
  | "qp"
  | "friendPoint"
  | "mana"
  | "ticket"
  | "eventItem"
  | "chargeStone"
  | "stoneFragments"
  | "anonymous"
  | "rarePri"
  | "item"
  | "grailFragments"
  | "free"
  | "commonConsume";
/**
 * Common Consume Type
 */
export type NiceCommonConsumeType = "item" | "ap";
/**
 * Purchase Type Enum
 */
export type NicePurchaseType =
  | "none"
  | "item"
  | "equip"
  | "friendGacha"
  | "servant"
  | "setItem"
  | "quest"
  | "eventShop"
  | "eventSvtGet"
  | "manaShop"
  | "storageSvt"
  | "storageSvtequip"
  | "bgm"
  | "costumeRelease"
  | "bgmRelease"
  | "lotteryShop"
  | "eventFactory"
  | "itemAsPresent"
  | "commandCode"
  | "gift"
  | "eventSvtJoin"
  | "assist"
  | "kiaraPunisherReset";
/**
 * Class Board Skill Type
 */
export type NiceClassBoardSkillType = "none" | "passive" | "commandSpell";
/**
 * Class Board Square Flag
 */
export type NiceClassBoardSquareFlag = "start" | "blank";
/**
 * Event Type Enum
 */
export type NiceEventType =
  | "none"
  | "raidBoss"
  | "pvp"
  | "point"
  | "loginBonus"
  | "combineCampaign"
  | "shop"
  | "questCampaign"
  | "bank"
  | "serialCampaign"
  | "loginCampaign"
  | "loginCampaignRepeat"
  | "eventQuest"
  | "svtequipCombineCampaign"
  | "terminalBanner"
  | "boxGacha"
  | "boxGachaPoint"
  | "loginCampaignStrict"
  | "totalLogin"
  | "comebackCampaign"
  | "locationCampaign"
  | "warBoard"
  | "combineCosutumeItem"
  | "myroomMultipleViewCampaign"
  | "interludeCampaign"
  | "myroomPhotoCampaign";
/**
 * Event Overwrite Type Enum
 */
export type NiceEventOverwriteType =
  | "bgImage"
  | "bgm"
  | "name"
  | "banner"
  | "noticeBanner";
/**
 * Event Reward Scene Flag
 */
export type NiceEventRewardSceneFlag =
  | "npcGuide"
  | "isChangeSvtByChangedTab"
  | "isHideTab";
export type EventPointActivityObjectType = "questId" | "skillId" | "shopId";
/**
 * Mission Type Enum
 */
export type NiceMissionType =
  | "none"
  | "event"
  | "weekly"
  | "daily"
  | "extra"
  | "limited"
  | "complete"
  | "random";
/**
 * Mission Reward Type Enum
 */
export type NiceMissionRewardType = "gift" | "extra" | "set";
/**
 * Mission Progress Type Enum
 */
export type NiceMissionProgressType =
  | "none"
  | "regist"
  | "openCondition"
  | "start"
  | "clear"
  | "achieve";
/**
 * Mission Condition Detail Condition Link Type Enum
 */
export type NiceDetailMissionCondLinkType =
  | "eventStart"
  | "missionStart"
  | "masterMissionStart"
  | "randomMissionStart";
/**
 * Event Fortification Work Type
 */
export type NiceEventWorkType =
  | "militsryAffairs"
  | "internalAffairs"
  | "farmming";
/**
 * Servant Class Support Group Type
 */
export type NiceSvtClassSupportGroupType =
  | "all"
  | "saber"
  | "archer"
  | "lancer"
  | "rider"
  | "caster"
  | "assassin"
  | "berserker"
  | "extra"
  | "mix"
  | "notSupport";
/**
 * Event Fortification Servant Type
 */
export type NiceEventFortificationSvtType = "userSvt" | "npc" | "none";
/**
 * Combine Adjust Target Type
 */
export type NiceCombineAdjustTarget =
  | "combineQp"
  | "combineExp"
  | "activeSkill"
  | "largeSuccess"
  | "superSuccess"
  | "limitQp"
  | "limitItem"
  | "skillQp"
  | "skillItem"
  | "treasureDeviceQp"
  | "treasureDeviceItem"
  | "questAp"
  | "questExp"
  | "questQp"
  | "questDrop"
  | "svtequipCombineQp"
  | "svtequipCombineExp"
  | "svtequipLargeSuccess"
  | "svtequipSuperSuccess"
  | "questEventPoint"
  | "enemySvtClassPickUp"
  | "eventEachDropNum"
  | "eventEachDropRate"
  | "questFp"
  | "questApFirstTime"
  | "dailyDropUp"
  | "exchangeSvtCombineExp"
  | "questUseContinueItem"
  | "friendPointGachaFreeDrawNum"
  | "questUseFriendshipUpItem"
  | "questFriendship"
  | "largeSuccessByClass"
  | "superSuccessByClass"
  | "exchangeSvt";
/**
 * Event Combine Calc Type
 */
export type NiceEventCombineCalc = "addition" | "multiplication" | "fixedValue";
/**
 * NPC Servant Follower Flag
 */
export type NiceNpcServantFollowerFlag =
  | "npc"
  | "hideSupport"
  | "notUsedTreasureDevice"
  | "noDisplayBonusIcon"
  | "applySvtChange"
  | "hideEquip"
  | "noDisplayBonusIconEquip"
  | "hideTreasureDeviceLv"
  | "hideTreasureDeviceDetail"
  | "hideRarity"
  | "notClassBoard";
export type DeckType =
  | "enemy"
  | "call"
  | "shift"
  | "change"
  | "transform"
  | "skillShift"
  | "missionTargetSkillShift"
  | "aiNpc"
  | "svtFollower";
export type EnemyRoleType = "normal" | "danger" | "servant";
/**
 * Restriction Type
 */
export type NiceRestrictionType =
  | "individuality"
  | "rarity"
  | "totalCost"
  | "lv"
  | "supportOnly"
  | "uniqueSvtOnly"
  | "fixedSupportPosition"
  | "fixedMySvtIndividualityPositionMain"
  | "fixedMySvtIndividualitySingle"
  | "svtNum"
  | "mySvtNum"
  | "mySvtOrNpc"
  | "alloutBattleUniqueSvt"
  | "fixedSvtIndividualityPositionMain"
  | "uniqueIndividuality"
  | "mySvtOrSupport"
  | "dataLostBattleUniqueSvt";
/**
 * Restriction Range Type
 */
export type NiceRestrictionRangeType =
  | "none"
  | "equal"
  | "notEqual"
  | "above"
  | "below"
  | "between";
/**
 * Frequency Type
 */
export type NiceFrequencyType =
  | "once"
  | "onceUntilReboot"
  | "everyTime"
  | "valentine"
  | "everyTimeAfter"
  | "none";
export type StageLimitActType = "win" | "lose";
/**
 * Spot Overwrite Type
 */
export type NiceSpotOverwriteType =
  | "none"
  | "flag"
  | "pathPointRatio"
  | "pathPointRatioLimit"
  | "namePanelOffsetX"
  | "namePanelOffsetY"
  | "name";
/**
 * War Flag Enum
 */
export type NiceWarFlag =
  | "withMap"
  | "showOnMaterial"
  | "folderSortPrior"
  | "storyShortcut"
  | "isEvent"
  | "closeAfterClear"
  | "mainScenario"
  | "isWarIconLeft"
  | "clearedReturnToTitle"
  | "noClearMarkWithClear"
  | "noClearMarkWithComplete"
  | "notEntryBannerActive"
  | "shop"
  | "blackMarkWithClear"
  | "dispFirstQuest"
  | "effectDisappearBanner"
  | "whiteMarkWithClear"
  | "whiteMarkUnderBoard"
  | "subFolder"
  | "dispEarthPointWithoutMap"
  | "isWarIconFree"
  | "isWarIconCenter"
  | "noticeBoard";
/**
 * War Start Type Enum
 */
export type NiceWarStartType = "none" | "script" | "quest";
/**
 * War Overwrite Type Enum
 */
export type NiceWarOverwriteType =
  | "bgm"
  | "parentWar"
  | "banner"
  | "bgImage"
  | "svtImage"
  | "flag"
  | "baseMapId"
  | "name"
  | "longName"
  | "materialParentWar"
  | "coordinates"
  | "effectChangeBlackMark"
  | "questBoardSectionImage"
  | "warForceDisp"
  | "warForceHide"
  | "startType"
  | "noticeDialogText"
  | "clearMark"
  | "effectChangeWhiteMark"
  | "commandSpellIcon"
  | "masterFaceIcon";

export interface AscensionAdd {
  /**
   * Some servants add or remove traits as they ascend.
   */
  individuality: AscensionAddEntryTrait;
  /**
   * Some servants change voice lines as they ascennd.
   */
  voicePrefix: AscensionAddEntryInt;
  overWriteServantName: AscensionAddEntryStr;
  originalOverWriteServantName: AscensionAddEntryStr;
  overWriteServantBattleName: AscensionAddEntryStr;
  originalOverWriteServantBattleName: AscensionAddEntryStr;
  overWriteTDName: AscensionAddEntryStr;
  originalOverWriteTDName: AscensionAddEntryStr;
  overWriteTDRuby: AscensionAddEntryStr;
  overWriteTDFileName: AscensionAddEntryHttpUrl;
  overWriteTDRank: AscensionAddEntryStr;
  overWriteTDTypeText: AscensionAddEntryStr;
  lvMax: AscensionAddEntryInt;
  rarity: AscensionAddEntryInt;
  charaGraphChange: AscensionAddEntryHttpUrl;
  charaGraphChangeCommonRelease: AscensionAddEntryCommonRelease;
  faceChange: AscensionAddEntryHttpUrl;
  faceChangeCommonRelease: AscensionAddEntryCommonRelease;
}
export interface AscensionAddEntryTrait {
  /**
   * Mapping <Ascension level, Ascension level data>.
   */
  ascension: {
    [k: string]: NiceTrait[];
  };
  /**
   * Mapping <Costume ID, Costume data>.
   */
  costume: {
    [k: string]: NiceTrait[];
  };
}
/**
 * Nice trait
 */
export interface NiceTrait {
  id: number;
  name: Trait;
  negative?: boolean;
}
export interface AscensionAddEntryInt {
  /**
   * Mapping <Ascension level, Ascension level data>.
   */
  ascension: {
    [k: string]: number;
  };
  /**
   * Mapping <Costume ID, Costume data>.
   */
  costume: {
    [k: string]: number;
  };
}
export interface AscensionAddEntryStr {
  /**
   * Mapping <Ascension level, Ascension level data>.
   */
  ascension: {
    [k: string]: string;
  };
  /**
   * Mapping <Costume ID, Costume data>.
   */
  costume: {
    [k: string]: string;
  };
}
export interface AscensionAddEntryHttpUrl {
  /**
   * Mapping <Ascension level, Ascension level data>.
   */
  ascension: {
    [k: string]: string;
  };
  /**
   * Mapping <Costume ID, Costume data>.
   */
  costume: {
    [k: string]: string;
  };
}
export interface AscensionAddEntryCommonRelease {
  /**
   * Mapping <Ascension level, Ascension level data>.
   */
  ascension: {
    [k: string]: NiceCommonRelease[];
  };
  /**
   * Mapping <Costume ID, Costume data>.
   */
  costume: {
    [k: string]: NiceCommonRelease[];
  };
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceCommonRelease {
  id: number;
  priority: number;
  condGroup: number;
  condType: NiceCondType;
  condId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BaseModelORJson {}
export interface BaseVals {
  Rate?: number;
  Turn?: number;
  Count?: number;
  Value?: number;
  Value2?: number;
  UseRate?: number;
  Target?: number;
  Correction?: number;
  ParamAdd?: number;
  ParamMax?: number;
  HideMiss?: number;
  OnField?: number;
  HideNoEffect?: number;
  Unaffected?: number;
  ShowState?: number;
  AuraEffectId?: number;
  ActSet?: number;
  ActSetWeight?: number;
  ShowQuestNoEffect?: number;
  CheckDead?: number;
  RatioHPHigh?: number;
  RatioHPLow?: number;
  SetPassiveFrame?: number;
  ProcPassive?: number;
  ProcActive?: number;
  HideParam?: number;
  SkillID?: number;
  SkillLV?: number;
  ShowCardOnly?: number;
  EffectSummon?: number;
  RatioHPRangeHigh?: number;
  RatioHPRangeLow?: number;
  TargetList?: number[];
  OpponentOnly?: number;
  StatusEffectId?: number;
  EndBattle?: number;
  LoseBattle?: number;
  AddIndividualty?: number;
  AddLinkageTargetIndividualty?: number;
  SameBuffLimitTargetIndividuality?: number;
  SameBuffLimitNum?: number;
  CheckDuplicate?: number;
  OnFieldCount?: number;
  TargetRarityList?: number[];
  DependFuncId?: number;
  InvalidHide?: number;
  OutEnemyNpcId?: number;
  InEnemyNpcId?: number;
  OutEnemyPosition?: number;
  IgnoreIndividuality?: number;
  StarHigher?: number;
  ChangeTDCommandType?: number;
  ShiftNpcId?: number;
  DisplayLastFuncInvalidType?: number;
  AndCheckIndividualityList?: number[];
  WinBattleNotRelatedSurvivalStatus?: number;
  ForceSelfInstantDeath?: number;
  ChangeMaxBreakGauge?: number;
  ParamAddMaxValue?: number;
  ParamAddMaxCount?: number;
  LossHpChangeDamage?: number;
  IncludePassiveIndividuality?: number;
  MotionChange?: number;
  PopLabelDelay?: number;
  NoTargetNoAct?: number;
  CardIndex?: number;
  CardIndividuality?: number;
  WarBoardTakeOverBuff?: number;
  ParamAddSelfIndividuality?: number[];
  ParamAddOpIndividuality?: number[];
  ParamAddFieldIndividuality?: number[];
  ParamAddValue?: number;
  MultipleGainStar?: number;
  NoCheckIndividualityIfNotUnit?: number;
  ForcedEffectSpeedOne?: number;
  SetLimitCount?: number;
  CheckEnemyFieldSpace?: number;
  TriggeredFuncPosition?: number;
  DamageCount?: number;
  DamageRates?: number[];
  OnPositions?: number[];
  OffPositions?: number[];
  TargetIndiv?: number;
  IncludeIgnoreIndividuality?: number;
  EvenIfWinDie?: number;
  CallSvtEffectId?: number;
  ForceAddState?: number;
  UnSubState?: number;
  ForceSubState?: number;
  IgnoreIndivUnreleaseable?: number;
  OnParty?: number;
  CounterId?: number;
  CounterLv?: number;
  CounterOc?: number;
  UseTreasureDevice?: number;
  SkillReaction?: number;
  BehaveAsFamilyBuff?: number;
  /**
   * The buff with this dataVal is removed if the linked buff is removed.
   */
  UnSubStateWhileLinkedToOthers?: number;
  AllowSubBgmPlaying?: number;
  NotAccompanyWhenLinkedTargetMoveState?: number;
  NotTargetSkillIdArray?: number[];
  ShortTurn?: number;
  FieldIndividuality?: number;
  BGId?: number;
  BGType?: number;
  BgmId?: number;
  TakeOverFieldState?: number;
  TakeOverNextWaveBGAndBGM?: number;
  RemoveFieldBuffActorDeath?: number;
  FieldBuffGrantType?: number;
  Priority?: number;
  AddIndividualityEx?: number;
  IgnoreResistance?: number;
  GainNpTargetPassiveIndividuality?: number;
  HpReduceToRegainIndiv?: number;
  DisplayActualRecoveryHpFlag?: number;
  ShiftDeckIndex?: number;
  PopValueText?: string;
  IsLossHpPerNow?: number;
  CopyTargetFunctionType?: number[];
  CopyFunctionTargetPTOnly?: number;
  IgnoreValueUp?: number;
  ApplyValueUp?: string[];
  ActNoDamageBuff?: number;
  ActSelectIndex?: number;
  CopyTargetBuffType?: number[];
  NotSkillCopyTargetFuncIds?: number[];
  NotSkillCopyTargetIndividualities?: number[];
  ClassIconAuraEffectId?: number;
  ActMasterGenderType?: number;
  IntervalTurn?: number;
  IntervalCount?: number;
  TriggeredFieldCountTarget?: number;
  TriggeredFieldCountRange?: number[];
  TargetEnemyRange?: number[];
  TriggeredFuncPositionSameTarget?: number;
  TriggeredFuncPositionAll?: number;
  TriggeredTargetHpRange?: string;
  TriggeredTargetHpRateRange?: string;
  ExcludeUnSubStateIndiv?: number;
  ApplySupportSvt?: number;
  Individuality?: number;
  EventId?: number;
  AddCount?: number;
  RateCount?: number;
  DropRateCount?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicQuest {
  id: number;
  name: string;
  type: NiceQuestType;
  flags: NiceQuestFlag[];
  afterClear: NiceQuestAfterClearType;
  consumeType: NiceConsumeType;
  consume: number;
  spotId: number;
  spotName: string;
  warId: number;
  warLongName: string;
  priority: number;
  noticeAt: number;
  openedAt: number;
  closedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedBuff {
  function?: BasicFunctionReverse[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicFunctionReverse {
  funcId: number;
  funcType: NiceFuncType;
  funcTargetType: NiceFuncTargetType;
  funcTargetTeam: FuncApplyTarget;
  functvals: NiceTrait[];
  funcquestTvals: NiceTrait[];
  traitVals?: NiceTrait[];
  buffs: BasicBuff[];
  reverse?: BasicReversedFunctionType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicBuff {
  id: number;
  name: string;
  originalName: string;
  icon: string;
  type: NiceBuffType;
  script: BuffScript;
  vals: NiceTrait[];
  tvals: NiceTrait[];
  ckSelfIndv: NiceTrait[];
  ckOpIndv: NiceTrait[];
}
export interface BuffScript {
  checkIndvType?: number;
  CheckOpponentBuffTypes?: NiceBuffType[];
  relationId?: NiceBuffRelationOverwrite;
  ReleaseText?: string;
  DamageRelease?: number;
  INDIVIDUALITIE?: NiceTrait;
  INDIVIDUALITIE_COUNT_ABOVE?: number;
  INDIVIDUALITIE_AND?: NiceTrait[];
  INDIVIDUALITIE_OR?: NiceTrait[];
  UpBuffRateBuffIndiv?: NiceTrait[];
  HP_LOWER?: number;
  HP_HIGHER?: number;
  CounterMessage?: string;
  avoidanceText?: string;
  gutsText?: string;
  missText?: string;
  AppId?: number;
  IncludeIgnoreIndividuality?: number;
  ProgressSelfTurn?: number;
  TargetIndiv?: NiceTrait;
  extendLowerLimit?: number;
  convert?: BuffConvert;
}
export interface NiceBuffRelationOverwrite {
  atkSide: {
    [k: string]: {
      [k: string]: RelationOverwriteDetail;
    };
  };
  defSide: {
    [k: string]: {
      [k: string]: RelationOverwriteDetail;
    };
  };
}
export interface RelationOverwriteDetail {
  damageRate: number;
  type: NiceClassRelationOverwriteType;
}
/**
 * Buff Convert
 *
 * Due to a limitation in Pydantic and OpenAPI schema generation, `dict[str, Any]`
 * is used in place of either BasicBuff or NiceBuff
 */
export interface BuffConvert {
  targetLimit: NiceBuffConvertLimitType;
  convertType: NiceBuffConvertType;
  targets:
    | number[]
    | NiceTrait[]
    | {
        [k: string]: unknown;
      }[];
  convertBuffs: {
    [k: string]: unknown;
  }[];
  script: BuffConvertScript;
  effectId: number;
}
export interface BuffConvertScript {
  OverwritePopupText: string[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedFunctionType {
  basic?: BasicReversedFunction;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedFunction {
  skill?: BasicSkillReverse[];
  NP?: BasicTdReverse[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicSkillReverse {
  id: number;
  name: string;
  ruby: string;
  icon?: string;
  reverse?: BasicReversedSkillTdType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedSkillTdType {
  basic?: BasicReversedSkillTd;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedSkillTd {
  servant?: BasicServant[];
  MC?: BasicMysticCode[];
  CC?: BasicCommandCode[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicServant {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  overwriteName?: string;
  originalOverwriteName?: string;
  type: NiceSvtType;
  flag: NiceSvtFlag;
  classId: number;
  className: SvtClass | string;
  attribute: Attribute;
  rarity: number;
  atkMax: number;
  hpMax: number;
  face: string;
  /**
   * Mapping <Costume BattleCharaID, Costume Detail>.
   */
  costume: {
    [k: string]: BasicCostume;
  };
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicCostume {
  id: number;
  costumeCollectionNo: number;
  battleCharaId: number;
  shortName: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicMysticCode {
  id: number;
  name: string;
  item: MCAssets;
}
/**
 * Mystic Code Assets
 */
export interface MCAssets {
  male: string;
  female: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicCommandCode {
  id: number;
  collectionNo: number;
  name: string;
  rarity: number;
  face: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicTdReverse {
  id: number;
  name: string;
  ruby: string;
  reverse?: BasicReversedSkillTdType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyAi {
  aiId: number;
  actPriority: number;
  maxActNum: number;
  minActNum?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyDrop {
  type: NiceGiftType;
  objectId: number;
  num: number;
  dropCount: number;
  runs: number;
  dropExpected: number;
  dropVariance: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyInfoScript {
  isAddition?: boolean;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyLimit {
  limitCount: number;
  imageLimitCount: number;
  dispLimitCount: number;
  commandCardLimitCount: number;
  iconLimitCount: number;
  portraitLimitCount: number;
  battleVoice: number;
  exceedCount: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyMisc {
  displayType: number;
  npcSvtType: number;
  passiveSkill?: number[];
  equipTargetId1: number;
  equipTargetIds?: number[];
  npcSvtClassId: number;
  overwriteSvtId: number;
  userCommandCodeIds: number[];
  commandCardParam?: number[];
  status: number;
  hpGaugeType?: number;
  imageSvtId?: number;
  condVal?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyPassive {
  classPassive: NiceSkill[];
  addPassive: NiceSkill[];
  addPassiveLvs?: number[];
  appendPassiveSkillIds?: number[];
  appendPassiveSkillLvs?: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSkill {
  id: number;
  num?: number;
  name: string;
  originalName: string;
  ruby: string;
  detail?: string;
  unmodifiedDetail?: string;
  type: NiceSkillType;
  svtId: number;
  strengthStatus?: number;
  priority?: number;
  condQuestId?: number;
  condQuestPhase?: number;
  condLv?: number;
  condLimitCount?: number;
  icon?: string;
  coolDown: number[];
  actIndividuality: NiceTrait[];
  script: NiceSkillScript;
  extraPassive: ExtraPassive[];
  skillAdd: NiceSkillAdd[];
  skillSvts?: NiceSkillSvt[];
  aiIds?: {
    [k: string]: number[];
  };
  groupOverwrites?: NiceSkillGroupOverwrite[];
  functions: NiceFunction[];
}
export interface NiceSkillScript {
  NP_HIGHER?: number[];
  NP_LOWER?: number[];
  STAR_HIGHER?: number[];
  STAR_LOWER?: number[];
  HP_VAL_HIGHER?: number[];
  HP_VAL_LOWER?: number[];
  HP_PER_HIGHER?: number[];
  HP_PER_LOWER?: number[];
  additionalSkillId?: number[];
  additionalSkillActorType?: number[];
  tdTypeChangeIDs?: number[];
  excludeTdChangeTypes?: number[];
  actRarity?: number[][];
  battleStartRemainingTurn?: number[];
  SelectAddInfo?: NiceSelectAddInfo[];
}
export interface NiceSelectAddInfo {
  title: string;
  btn: NiceSelectAddInfoBtn[];
}
export interface NiceSelectAddInfoBtn {
  name: string;
  conds: NiceSelectAddInfoBtnCond[];
}
export interface NiceSelectAddInfoBtnCond {
  cond: SkillScriptCond;
  value?: number;
}
export interface ExtraPassive {
  num: number;
  priority: number;
  condQuestId: number;
  condQuestPhase: number;
  condLv: number;
  condLimitCount: number;
  condFriendshipRank: number;
  eventId: number;
  flag: number;
  releaseConditions?: NiceCommonRelease[];
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSkillAdd {
  priority: number;
  releaseConditions: NiceCommonRelease[];
  name: string;
  originalName: string;
  ruby: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSkillSvt {
  svtId: number;
  num: number;
  priority: number;
  script?: {
    [k: string]: unknown;
  };
  strengthStatus: number;
  condQuestId: number;
  condQuestPhase: number;
  condLv?: number;
  condLimitCount: number;
  eventId: number;
  flag: number;
  releaseConditions: NiceSvtSkillRelease[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSvtSkillRelease {
  idx: number;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
  condGroup: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSkillGroupOverwrite {
  level: number;
  skillGroupId: number;
  startedAt: number;
  endedAt: number;
  icon?: string;
  detail: string;
  unmodifiedDetail: string;
  /**
   * Since each skill level has their own group overwrite, the svals field only contains data for 1 level.
   */
  functions: NiceFunction[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceFunction {
  /**
   * Function ID
   */
  funcId: number;
  /**
   * Function type
   */
  funcType: NiceFuncType;
  /**
   * Determines the number of targets and the pool of applicable targets.
   */
  funcTargetType: NiceFuncTargetType;
  /**
   * Determines whether the function applies to only player's servants, only quest enemies or both. Note that this is independent of `funcTargetType`. You need to look at both fields to check if the function applies.
   */
  funcTargetTeam: FuncApplyTarget;
  /**
   * Function pop-up text
   */
  funcPopupText: string;
  /**
   * Function pop-up icon URL.
   */
  funcPopupIcon?: string;
  /**
   * Function tvals: If available, function's targets or their buffs need to satisfy the traits given here.
   */
  functvals: NiceTrait[];
  /**
   * Function quest traits. The current quest needs this traits for the function to works.
   */
  funcquestTvals: NiceTrait[];
  /**
   * Some more details for event drop up, bond point up functions
   */
  funcGroup: NiceFuncGroup[];
  /**
   * Trait details to be used by buff removal functions.
   */
  traitVals?: NiceTrait[];
  /**
   * Buff details to be used by apply buff functions.Even though this is a list, it is safe to assume it only contains 1 buff if applicablee.g. you can get the buff by buffs[0]. `buffs[0]` is also what the game hardcoded.
   */
  buffs: NiceBuff[];
  /**
   * Parameter values by skill level or NP level
   */
  svals: Vals[];
  /**
   * Parameter values for NP Overcharge level 2 by NP level
   */
  svals2?: Vals[];
  /**
   * Parameter values for NP Overcharge level 3 by NP level
   */
  svals3?: Vals[];
  /**
   * Parameter values for NP Overcharge level 4 by NP level
   */
  svals4?: Vals[];
  /**
   * Parameter values for NP Overcharge level 5 by NP level
   */
  svals5?: Vals[];
  /**
   * Parameter values when used by a support servant. If the function comes from a support servant, the values here will be used if available, e.g. Chaldea Teatime.
   */
  followerVals?: Vals[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceFuncGroup {
  eventId: number;
  baseFuncId: number;
  nameTotal: string;
  name: string;
  icon?: string;
  priority: number;
  isDispValue: boolean;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBuff {
  /**
   * Buff ID.
   */
  id: number;
  /**
   * Buff name.
   */
  name: string;
  originalName: string;
  /**
   * Buff detailed description.
   */
  detail: string;
  /**
   * Buff icon URL.
   */
  icon?: string;
  /**
   * Buff type.
   */
  type: NiceBuffType;
  /**
   * Buff group.See https://github.com/atlasacademy/fgo-docs#unstackable-buffs for how this field is used.
   */
  buffGroup: number;
  /**
   * Random stuffs that get added to the buff entry. See each field description for more details.
   */
  script: BuffScript;
  /**
   * Buff traits/individualities. For example, buff removal uses this field to target the buffs.
   */
  vals: NiceTrait[];
  /**
   * Buff tvals: I'm quite sure this field is used for visual purposes only and not gameplay.
   */
  tvals: NiceTrait[];
  /**
   * Buff holder's required individuality for the buff's effect to apply.
   */
  ckSelfIndv: NiceTrait[];
  /**
   * Target's required individuality for the buff's effect to apply.
   */
  ckOpIndv: NiceTrait[];
  /**
   * Buff max rate. See https://github.com/atlasacademy/fgo-docs#lower-and-upper-bounds-of-buffs for how this field is used.
   */
  maxRate: number;
}
export interface Vals {
  Rate?: number;
  Turn?: number;
  Count?: number;
  Value?: number;
  Value2?: number;
  UseRate?: number;
  Target?: number;
  Correction?: number;
  ParamAdd?: number;
  ParamMax?: number;
  HideMiss?: number;
  OnField?: number;
  HideNoEffect?: number;
  Unaffected?: number;
  ShowState?: number;
  AuraEffectId?: number;
  ActSet?: number;
  ActSetWeight?: number;
  ShowQuestNoEffect?: number;
  CheckDead?: number;
  RatioHPHigh?: number;
  RatioHPLow?: number;
  SetPassiveFrame?: number;
  ProcPassive?: number;
  ProcActive?: number;
  HideParam?: number;
  SkillID?: number;
  SkillLV?: number;
  ShowCardOnly?: number;
  EffectSummon?: number;
  RatioHPRangeHigh?: number;
  RatioHPRangeLow?: number;
  TargetList?: number[];
  OpponentOnly?: number;
  StatusEffectId?: number;
  EndBattle?: number;
  LoseBattle?: number;
  AddIndividualty?: number;
  AddLinkageTargetIndividualty?: number;
  SameBuffLimitTargetIndividuality?: number;
  SameBuffLimitNum?: number;
  CheckDuplicate?: number;
  OnFieldCount?: number;
  TargetRarityList?: number[];
  DependFuncId?: number;
  InvalidHide?: number;
  OutEnemyNpcId?: number;
  InEnemyNpcId?: number;
  OutEnemyPosition?: number;
  IgnoreIndividuality?: number;
  StarHigher?: number;
  ChangeTDCommandType?: number;
  ShiftNpcId?: number;
  DisplayLastFuncInvalidType?: number;
  AndCheckIndividualityList?: number[];
  WinBattleNotRelatedSurvivalStatus?: number;
  ForceSelfInstantDeath?: number;
  ChangeMaxBreakGauge?: number;
  ParamAddMaxValue?: number;
  ParamAddMaxCount?: number;
  LossHpChangeDamage?: number;
  IncludePassiveIndividuality?: number;
  MotionChange?: number;
  PopLabelDelay?: number;
  NoTargetNoAct?: number;
  CardIndex?: number;
  CardIndividuality?: number;
  WarBoardTakeOverBuff?: number;
  ParamAddSelfIndividuality?: number[];
  ParamAddOpIndividuality?: number[];
  ParamAddFieldIndividuality?: number[];
  ParamAddValue?: number;
  MultipleGainStar?: number;
  NoCheckIndividualityIfNotUnit?: number;
  ForcedEffectSpeedOne?: number;
  SetLimitCount?: number;
  CheckEnemyFieldSpace?: number;
  TriggeredFuncPosition?: number;
  DamageCount?: number;
  DamageRates?: number[];
  OnPositions?: number[];
  OffPositions?: number[];
  TargetIndiv?: number;
  IncludeIgnoreIndividuality?: number;
  EvenIfWinDie?: number;
  CallSvtEffectId?: number;
  ForceAddState?: number;
  UnSubState?: number;
  ForceSubState?: number;
  IgnoreIndivUnreleaseable?: number;
  OnParty?: number;
  CounterId?: number;
  CounterLv?: number;
  CounterOc?: number;
  UseTreasureDevice?: number;
  SkillReaction?: number;
  BehaveAsFamilyBuff?: number;
  /**
   * The buff with this dataVal is removed if the linked buff is removed.
   */
  UnSubStateWhileLinkedToOthers?: number;
  AllowSubBgmPlaying?: number;
  NotAccompanyWhenLinkedTargetMoveState?: number;
  NotTargetSkillIdArray?: number[];
  ShortTurn?: number;
  FieldIndividuality?: number;
  BGId?: number;
  BGType?: number;
  BgmId?: number;
  TakeOverFieldState?: number;
  TakeOverNextWaveBGAndBGM?: number;
  RemoveFieldBuffActorDeath?: number;
  FieldBuffGrantType?: number;
  Priority?: number;
  AddIndividualityEx?: number;
  IgnoreResistance?: number;
  GainNpTargetPassiveIndividuality?: number;
  HpReduceToRegainIndiv?: number;
  DisplayActualRecoveryHpFlag?: number;
  ShiftDeckIndex?: number;
  PopValueText?: string;
  IsLossHpPerNow?: number;
  CopyTargetFunctionType?: number[];
  CopyFunctionTargetPTOnly?: number;
  IgnoreValueUp?: number;
  ApplyValueUp?: string[];
  ActNoDamageBuff?: number;
  ActSelectIndex?: number;
  CopyTargetBuffType?: number[];
  NotSkillCopyTargetFuncIds?: number[];
  NotSkillCopyTargetIndividualities?: number[];
  ClassIconAuraEffectId?: number;
  ActMasterGenderType?: number;
  IntervalTurn?: number;
  IntervalCount?: number;
  TriggeredFieldCountTarget?: number;
  TriggeredFieldCountRange?: number[];
  TargetEnemyRange?: number[];
  TriggeredFuncPositionSameTarget?: number;
  TriggeredFuncPositionAll?: number;
  TriggeredTargetHpRange?: string;
  TriggeredTargetHpRateRange?: string;
  ExcludeUnSubStateIndiv?: number;
  ApplySupportSvt?: number;
  Individuality?: number;
  EventId?: number;
  AddCount?: number;
  RateCount?: number;
  DropRateCount?: number;
  DependFuncVals?: BaseVals;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyScript {
  deathType?: EnemyDeathType;
  appear?: boolean;
  noVoice?: boolean;
  raid?: number;
  superBoss?: number;
  hpBarType?: number;
  leader?: boolean;
  scale?: number;
  svtVoiceId?: number;
  treasureDeviceVoiceId?: string;
  changeAttri?: Attribute;
  billBoardGroup?: number;
  multiTargetCore?: boolean;
  multiTargetUp?: boolean;
  multiTargetUnder?: boolean;
  startPos?: boolean;
  deadChangePos?: number;
  call?: number[];
  shift?: number[];
  shiftPosition?: number;
  shiftClear?: NiceTrait[];
  skillShift?: number[];
  missionTargetSkillShift?: number[];
  change?: number[];
  forceDropItem?: boolean;
  entryIndex?: number;
  treasureDeviceName?: string;
  treasureDeviceRuby?: string;
  npInfoEnable?: boolean;
  npCharge?: number;
  NoSkipDead?: boolean;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyServerMod {
  /**
   * `enemyServerMod` when attacking: https://github.com/atlasacademy/fgo-game-data-docs/blob/master/battle/np.md#attacking-np
   */
  tdRate: number;
  /**
   * `enemyServerMod` when defending: https://github.com/atlasacademy/fgo-game-data-docs/blob/master/battle/np.md#defending-np
   */
  tdAttackRate: number;
  /**
   * `serverRate` when attacking: https://github.com/atlasacademy/fgo-game-data-docs/blob/master/battle/critstars.md
   */
  starRate: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemySkill {
  skillId1: number;
  skillId2: number;
  skillId3: number;
  skill1?: NiceSkill;
  skill2?: NiceSkill;
  skill3?: NiceSkill;
  skillLv1: number;
  skillLv2: number;
  skillLv3: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface EnemyTd {
  noblePhantasmId: number;
  noblePhantasm?: NiceTd;
  noblePhantasmLv: number;
  noblePhantasmLv1: number;
  noblePhantasmLv2?: number;
  noblePhantasmLv3?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceTd {
  id: number;
  num: number;
  npNum: number;
  card: NiceCardType;
  name: string;
  originalName: string;
  ruby: string;
  icon?: string;
  rank: string;
  type: string;
  effectFlags: NiceTdEffectFlag[];
  detail?: string;
  unmodifiedDetail?: string;
  npGain: NpGain;
  npDistribution: number[];
  svtId: number;
  strengthStatus: number;
  priority: number;
  condQuestId: number;
  condQuestPhase: number;
  releaseConditions?: NiceSvtSkillRelease[];
  individuality: NiceTrait[];
  npSvts: NiceTdSvt[];
  script: NiceSkillScript;
  functions: NiceFunction[];
}
export interface NpGain {
  buster: number[];
  arts: number[];
  quick: number[];
  extra: number[];
  defence: number[];
  np: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceTdSvt {
  svtId: number;
  num: number;
  npNum: number;
  priority: number;
  damage: number[];
  strengthStatus: number;
  flag: number;
  imageIndex: number;
  condQuestId: number;
  condQuestPhase: number;
  condLv?: number;
  condFriendshipRank?: number;
  motion: number;
  card: NiceCardType;
  releaseConditions?: NiceSvtSkillRelease[];
}
export interface ExtraAssets {
  charaGraph: ExtraAssetsUrl;
  faces: ExtraAssetsUrl;
  charaGraphEx: ExtraAssetsUrl;
  charaGraphName: ExtraAssetsUrl;
  narrowFigure: ExtraAssetsUrl;
  charaFigure: ExtraAssetsUrl;
  charaFigureForm: {
    [k: string]: ExtraAssetsUrl;
  };
  charaFigureMulti: {
    [k: string]: ExtraAssetsUrl;
  };
  commands: ExtraAssetsUrl;
  status: ExtraAssetsUrl;
  equipFace: ExtraAssetsUrl;
  /**
   * Images that are used in the game scripts. Only the story field will be filled.Since the list comes from JP, the NA asset might not exist and returns 404.
   */
  image: ExtraAssetsUrl;
  spriteModel: ExtraAssetsUrl;
  charaGraphChange: ExtraAssetsUrl;
  narrowFigureChange: ExtraAssetsUrl;
  facesChange: ExtraAssetsUrl;
}
export interface ExtraAssetsUrl {
  ascension?: {
    [k: string]: string;
  };
  story?: {
    [k: string]: string;
  };
  costume?: {
    [k: string]: string;
  };
  equip?: {
    [k: string]: string;
  };
  cc?: {
    [k: string]: string;
  };
}
export interface ExtraCCAssets {
  charaGraph: ExtraAssetsUrl;
  faces: ExtraAssetsUrl;
}
export interface ExtraMCAssets {
  item: MCAssets;
  masterFace: MCAssets;
  masterFigure: MCAssets;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface FieldAi {
  raid?: number;
  day?: number;
  id: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceAi {
  id: number;
  idx: number;
  actNumInt: number;
  actNum: NiceAiActNum;
  priority: number;
  probability: number;
  cond: NiceAiCond;
  condNegative: boolean;
  vals: number[];
  aiAct: NiceAiAct;
  avals: number[];
  parentAis: {
    [k: string]: number[];
  };
  infoText: string;
  timing?: number;
  timingDescription?: AiTiming;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceAiAct {
  id: number;
  type: NiceAiActType;
  target: NiceAiActTarget;
  targetIndividuality: NiceTrait[];
  skillId?: number;
  skillLv?: number;
  skill?: NiceSkill;
  noblePhantasmId?: number;
  noblePhantasmLv?: number;
  noblePhantasmOc?: number;
  noblePhantasm?: NiceTd;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceAiCollection {
  mainAis: NiceAi[];
  relatedAis: NiceAi[];
  relatedQuests: StageLink[];
}
export interface StageLink {
  questId: number;
  phase: number;
  stage: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBaseFunction {
  /**
   * Function ID
   */
  funcId: number;
  /**
   * Function type
   */
  funcType: NiceFuncType;
  /**
   * Determines the number of targets and the pool of applicable targets.
   */
  funcTargetType: NiceFuncTargetType;
  /**
   * Determines whether the function applies to only player's servants, only quest enemies or both. Note that this is independent of `funcTargetType`. You need to look at both fields to check if the function applies.
   */
  funcTargetTeam: FuncApplyTarget;
  /**
   * Function pop-up text
   */
  funcPopupText: string;
  /**
   * Function pop-up icon URL.
   */
  funcPopupIcon?: string;
  /**
   * Function tvals: If available, function's targets or their buffs need to satisfy the traits given here.
   */
  functvals: NiceTrait[];
  /**
   * Function quest traits. The current quest needs this traits for the function to works.
   */
  funcquestTvals: NiceTrait[];
  /**
   * Some more details for event drop up, bond point up functions
   */
  funcGroup: NiceFuncGroup[];
  /**
   * Trait details to be used by buff removal functions.
   */
  traitVals?: NiceTrait[];
  /**
   * Buff details to be used by apply buff functions.Even though this is a list, it is safe to assume it only contains 1 buff if applicablee.g. you can get the buff by buffs[0]. `buffs[0]` is also what the game hardcoded.
   */
  buffs: NiceBuff[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBaseFunctionReverse {
  /**
   * Function ID
   */
  funcId: number;
  /**
   * Function type
   */
  funcType: NiceFuncType;
  /**
   * Determines the number of targets and the pool of applicable targets.
   */
  funcTargetType: NiceFuncTargetType;
  /**
   * Determines whether the function applies to only player's servants, only quest enemies or both. Note that this is independent of `funcTargetType`. You need to look at both fields to check if the function applies.
   */
  funcTargetTeam: FuncApplyTarget;
  /**
   * Function pop-up text
   */
  funcPopupText: string;
  /**
   * Function pop-up icon URL.
   */
  funcPopupIcon?: string;
  /**
   * Function tvals: If available, function's targets or their buffs need to satisfy the traits given here.
   */
  functvals: NiceTrait[];
  /**
   * Function quest traits. The current quest needs this traits for the function to works.
   */
  funcquestTvals: NiceTrait[];
  /**
   * Some more details for event drop up, bond point up functions
   */
  funcGroup: NiceFuncGroup[];
  /**
   * Trait details to be used by buff removal functions.
   */
  traitVals?: NiceTrait[];
  /**
   * Buff details to be used by apply buff functions.Even though this is a list, it is safe to assume it only contains 1 buff if applicablee.g. you can get the buff by buffs[0]. `buffs[0]` is also what the game hardcoded.
   */
  buffs: NiceBuff[];
  reverse?: NiceReversedFunctionType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedFunctionType {
  nice?: NiceReversedFunction;
  basic?: BasicReversedFunction;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedFunction {
  skill?: NiceSkillReverse[];
  NP?: NiceTdReverse[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSkillReverse {
  id: number;
  num?: number;
  name: string;
  originalName: string;
  ruby: string;
  detail?: string;
  unmodifiedDetail?: string;
  type: NiceSkillType;
  svtId: number;
  strengthStatus?: number;
  priority?: number;
  condQuestId?: number;
  condQuestPhase?: number;
  condLv?: number;
  condLimitCount?: number;
  icon?: string;
  coolDown: number[];
  actIndividuality: NiceTrait[];
  script: NiceSkillScript;
  extraPassive: ExtraPassive[];
  skillAdd: NiceSkillAdd[];
  skillSvts?: NiceSkillSvt[];
  aiIds?: {
    [k: string]: number[];
  };
  groupOverwrites?: NiceSkillGroupOverwrite[];
  functions: NiceFunction[];
  reverse?: NiceReversedSkillTdType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedSkillTdType {
  nice?: NiceReversedSkillTd;
  basic?: BasicReversedSkillTd;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedSkillTd {
  servant?: NiceServant[];
  MC?: NiceMysticCode[];
  CC?: NiceCommandCode[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceServant {
  /**
   * svt's internal ID. Note that this is different from the 1~300 IDs shown in "Spirit Origin list", which is `.collectionNo`. This ID is unique accross svt items (servants, CEs, EXPs, enemies, …)
   */
  id: number;
  /**
   * The ID number shown in "Spirit Origin list". The community usually means this number when they talk about servant or CE IDs.
   */
  collectionNo: number;
  /**
   * svt's name
   */
  name: string;
  /**
   * untranslated svt name
   */
  originalName: string;
  /**
   * svt's name ruby text
   */
  ruby: string;
  /**
   * Name that appears in battle
   */
  battleName: string;
  /**
   * untranslated svt's battle name
   */
  originalBattleName: string;
  classId: number;
  /**
   * svt's class. Because enemies also use this model, you can see some non-playable classes as possible values.
   */
  className: SvtClass | string;
  /**
   * svt's type.
   */
  type: NiceSvtType;
  /**
   * Some random flags given to the svt items.
   */
  flag: NiceSvtFlag;
  /**
   * svt's rarity.
   */
  rarity: number;
  /**
   * Cost to put the item in a party.
   */
  cost: number;
  /**
   * Max level of the item without grailing.
   */
  lvMax: number;
  /**
   * Image assets.
   */
  extraAssets: ExtraAssets;
  /**
   * svt's gender.
   */
  gender: NiceGender;
  /**
   * svt's attribute.
   */
  attribute: Attribute;
  /**
   * list of individualities, or commonly refered to as traits.
   */
  traits: NiceTrait[];
  /**
   * Star weight.
   */
  starAbsorb: number;
  /**
   * Star generation rate.
   */
  starGen: number;
  /**
   * Instant death chance.
   */
  instantDeathChance: number;
  /**
   * Card deck.
   */
  cards: NiceCardType[];
  /**
   * Mapping <Card type, Hits distribution>.
   */
  hitsDistribution: {
    [k: string]: number[];
  };
  /**
   * Mapping <Card type, Card detail>, containing attack traits.
   */
  cardDetails: {
    [k: string]: NiceCardDetail;
  };
  /**
   * Base ATK.
   */
  atkBase: number;
  /**
   * Max ATK (without grailing).
   */
  atkMax: number;
  /**
   * Base HP.
   */
  hpBase: number;
  /**
   * Max HP (without grailing).
   */
  hpMax: number;
  /**
   * IDs of related quests: rank-ups or interludes.
   */
  relateQuestIds: number[];
  trialQuestIds: number[];
  /**
   * Growth curve type
   */
  growthCurve: number;
  /**
   * ATK value per level, including grail levels.
   */
  atkGrowth: number[];
  /**
   * HP value per level, including grail levels.
   */
  hpGrowth: number[];
  /**
   * Bond EXP needed per bond level
   */
  bondGrowth: number[];
  /**
   * Total EXP needed per level. Equivalent to the "Accumulated EXP" value when feeding CE into another CE.
   */
  expGrowth: number[];
  /**
   * Base EXP per level. Will show up as "Base EXP" when feeding the item into something else.
   */
  expFeed: number[];
  /**
   * Bond CE ID (not collectionNo). Defaults to 0 if the svt doesn't have a bond CE.
   */
  bondEquip?: number;
  /**
   * Valentine CE ID (not collectionNo).
   */
  valentineEquip?: number[];
  /**
   * Index matched with the `valentineEquip` field.
   */
  valentineScript?: NiceValentineScript[];
  /**
   * Servant ID if this CE is a bond CE
   */
  bondEquipOwner?: number;
  /**
   * Servant ID if this CE is a valentine CE
   */
  valentineEquipOwner?: number;
  /**
   * Attributes that change when servants ascend.
   */
  ascensionAdd: AscensionAdd;
  /**
   * Traits used for event bonus or in special quests.
   */
  traitAdd: NiceServantTrait[];
  /**
   * EOR servants' hidden name details.
   */
  svtChange: NiceServantChange[];
  ascensionImage: NiceServantLimitImage[];
  /**
   * Mapping <Ascension level, Materials to ascend servants>.
   */
  ascensionMaterials: {
    [k: string]: NiceLvlUpMaterial;
  };
  /**
   * Mapping <Skill level, Materials to level up skills>.
   */
  skillMaterials: {
    [k: string]: NiceLvlUpMaterial;
  };
  /**
   * Mapping <Append Skill level, Materials to level up append skills>.
   */
  appendSkillMaterials: {
    [k: string]: NiceLvlUpMaterial;
  };
  /**
   * Mapping <Costume svt ID, Materials to unlock the costume>. Costume details can be found in `.profile.costume`
   */
  costumeMaterials: {
    [k: string]: NiceLvlUpMaterial;
  };
  coin?: NiceServantCoin;
  /**
   * Random stuffs that get added to the servant entry. See each field description for more details.
   */
  script: NiceServantScript;
  /**
   * List of servant or CE skills.
   */
  skills: NiceSkill[];
  /**
   * list of servant's passive skills.
   */
  classPassive: NiceSkill[];
  /**
   * List of servant's extra event passive skills, (bond bonus, damage bonus, etc).
   */
  extraPassive: NiceSkill[];
  /**
   * List of skills that can be added to servant and the number of materials required.
   */
  appendPassive: NiceServantAppendPassiveSkill[];
  /**
   * List of servant's noble phantasms.
   */
  noblePhantasms: NiceTd[];
  /**
   * Will be returned if `lore` query parameter is set to `true`
   */
  profile?: NiceLore;
}
export interface NiceCardDetail {
  hitsDistribution: number[];
  attackIndividuality: NiceTrait[];
  attackType: NiceCommandCardAttackType;
  damageRate?: number;
  attackNpRate?: number;
  defenseNpRate?: number;
  dropStarRate?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceValentineScript {
  scriptId: string;
  script: string;
  scriptName: string;
}
export interface NiceServantTrait {
  idx: number;
  trait: NiceTrait[];
  limitCount: number;
  condType?: NiceCondType;
  condId?: number;
  condNum?: number;
}
export interface NiceServantChange {
  beforeTreasureDeviceIds: number[];
  afterTreasureDeviceIds: number[];
  svtId: number;
  priority: number;
  condType: NiceCondType;
  condTargetId: number;
  condValue: number;
  name: string;
  ruby: string;
  battleName: string;
  svtVoiceId: number;
  limitCount: number;
  flag: number;
  battleSvtId: number;
}
export interface NiceServantLimitImage {
  limitCount: number;
  priority: number;
  defaultLimitCount: number;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
}
export interface NiceLvlUpMaterial {
  items: NiceItemAmount[];
  qp: number;
}
export interface NiceItemAmount {
  item: NiceItem;
  amount: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceItem {
  id: number;
  name: string;
  originalName: string;
  type: NiceItemType;
  uses: NiceItemUse[];
  detail: string;
  individuality: NiceTrait[];
  icon: string;
  background: NiceItemBGType;
  value: number;
  priority: number;
  dropPriority: number;
  startedAt: number;
  endedAt: number;
  itemSelects: NiceItemSelect[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceItemSelect {
  idx: number;
  gifts: NiceGift[];
  requireNum: number;
  detail: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceGift {
  id: number;
  type: NiceGiftType;
  objectId: number;
  priority: number;
  num: number;
  giftAdds: NiceGiftAdd[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceGiftAdd {
  priority: number;
  replacementGiftIcon: string;
  condType: NiceCondType;
  targetId: number;
  targetNum: number;
  replacementGifts: NiceBaseGift[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBaseGift {
  id: number;
  type: NiceGiftType;
  objectId: number;
  priority: number;
  num: number;
}
export interface NiceServantCoin {
  summonNum: number;
  item: NiceItem;
}
export interface NiceServantScript {
  /**
   * Mapping <Skill IDs, list[Skill IDs]>. Summer Kiara 1st skill additional data. The keys are the base skill IDs and the values are the rank-up skill IDs.
   */
  SkillRankUp?: {
    [k: string]: number[];
  };
  /**
   * Bazett's effect. Extend buff's duration from end of player turn to end of enemy turn.
   */
  svtBuffTurnExtend?: boolean;
  maleImage?: ExtraAssets;
}
export interface NiceServantAppendPassiveSkill {
  num: number;
  priority: number;
  skill: NiceSkill;
  unlockMaterials: NiceItemAmount[];
}
export interface NiceLore {
  cv: string;
  illustrator: string;
  stats?: NiceLoreStats;
  /**
   * Mapping <Costume BattleCharaID, Costume Detail>.
   */
  costume: {
    [k: string]: NiceCostume;
  };
  comments: NiceLoreComment[];
  voices: NiceVoiceGroup[];
}
export interface NiceLoreStats {
  strength: NiceStatusRank;
  endurance: NiceStatusRank;
  agility: NiceStatusRank;
  magic: NiceStatusRank;
  luck: NiceStatusRank;
  np: NiceStatusRank;
  policy: ServantPolicy;
  personality: ServantPersonality;
  deity: NiceStatusRank;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceCostume {
  id: number;
  costumeCollectionNo: number;
  battleCharaId: number;
  name: string;
  shortName: string;
  detail: string;
  priority: number;
}
export interface NiceLoreComment {
  id: number;
  priority: number;
  condMessage: string;
  comment: string;
  condType: NiceCondType;
  condValues?: number[];
  condValue2: number;
  additionalConds: NiceLoreCommentAdd[];
}
export interface NiceLoreCommentAdd {
  idx: number;
  condType: NiceCondType;
  condValues: number[];
  /**
   * This field can be safely ignored. All values are 0.
   */
  condValue2: number;
}
export interface NiceVoiceGroup {
  svtId: number;
  voicePrefix: number;
  type: NiceSvtVoiceType;
  voiceLines: NiceVoiceLine[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceVoiceLine {
  /**
   * Voice line default name.
   */
  name?: string;
  /**
   * Voice line default condition type.
   */
  condType?: NiceCondType;
  /**
   * Voice line default condition threshold value.
   */
  condValue?: number;
  /**
   * Voice line default priority.
   */
  priority?: number;
  /**
   * Voice line default type.
   */
  svtVoiceType?: NiceSvtVoiceType;
  /**
   * Voice line overwrite name.
   */
  overwriteName: string;
  summonScript?: ScriptLink;
  /**
   * Voice line IDs.
   */
  id: string[];
  /**
   * Voice line mp3 URLs.
   */
  audioAssets: string[];
  /**
   * Delays in seconds before playing the audio file.
   */
  delay: number[];
  /**
   * CharaFigure faces to be used when playing the voice line.
   */
  face: number[];
  /**
   * CharaFigure forms to be used when playing the voice line.
   */
  form: number[];
  /**
   * Texts used for summoning subtitles. Only summoning lines have data for this fields.
   */
  text: string[];
  /**
   * English subtitle for the voice line, only applicable to NA data.
   */
  subtitle: string;
  /**
   * Conditions to unlock the voice line.
   */
  conds: NiceVoiceCond[];
  /**
   * Conditions to play the voice line.For example, there are male and female versions of a bond 5 voice line.The voice line is unlocked at bond 5 but only one of the line is played in my room.
   */
  playConds: NiceVoicePlayCond[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface ScriptLink {
  scriptId: string;
  script: string;
}
export interface NiceVoiceCond {
  /**
   * Voice Condition Type Enum
   */
  condType: NiceVoiceCondType;
  /**
   * Threshold value for the condition.
   */
  value: number;
  /**
   * If the voice cond is `svtGroup`, this list will hold the applicable servant IDs.
   */
  valueList?: number[];
  /**
   * Event ID.
   */
  eventId: number;
}
export interface NiceVoicePlayCond {
  /**
   * To play a voice line, at least one condition group needs to be statisfied.Within one condition group, all conditions need to be statisfied.i.e. (group_1_cond_1 AND group_1_cond_2) OR (group_2_cond_1)
   */
  condGroup: number;
  condType: NiceCondType;
  targetId: number;
  condValue: number;
  condValues: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceMysticCode {
  id: number;
  name: string;
  originalName: string;
  detail: string;
  maxLv: number;
  extraAssets: ExtraMCAssets;
  skills: NiceSkill[];
  expRequired: number[];
  costumes: NiceMysticCodeCostume[];
}
export interface NiceMysticCodeCostume {
  id: number;
  releaseConditions: NiceCommonRelease[];
  extraAssets: ExtraMCAssets;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceCommandCode {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  ruby: string;
  rarity: number;
  extraAssets: ExtraCCAssets;
  skills: NiceSkill[];
  illustrator: string;
  comment: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceTdReverse {
  id: number;
  num: number;
  npNum: number;
  card: NiceCardType;
  name: string;
  originalName: string;
  ruby: string;
  icon?: string;
  rank: string;
  type: string;
  effectFlags: NiceTdEffectFlag[];
  detail?: string;
  unmodifiedDetail?: string;
  npGain: NpGain;
  npDistribution: number[];
  svtId: number;
  strengthStatus: number;
  priority: number;
  condQuestId: number;
  condQuestPhase: number;
  releaseConditions?: NiceSvtSkillRelease[];
  individuality: NiceTrait[];
  npSvts: NiceTdSvt[];
  script: NiceSkillScript;
  functions: NiceFunction[];
  reverse?: NiceReversedSkillTdType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBgm {
  id: number;
  name: string;
  originalName: string;
  fileName: string;
  notReleased: boolean;
  audioAsset?: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBgmEntity {
  id: number;
  name: string;
  originalName: string;
  fileName: string;
  notReleased: boolean;
  audioAsset?: string;
  priority: number;
  detail: string;
  shop?: NiceShop;
  logo: string;
  releaseConditions: NiceBgmRelease[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceShop {
  id: number;
  baseShopId: number;
  shopType: NiceShopType;
  releaseConditions: NiceShopRelease[];
  eventId: number;
  /**
   * Tab number in the shop
   */
  slot: number;
  /**
   * Sort order in the shop
   */
  priority: number;
  name: string;
  detail: string;
  infoMessage: string;
  warningMessage: string;
  /**
   * Type of items to be used as payment.
   */
  payType: NicePayType;
  cost: NiceItemAmount;
  /**
   * If payType is commonConsume
   */
  consumes: NiceCommonConsume[];
  /**
   * Type of items to be received.
   */
  purchaseType: NicePurchaseType;
  targetIds: number[];
  /**
   * If purchaseType is itemSet, this field will contain the item in the set.
   */
  itemSet: NiceItemSet[];
  /**
   * Number of items per buying unit
   */
  setNum: number;
  /**
   * Maximum number of buying units
   */
  limitNum: number;
  /**
   * If purchaseType is gift
   */
  gifts: NiceGift[];
  defaultLv: number;
  defaultLimitCount: number;
  scriptName?: string;
  scriptId?: string;
  script?: string;
  image?: string;
  openedAt: number;
  closedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceShopRelease {
  condValues: number[];
  shopId: number;
  condType: NiceCondType;
  condNum: number;
  priority: number;
  isClosedDisp: boolean;
  closedMessage: string;
  closedItemName: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceCommonConsume {
  id: number;
  priority: number;
  type: NiceCommonConsumeType;
  objectId: number;
  num: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceItemSet {
  id: number;
  purchaseType: NicePurchaseType;
  targetId: number;
  setNum: number;
  gifts: NiceGift[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBgmRelease {
  id: number;
  type: NiceCondType;
  /**
   * To play the BGM, at least one condition group needs to be statisfied.Within one condition group, all conditions need to be statisfied.
   */
  condGroup: number;
  targetIds: number[];
  vals: number[];
  priority: number;
  closedMessage: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBuffReverse {
  /**
   * Buff ID.
   */
  id: number;
  /**
   * Buff name.
   */
  name: string;
  originalName: string;
  /**
   * Buff detailed description.
   */
  detail: string;
  /**
   * Buff icon URL.
   */
  icon?: string;
  /**
   * Buff type.
   */
  type: NiceBuffType;
  /**
   * Buff group.See https://github.com/atlasacademy/fgo-docs#unstackable-buffs for how this field is used.
   */
  buffGroup: number;
  /**
   * Random stuffs that get added to the buff entry. See each field description for more details.
   */
  script: BuffScript;
  /**
   * Buff traits/individualities. For example, buff removal uses this field to target the buffs.
   */
  vals: NiceTrait[];
  /**
   * Buff tvals: I'm quite sure this field is used for visual purposes only and not gameplay.
   */
  tvals: NiceTrait[];
  /**
   * Buff holder's required individuality for the buff's effect to apply.
   */
  ckSelfIndv: NiceTrait[];
  /**
   * Target's required individuality for the buff's effect to apply.
   */
  ckOpIndv: NiceTrait[];
  /**
   * Buff max rate. See https://github.com/atlasacademy/fgo-docs#lower-and-upper-bounds-of-buffs for how this field is used.
   */
  maxRate: number;
  reverse?: NiceReversedBuffType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedBuffType {
  nice?: NiceReversedBuff;
  basic?: BasicReversedBuff;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceReversedBuff {
  function?: NiceBaseFunctionReverse[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceBuffTypeDetail {
  buffType: NiceBuffType;
  ignoreValueUp: boolean;
  script: {
    [k: string]: unknown;
  };
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoard {
  id: number;
  name: string;
  icon: string;
  dispItems: NiceItem[];
  closedMessage: string;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
  classes: NiceClassBoardClass[];
  squares: NiceClassBoardSquare[];
  lines: NiceClassBoardLine[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoardClass {
  classId: number;
  className: SvtClass | string;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoardSquare {
  id: number;
  icon?: string;
  items: NiceItemAmount[];
  posX: number;
  posY: number;
  skillType: NiceClassBoardSkillType;
  targetSkill?: NiceSkill;
  upSkillLv: number;
  targetCommandSpell?: NiceClassBoardCommandSpell;
  lock?: NiceClassBoardLock;
  flags: NiceClassBoardSquareFlag[];
  priority: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoardCommandSpell {
  id: number;
  commandSpellId: number;
  name: string;
  detail: string;
  functions: NiceFunction[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoardLock {
  id: number;
  items: NiceItemAmount[];
  closedMessage: string;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceClassBoardLine {
  id: number;
  prevSquareId: number;
  nextSquareId: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEnemyMaster {
  id: number;
  name: string;
  battles: NiceEnemyMasterBattle[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEnemyMasterBattle {
  id: number;
  face: string;
  figure: string;
  commandSpellIcon: string;
  maxCommandSpell: number;
  offsetX: number;
  offsetY: number;
  cutin?: string[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEquip {
  /**
   * svt's internal ID. Note that this is different from the 1~300 IDs shown in "Spirit Origin list", which is `.collectionNo`. This ID is unique accross svt items (servants, CEs, EXPs, enemies, …)
   */
  id: number;
  /**
   * The ID number shown in "Spirit Origin list". The community usually means this number when they talk about servant or CE IDs.
   */
  collectionNo: number;
  /**
   * svt's name
   */
  name: string;
  /**
   * untranslated svt name
   */
  originalName: string;
  /**
   * svt's name ruby text
   */
  ruby: string;
  /**
   * svt's type.
   */
  type: NiceSvtType;
  /**
   * Some random flags given to the svt items.
   */
  flag: NiceSvtFlag;
  /**
   * svt's rarity.
   */
  rarity: number;
  /**
   * Cost to put the item in a party.
   */
  cost: number;
  /**
   * Max level of the item without grailing.
   */
  lvMax: number;
  /**
   * Image assets.
   */
  extraAssets: ExtraAssets;
  /**
   * Base ATK.
   */
  atkBase: number;
  /**
   * Max ATK (without grailing).
   */
  atkMax: number;
  /**
   * Base HP.
   */
  hpBase: number;
  /**
   * Max HP (without grailing).
   */
  hpMax: number;
  /**
   * Growth curve type
   */
  growthCurve: number;
  /**
   * ATK value per level, including grail levels.
   */
  atkGrowth: number[];
  /**
   * HP value per level, including grail levels.
   */
  hpGrowth: number[];
  /**
   * Total EXP needed per level. Equivalent to the "Accumulated EXP" value when feeding CE into another CE.
   */
  expGrowth: number[];
  /**
   * Base EXP per level. Will show up as "Base EXP" when feeding the item into something else.
   */
  expFeed: number[];
  /**
   * Servant ID if this CE is a bond CE
   */
  bondEquipOwner?: number;
  /**
   * Servant ID if this CE is a valentine CE
   */
  valentineEquipOwner?: number;
  /**
   * Array of length 1
   */
  valentineScript?: NiceValentineScript[];
  /**
   * Attributes that change when servants ascend.
   */
  ascensionAdd: AscensionAdd;
  /**
   * Random stuffs that get added to the servant entry. See each field description for more details.
   */
  script: NiceServantScript;
  /**
   * list of servant or CE skills.
   */
  skills: NiceSkill[];
  /**
   * Will be returned if `lore` query parameter is set to `true`
   */
  profile?: NiceLore;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEvent {
  id: number;
  type: NiceEventType;
  name: string;
  originalName: string;
  shortName: string;
  detail: string;
  noticeBanner?: string;
  banner?: string;
  icon?: string;
  bannerPriority: number;
  noticeAt: number;
  startedAt: number;
  endedAt: number;
  finishedAt: number;
  materialOpenedAt: number;
  warIds: number[];
  eventAdds: NiceEventAdd[];
  shop: NiceShop[];
  rewards: NiceEventReward[];
  rewardScenes: NiceEventRewardScene[];
  pointGroups: NiceEventPointGroup[];
  pointBuffs: NiceEventPointBuff[];
  pointActivities: NiceEventPointActivity[];
  missions: NiceEventMission[];
  randomMissions: NiceEventRandomMission[];
  missionGroups: NiceEventMissionGroup[];
  towers: NiceEventTower[];
  lotteries: NiceEventLottery[];
  treasureBoxes: NiceEventTreasureBox[];
  bulletinBoards: NiceEventBulletinBoard[];
  recipes: NiceEventRecipe[];
  digging?: NiceEventDigging;
  cooltime?: NiceEventCooltime;
  fortifications: NiceEventFortification[];
  campaigns: NiceEventCampaign[];
  campaignQuests: NiceEventQuest[];
  commandAssists: NiceEventCommandAssist[];
  heelPortraits: NiceHeelPortrait[];
  murals: NiceEventMural[];
  voicePlays: NiceEventVoicePlay[];
  /**
   * All voice lines related to this event
   */
  voices: NiceVoiceGroup[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventAdd {
  overwriteType: NiceEventOverwriteType;
  priority: number;
  overwriteId: number;
  overwriteText: string;
  overwriteBanner?: string;
  condType: NiceCondType;
  targetId: number;
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventReward {
  groupId: number;
  point: number;
  gifts: NiceGift[];
  bgImagePoint: string;
  bgImageGet: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventRewardScene {
  slot: number;
  groupId: number;
  /**
   * See Event Reward Scene Type in app/schemas/enums.py
   */
  type: number;
  guides: NiceEventRewardSceneGuide[];
  tabOnImage: string;
  tabOffImage: string;
  image?: string;
  bg: string;
  bgm: NiceBgmEntity;
  afterBgm: NiceBgmEntity;
  flags: NiceEventRewardSceneFlag[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventRewardSceneGuide {
  imageId: number;
  limitCount: number;
  image: string;
  faceId?: number;
  displayName?: string;
  weight?: number;
  unselectedMax?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventPointGroup {
  groupId: number;
  name: string;
  icon: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventPointBuff {
  id: number;
  funcIds: number[];
  groupId: number;
  eventPoint: number;
  name: string;
  detail: string;
  icon: string;
  background: NiceItemBGType;
  skillIcon?: string;
  lv?: number;
  value: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventPointActivity {
  groupId: number;
  point: number;
  objectType: EventPointActivityObjectType;
  objectId: number;
  objectValue: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventMission {
  id: number;
  flag: number;
  type: NiceMissionType;
  missionTargetId: number;
  dispNo: number;
  name: string;
  detail: string;
  startedAt: number;
  endedAt: number;
  closedAt: number;
  rewardType: NiceMissionRewardType;
  gifts: NiceGift[];
  bannerGroup: number;
  priority: number;
  rewardRarity: number;
  notfyPriority: number;
  presentMessageId: number;
  conds: NiceEventMissionCondition[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventMissionCondition {
  id: number;
  missionProgressType: NiceMissionProgressType;
  priority: number;
  missionTargetId: number;
  condGroup: number;
  condType: NiceCondType;
  targetIds: number[];
  targetNum: number;
  conditionMessage: string;
  closedMessage: string;
  flag: number;
  detail?: NiceEventMissionConditionDetail;
  details?: NiceEventMissionConditionDetail[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventMissionConditionDetail {
  id: number;
  missionTargetId: number;
  missionCondType: number;
  logicType: number;
  targetIds: number[];
  addTargetIds: number[];
  targetQuestIndividualities: NiceTrait[];
  conditionLinkType: NiceDetailMissionCondLinkType;
  targetEventIds?: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventRandomMission {
  missionId: number;
  missionRank: number;
  condType: NiceCondType;
  condId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventMissionGroup {
  id: number;
  missionIds: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventTower {
  towerId: number;
  name: string;
  rewards: NiceEventTowerReward[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventTowerReward {
  floor: number;
  gifts: NiceGift[];
  boardMessage: string;
  rewardGet: string;
  banner: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventLottery {
  id: number;
  slot: number;
  payType: NicePayType;
  cost: NiceItemAmount;
  priority: number;
  limited: boolean;
  boxes: NiceEventLotteryBox[];
  talks: NiceEventLotteryTalk[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventLotteryBox {
  id: number;
  boxIndex: number;
  talkId: number;
  no: number;
  type: number;
  gifts: NiceGift[];
  maxNum: number;
  isRare: boolean;
  priority: number;
  detail: string;
  icon: string;
  banner: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventLotteryTalk {
  talkId: number;
  no: number;
  guideImageId: number;
  beforeVoiceLines: NiceVoiceLine[];
  afterVoiceLines: NiceVoiceLine[];
  isRare: boolean;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventTreasureBox {
  slot: number;
  id: number;
  idx: number;
  treasureBoxGifts: NiceEventTreasureBoxGift[];
  maxDrawNumOnce: number;
  extraGifts: NiceGift[];
  commonConsume: NiceCommonConsume;
  consumes: NiceCommonConsume[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventTreasureBoxGift {
  id: number;
  idx: number;
  gifts: NiceGift[];
  collateralUpperLimit: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventBulletinBoard {
  bulletinBoardId: number;
  message: string;
  probability?: number;
  dispOrder?: number;
  releaseConditions: NiceEventBulletinBoardRelease[];
  script?: NiceEventBulletinBoardScript[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventBulletinBoardRelease {
  condGroup: number;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventBulletinBoardScript {
  icon?: string;
  name?: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventRecipe {
  id: number;
  icon: string;
  name: string;
  maxNum: number;
  eventPointItem: NiceItem;
  eventPointNum: number;
  consumes: NiceCommonConsume[];
  releaseConditions: NiceCommonRelease[];
  closedMessage: string;
  recipeGifts: NiceEventRecipeGift[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventRecipeGift {
  idx: number;
  displayOrder: number;
  topIconId: number;
  gifts: NiceGift[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventDigging {
  sizeX: number;
  sizeY: number;
  bgImage: string;
  eventPointItem: NiceItem;
  resettableDiggedNum: number;
  blocks: NiceEventDiggingBlock[];
  rewards: NiceEventDiggingReward[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventDiggingBlock {
  id: number;
  eventId: number;
  image: string;
  commonConsume: NiceCommonConsume;
  consumes: NiceCommonConsume[];
  objectId: number;
  diggingEventPoint: number;
  blockNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventDiggingReward {
  id: number;
  gifts: NiceGift[];
  rewardSize: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventCooltime {
  rewards: NiceEventCooltimeReward[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventCooltimeReward {
  spotId: number;
  lv: number;
  name: string;
  commonRelease: NiceCommonRelease;
  releaseConditions: NiceCommonRelease[];
  cooltime: number;
  addEventPointRate: number;
  gifts: NiceGift[];
  upperLimitGiftNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventFortification {
  idx: number;
  name: string;
  x: number;
  y: number;
  rewardSceneX: number;
  rewardSceneY: number;
  maxFortificationPoint: number;
  workType: NiceEventWorkType;
  gifts: NiceGift[];
  releaseConditions: NiceCommonRelease[];
  details: NiceEventFortificationDetail[];
  servants: NiceEventFortificationSvt[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventFortificationDetail {
  position: number;
  name: string;
  className: NiceSvtClassSupportGroupType;
  releaseConditions: NiceCommonRelease[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventFortificationSvt {
  position: number;
  type: NiceEventFortificationSvtType;
  svtId: number;
  limitCount: number;
  lv: number;
  releaseConditions: NiceCommonRelease[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventCampaign {
  targetIds: number[];
  warIds: number[];
  target: NiceCombineAdjustTarget;
  idx: number;
  value: number;
  calcType: NiceEventCombineCalc;
  entryCondMessage: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventQuest {
  questId: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventCommandAssist {
  id: number;
  priority: number;
  lv: number;
  name: string;
  assistCard: NiceCardType;
  image: string;
  skill: NiceSkill;
  skillLv: number;
  releaseConditions: NiceCommonRelease[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceHeelPortrait {
  id: number;
  name: string;
  image: string;
  dispCondType: NiceCondType;
  dispCondId: number;
  dispCondNum: number;
  script: {
    [k: string]: unknown;
  };
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventMural {
  id: number;
  message: string;
  images: string[];
  num: number;
  condQuestId: number;
  condQuestPhase: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceEventVoicePlay {
  slot: number;
  idx: number;
  guideImageId: number;
  voiceLines: NiceVoiceLine[];
  confirmVoiceLines: NiceVoiceLine[];
  condType: NiceCondType;
  /**
   * Event ID
   */
  condValue: number;
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceFuncTypeDetail {
  funcType: NiceFuncType;
  ignoreValueUp: boolean;
}
export interface NiceMap {
  id: number;
  mapImage?: string;
  mapImageW: number;
  mapImageH: number;
  mapGimmicks: NiceMapGimmick[];
  headerImage?: string;
  bgm: NiceBgm;
}
export interface NiceMapGimmick {
  id: number;
  image?: string;
  x: number;
  y: number;
  depthOffset: number;
  scale: number;
  dispCondType: NiceCondType;
  dispTargetId: number;
  dispTargetValue: number;
  dispCondType2: NiceCondType;
  dispTargetId2: number;
  dispTargetValue2: number;
  actionAnimTime: number;
  actionEffectId: number;
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceMasterMission {
  id: number;
  startedAt: number;
  endedAt: number;
  closedAt: number;
  missions: NiceEventMission[];
  quests: BasicQuest[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuest {
  id: number;
  name: string;
  type: NiceQuestType;
  flags: NiceQuestFlag[];
  consumeType: NiceConsumeType;
  consume: number;
  consumeItem: NiceItemAmount[];
  afterClear: NiceQuestAfterClearType;
  recommendLv: string;
  spotId: number;
  spotName: string;
  warId: number;
  warLongName: string;
  chapterId: number;
  chapterSubId: number;
  chapterSubStr: string;
  giftIcon?: string;
  gifts: NiceGift[];
  releaseConditions: NiceQuestRelease[];
  releaseOverwrites: NiceQuestReleaseOverwrite[];
  phases: number[];
  /**
   * List of phases with enemies data from Rayshift.
   */
  phasesWithEnemies?: number[];
  /**
   * List of phases no battle (Story quest).
   */
  phasesNoBattle?: number[];
  phaseScripts: NiceQuestPhaseScript[];
  priority: number;
  noticeAt: number;
  openedAt: number;
  closedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestRelease {
  type: NiceCondType;
  targetId: number;
  value: number;
  closedMessage: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestReleaseOverwrite {
  priority: number;
  condType: NiceCondType;
  condId: number;
  condNum: number;
  closedMessage: string;
  overlayClosedMessage: string;
  eventId: number;
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseScript {
  phase: number;
  scripts: ScriptLink[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestHint {
  title: string;
  message: string;
  leftIndent: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestMessage {
  idx: number;
  message: string;
  condType: NiceCondType;
  targetId: number;
  targetNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhase {
  id: number;
  name: string;
  type: NiceQuestType;
  flags: NiceQuestFlag[];
  consumeType: NiceConsumeType;
  consume: number;
  consumeItem: NiceItemAmount[];
  afterClear: NiceQuestAfterClearType;
  recommendLv: string;
  spotId: number;
  spotName: string;
  warId: number;
  warLongName: string;
  chapterId: number;
  chapterSubId: number;
  chapterSubStr: string;
  giftIcon?: string;
  gifts: NiceGift[];
  releaseConditions: NiceQuestRelease[];
  releaseOverwrites: NiceQuestReleaseOverwrite[];
  phases: number[];
  /**
   * List of phases with enemies data from Rayshift.
   */
  phasesWithEnemies?: number[];
  /**
   * List of phases no battle (Story quest).
   */
  phasesNoBattle?: number[];
  phaseScripts: NiceQuestPhaseScript[];
  priority: number;
  noticeAt: number;
  openedAt: number;
  closedAt: number;
  phase: number;
  className: (SvtClass | string)[];
  individuality: NiceTrait[];
  qp: number;
  exp: number;
  bond: number;
  isNpcOnly: boolean;
  battleBgId: number;
  enemyHash?: string;
  availableEnemyHashes: string[];
  dropsFromAllHashes?: boolean;
  extraDetail: NiceQuestPhaseExtraDetail;
  scripts: ScriptLink[];
  messages: NiceQuestMessage[];
  hints: NiceQuestHint[];
  restrictions: NiceQuestPhaseRestriction[];
  supportServants: SupportServant[];
  drops: EnemyDrop[];
  stages: NiceStage[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseExtraDetail {
  questSelect?: number[];
  singleForceSvtId?: number;
  hintTitle?: string;
  hintMessage?: string;
  aiNpc?: NiceQuestPhaseAiNpc;
  aiMultiNpc?: NiceQuestPhaseAiNpc[];
  overwriteEquipSkills?: NiceQuestPhaseOverwriteEquipSkills;
  waveSetup?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseAiNpc {
  npc: NpcServant;
  detail?: QuestEnemy;
  aiIds: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NpcServant {
  npcId: number;
  name: string;
  svt: BasicServant;
  lv: number;
  atk: number;
  hp: number;
  traits: NiceTrait[];
  skills: EnemySkill;
  noblePhantasm: SupportServantTd;
  limit: SupportServantLimit;
  flags: NiceNpcServantFollowerFlag[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantTd {
  noblePhantasmId: number;
  noblePhantasm?: NiceTd;
  noblePhantasmLv: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantLimit {
  limitCount: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface QuestEnemy {
  deck: DeckType;
  deckId: number;
  userSvtId: number;
  uniqueId: number;
  npcId: number;
  roleType: EnemyRoleType;
  name: string;
  svt: BasicServant;
  drops: EnemyDrop[];
  lv: number;
  exp: number;
  atk: number;
  hp: number;
  adjustAtk: number;
  adjustHp: number;
  deathRate: number;
  criticalRate: number;
  recover: number;
  chargeTurn: number;
  traits: NiceTrait[];
  skills: EnemySkill;
  classPassive: EnemyPassive;
  noblePhantasm: EnemyTd;
  serverMod: EnemyServerMod;
  ai: EnemyAi;
  enemyScript: EnemyScript;
  originalEnemyScript: {
    [k: string]: unknown;
  };
  infoScript: EnemyInfoScript;
  originalInfoScript: {
    [k: string]: unknown;
  };
  limit: EnemyLimit;
  misc: EnemyMisc;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseOverwriteEquipSkills {
  iconId: number;
  skills: NiceQuestPhaseOverwriteEquipSkill[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseOverwriteEquipSkill {
  lv: number;
  id: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceQuestPhaseRestriction {
  restriction: NiceRestriction;
  frequencyType: NiceFrequencyType;
  dialogMessage: string;
  noticeMessage: string;
  title: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceRestriction {
  id: number;
  name: string;
  type: NiceRestrictionType;
  rangeType: NiceRestrictionRangeType;
  targetVals: number[];
  targetVals2: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServant {
  id: number;
  npcSvtFollowerId: number;
  priority: number;
  name: string;
  originalName: string;
  svt: BasicServant;
  releaseConditions: SupportServantRelease[];
  lv: number;
  atk: number;
  hp: number;
  traits: NiceTrait[];
  skills: EnemySkill;
  noblePhantasm: SupportServantTd;
  flags: NiceNpcServantFollowerFlag[];
  equips: SupportServantEquip[];
  script: SupportServantScript;
  limit: SupportServantLimit;
  misc: SupportServantMisc;
  detail?: QuestEnemy;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantRelease {
  type: NiceCondType;
  targetId: number;
  value: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantEquip {
  equip: NiceEquip;
  lv: number;
  limitCount: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantScript {
  dispLimitCount?: number;
  eventDeckIndex?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface SupportServantMisc {
  followerFlag: number;
  svtFollowerFlag: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceStage {
  wave: number;
  bgm: NiceBgm;
  fieldAis?: FieldAi[];
  call?: number[];
  enemyFieldPosCount?: number;
  enemyActCount?: number;
  turn?: number;
  limitAct?: StageLimitActType;
  NoEntryIds?: number[];
  waveStartMovies?: NiceStageStartMovie[];
  originalScript: {
    [k: string]: unknown;
  };
  enemies?: QuestEnemy[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceStageStartMovie {
  waveStartMovie: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceScript {
  scriptId: string;
  scriptSizeBytes: number;
  script: string;
  quests: NiceQuest[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceScriptSearchResult {
  scriptId: string;
  script: string;
  score: number;
  snippets: string[];
}
export interface NiceSpot {
  id: number;
  blankEarth: boolean;
  joinSpotIds: number[];
  mapId: number;
  name: string;
  originalName: string;
  image?: string;
  x: number;
  y: number;
  imageOfsX: number;
  imageOfsY: number;
  nameOfsX: number;
  nameOfsY: number;
  questOfsX: number;
  questOfsY: number;
  nextOfsX: number;
  nextOfsY: number;
  closedMessage: string;
  spotAdds: NiceSpotAdd[];
  quests: NiceQuest[];
}
export interface NiceSpotAdd {
  priority: number;
  overrideType: NiceSpotOverwriteType;
  targetId: number;
  targetText: string;
  condType: NiceCondType;
  condTargetId: number;
  condNum: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceSpotRoad {
  id: number;
  warId: number;
  mapId: number;
  image: string;
  srcSpotId: number;
  dstSpotId: number;
  dispCondType: NiceCondType;
  dispTargetId: number;
  dispTargetValue: number;
  dispCondType2: NiceCondType;
  dispTargetId2: number;
  dispTargetValue2: number;
  activeCondType: NiceCondType;
  activeTargetId: number;
  activeTargetValue: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceWar {
  id: number;
  coordinates: number[][];
  age: string;
  name: string;
  originalName: string;
  longName: string;
  originalLongName: string;
  flags: NiceWarFlag[];
  banner?: string;
  headerImage?: string;
  priority: number;
  parentWarId: number;
  materialParentWarId: number;
  parentBlankEarthSpotId: number;
  emptyMessage: string;
  bgm: NiceBgm;
  /**
   * Could be "NONE".
   */
  scriptId: string;
  script: string;
  startType: NiceWarStartType;
  targetId: number;
  eventId: number;
  eventName: string;
  lastQuestId: number;
  warAdds: NiceWarAdd[];
  maps: NiceMap[];
  spots: NiceSpot[];
  spotRoads: NiceSpotRoad[];
  questSelections: NiceWarQuestSelection[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceWarAdd {
  warId: number;
  type: NiceWarOverwriteType;
  priority: number;
  overwriteId: number;
  overwriteStr: string;
  overwriteBanner?: string;
  condType: NiceCondType;
  targetId: number;
  value: number;
  startedAt: number;
  endedAt: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface NiceWarQuestSelection {
  quest: NiceQuest;
  shortcutBanner?: string;
  priority: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicBuffReverse {
  id: number;
  name: string;
  originalName: string;
  icon: string;
  type: NiceBuffType;
  script: BuffScript;
  vals: NiceTrait[];
  tvals: NiceTrait[];
  ckSelfIndv: NiceTrait[];
  ckOpIndv: NiceTrait[];
  reverse?: BasicReversedBuffType;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicReversedBuffType {
  basic?: BasicReversedBuff;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicEquip {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  type: NiceSvtType;
  flag: NiceSvtFlag;
  rarity: number;
  atkMax: number;
  hpMax: number;
  face: string;
  bondEquipOwner?: number;
  valentineEquipOwner?: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicEvent {
  id: number;
  type: NiceEventType;
  name: string;
  noticeAt: number;
  startedAt: number;
  endedAt: number;
  finishedAt: number;
  materialOpenedAt: number;
  warIds: number[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicFunction {
  funcId: number;
  funcType: NiceFuncType;
  funcTargetType: NiceFuncTargetType;
  funcTargetTeam: FuncApplyTarget;
  functvals: NiceTrait[];
  funcquestTvals: NiceTrait[];
  traitVals?: NiceTrait[];
  buffs: BasicBuff[];
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicQuestPhase {
  id: number;
  name: string;
  type: NiceQuestType;
  flags: NiceQuestFlag[];
  afterClear: NiceQuestAfterClearType;
  consumeType: NiceConsumeType;
  consume: number;
  spotId: number;
  spotName: string;
  warId: number;
  warLongName: string;
  priority: number;
  noticeAt: number;
  openedAt: number;
  closedAt: number;
  phase: number;
  individuality: NiceTrait[];
  qp: number;
  exp: number;
  bond: number;
  battleBgId: number;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicSkill {
  id: number;
  name: string;
  ruby: string;
  icon?: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicTd {
  id: number;
  name: string;
  ruby: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface BasicWar {
  id: number;
  coordinates: number[][];
  age: string;
  name: string;
  longName: string;
  flags: NiceWarFlag[];
  eventId: number;
  eventName: string;
}
/**
 * Slightly modified pydantic BaseModel that uses orjson for json methods
 */
export interface RepoInfo {
  hash: string;
  timestamp: number;
}
