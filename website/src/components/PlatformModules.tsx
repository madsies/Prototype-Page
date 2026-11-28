import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";
import NeoButton from "./Button";

interface ModuleItem {
  title: string;
  tag: string;
  description: string;
  colour: "mint" | "butter" | "lavender" | "peach" | "sky" | "rose";
  span?: number;
}

export default function PlatformModules() {
  const modules: ModuleItem[] = [
    {
      title: "Democracy & Elections",
      tag: "HIGH TURNOUT",
      description:
        "Run secure STV and FPTP campus elections, referenda, and AGM voting with real-time turnout tracking.",
      colour: "mint",
      span: 2,
    },
    {
      title: "Clubs & Societies",
      tag: "STUDENT GROUPS",
      description:
        "Self-service committee hubs for memberships, room bookings, risk assessments, and group finances.",
      colour: "butter",
      span: 1,
    },
    {
      title: "Events & Ticketing",
      tag: "FRESHERS READY",
      description:
        "Sell tickets online or on the door with rapid QR scanning, wristband linking, and capacity alerts.",
      colour: "peach",
      span: 1,
    },
    {
      title: "Venue EPOS & Finance",
      tag: "LIVE SYNC",
      description:
        "Connect bars, cafés, and retail directly to your accounting software with zero manual reconciliation.",
      colour: "sky",
      span: 2,
    },
    {
      title: "Advice & Casework",
      tag: "GDPR SECURE",
      description:
        "Confidential case management for academic appeals, housing issues, and student welfare tracking.",
      colour: "lavender",
      span: 2,
    },
    {
      title: "Volunteering & Employability",
      tag: "SKILLS LOG",
      description:
        "Log student volunteer hours, verify community impact, and issue automated skills certificates.",
      colour: "rose",
      span: 1,
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/*Header */}
      <Box sx={{ mb: 5, maxWidth: 680 }}>
        <InfoBox
          colour="sky"
          offset={2}
          sx={{ width: "fit-content", transform: "rotate(-1.2deg)", mb: 1.5 }}
        >
          <Typography variant="caption" fontWeight={800} letterSpacing="0.06em">
            ALL-IN-ONE ARCHITECTURE
          </Typography>
        </InfoBox>

        <Typography variant="h2" fontWeight={800} lineHeight={1.1} sx={{ mb: 1.5 }}>
          Everything your Union runs, connected in one place
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.85 }}>
          Replace disconnected legacy tools with modular software designed around the academic year.
        </Typography>
      </Box>

      {/* Bento Grid */}
      <Box
        sx={{
          display: "grid",gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          
        }}
      >
        {modules.map((mod) => (
          <InfoBox
            key={mod.title}
            colour={mod.colour}
            sx={{
              gridColumn: { xs: "span 1", md: `span ${mod.span || 1}` },
              display: "flex", flexDirection: "column",
              justifyContent: "space-between", p: 3,
              transition: "transform 0.15s ease",
              "&:hover": { transform: "translate(-3px, -3px)",},
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "inline-block",
                  fontWeight: 800,px: 1.2, py: 0.4, mb: 2,
                  border: "1.5px solid currentColor", borderRadius: 1,
                }}
              >
                {mod.tag}
              </Typography>

              <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                {mod.title}
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                {mod.description}
              </Typography>
            </Box>

            <Box>
              <NeoButton label="Learn more →" onClick={() => {}} />
            </Box>
          </InfoBox>
        ))}
      </Box>
    </Box>
  );
}