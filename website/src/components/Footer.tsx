import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";
import NeoButton from "./Button";

export default function Footer() {
  return (
    <Box sx={{ pt: 6, pb: 4 }}>
      <InfoBox
        colour="mint"
        sx={{
          p: { xs: 4, md: 6 },
          mb: 6,display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",gap: 3,
        }}
      >
        <Box sx={{ maxWidth: 620 }}>
          <Typography variant="h2" fontWeight={800} lineHeight={1.1} sx={{ mb: 1.5 }}>
            Ready to simplify your Union’s digital ecosystem?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            We are looking to bring more partners onto the platform. If you are interested in finding out more, or have any general queries, let us know.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <NeoButton label="Get In Touch" onClick={() => {}} />
          <NeoButton label="Download Overview" onClick={() => {}} />
        </Box>
      </InfoBox>

      {/* Footer bar */}
      <Box
        sx={(theme) => {
          const borderColor = theme.palette.mode === "dark" ? "#ffffff" : "#000000";
          return {
            borderTop: `2px solid ${borderColor}`,
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          };
        }}
      >
        <Typography variant="body2" fontWeight={800}>
          SUMS — Students’ Union Management System
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer" }}>
            Modules
          </Typography>
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer" }}>
            Case Studies
          </Typography>
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer" }}>
            Accessibility
          </Typography>
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer" }}>
            Contact Support
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}