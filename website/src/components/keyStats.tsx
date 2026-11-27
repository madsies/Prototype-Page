import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";

export default function KeyStatsCard() {
  const stats = [
    { value: "1,300,000+", label: "Students engaged with the platform" },
    { value: "2,500,000+", label: "Election votes in various democratic elections" },
    { value: "$117 Million", label: "Revenue processed within EPOS" },
  ];

  return (
    <InfoBox title="KEY STATISTICS">
      <Stack
        spacing={2}
        divider={
          <Divider
            sx={(theme) => ({
              borderColor: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
              opacity: 0.25,
            })}
          />
        }
      >
        {stats.map((stat) => (
          <Box key={stat.value}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, lineHeight: 1.1, mb: 0.5 }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              color="text.light"
              sx={{ display: "block", fontWeight: 500 }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </InfoBox>
  );
}