import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";
import NeoButton from "./Button";

export default function WhySumsSection() {
  const pillars = [
    {
      number: "01",
      title: "Union-Owned & Sector-Led",
      detail:
        "SUMS is owned by Students’ Unions, meaning every roadmap feature is shaped by real sabbatical officers and union staff, not outside shareholders.",
      colour: "butter" as const,
    },
    {
      number: "02",
      title: "Built for Peak Freshers Traffic",
      detail:
        "Engineered to handle sudden spikes when thousands of new students join societies and buy event tickets in the same hour.",
      colour: "mint" as const,
    },
    {
      number: "03",
      title: "Dedicated UK Support Team",
      detail:
        "Direct access to specialists who actually understand university registry syncs, NUS affiliation, and union governance.",
      colour: "lavender" as const,
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Left*/}
        <Box>
          <InfoBox
            colour="peach"
            offset={2}
            sx={{ width: "fit-content", transform: "rotate(1.5deg)", mb: 2 }}
          >
            <Typography variant="caption" fontWeight={800}>
              WHY UNIONS SWITCH TO SUMS
            </Typography>
          </InfoBox>

          <Typography variant="h2" fontWeight={800} lineHeight={1.1} sx={{ mb: 2 }}>
            Software that <i>actually</i> gets how Students’ Unions work
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.85, mb: 2 }}>
            Generic CRM and ticketing platforms force unions into rigid corporate workflows. SUMS adapts to democratic governance, student-led committees, and complex campus venues out of the box.
          </Typography>

          <NeoButton label="Learn More" onClick={() => {}}/>
        </Box>

        {/* Right */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {pillars.map((item) => (
            <InfoBox key={item.number} colour={item.colour} sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Typography
                  variant="h3"
                  fontWeight={900}
                  sx={{ lineHeight: 1, opacity: 0.35, minWidth: "48px" }}
                >
                  {item.number}
                </Typography>
                <Box>
                  <Typography variant="h5" fontWeight={800} sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Box>
            </InfoBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}