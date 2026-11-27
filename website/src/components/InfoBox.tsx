import Box from "@mui/material/Box";
import { useTheme, type SxProps, type Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import type { PastelName } from "../theme";

interface InfoBoxProps {
  children: ReactNode;
  title?: string;
  offset?: number;
  colour?: PastelName | (string & {});
  square?: boolean;
  sx?: SxProps<Theme>;
}

export default function InfoBox({
  children,
  title,
  offset = 4,
  colour,
  square = false,
  sx,
}: InfoBoxProps) {
  const theme = useTheme();
  const shadowColour = theme.palette.mode === "dark" ? "#ffffff" : "#000000";

  const pastelToken = colour && colour in theme.palette.pastels
      ? theme.palette.pastels[colour as keyof typeof theme.palette.pastels] : null;

  return (
    <Box
      sx={[
        {
          bgcolor: pastelToken ? pastelToken.main : colour ?? "background.paper",
          color: pastelToken ? pastelToken.contrastText : "text.primary",
          borderRadius: square ? 0 : 4,
          boxShadow: `${offset}px ${offset}px 0px ${shadowColour}`,
          border: `2px solid ${shadowColour}`,
          p: 2.5,
          transition:"background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {title && (
        <Box
          sx={{
            borderBottom: "2px solid currentColor",
            pb: 1, mb: 1.5,fontWeight: 800,
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </Box>
      )}
      {children}
    </Box>
  );
}