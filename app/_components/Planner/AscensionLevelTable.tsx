import { AscensionMaxLevels } from "@/app/_types/servant";
import { Typography } from "@mui/material";

export const AscensionLevelTable = ({
  ascensionMapping,
}: {
  ascensionMapping: AscensionMaxLevels;
}) => (
  <table className="border-collapse">
    <thead>
      <tr>
        <th
          className="border-0 border-b border-r border-solid
              border-black pb-1 pr-1 "
        >
          <Typography variant="body2">Ascension</Typography>
        </th>

        <th
          className="border-0 border-b border-l border-solid
              border-black pb-1 pl-1"
        >
          <Typography variant="body2">Max Level</Typography>
        </th>
      </tr>
    </thead>

    <tbody>
      {Object.entries(ascensionMapping).map(([ascLvl, minLvl], index) => {
        return (
          <tr key={index}>
            <th
              className="border-0 border-r border-solid border-black
                  pr-1 text-right"
            >
              <Typography variant="body2">{ascLvl}</Typography>
            </th>

            <td className="border-0 border-l border-solid border-black pl-1">
              <Typography variant="body2">{minLvl}</Typography>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
