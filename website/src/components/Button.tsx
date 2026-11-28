import Button from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import type { PastelName } from "../theme"; // Adjust import path

interface ButtonProps {
  label: string;
  onClick: () => void;
  offset?: number;
  colour?: PastelName;
  sx?: SxProps<Theme>;
}

export default function NeoButton({
  label,
  onClick,
  offset = 4,
  colour = "mint",
  sx,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disableElevation
      sx={[
        (theme) => {
          const shadowColor =
            theme.palette.mode === "dark" ? "#ffffff" : "#000000";
          const pastelName: PastelName = colour;
          const token = theme.palette.pastels[pastelName];

          return {
            color: token.contrastText,
            bgcolor: theme.palette.primary.main,
            fontWeight: 700,
            borderRadius: 999,
            border: `2px solid ${shadowColor}`,
            boxShadow: `${offset}px ${offset}px 0px ${shadowColor}`,
            transition:
              "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
              transform: `translate(${offset / 2}px, ${offset / 2}px)`,
              boxShadow: `${offset / 2}px ${offset / 2}px 0px ${shadowColor}`,
            },
          };
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {label}
    </Button>
  );
}