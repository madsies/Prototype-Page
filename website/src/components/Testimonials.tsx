import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  colour: "mint" | "butter" | "lavender" | "peach" | "sky" | "rose";
  side: "left" | "right";
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      quote:
        "Switching to SUMS cut our Freshers' Week ticketing queues in half. Our student officers finally have real-time engagement numbers instead of guessing.",
      author: "University of Sheffield SU",
      role: "Head of Digital & Communications",
      colour: "lavender",
      side: "left",
    },
    {
      quote:
        "We saw our highest election turnout in over a decade. The mobile voting experience felt natural to students, and our staff saved days of manual verification.",
      author: "Nottingham Students' Union",
      role: "Democracy & Representation Coordinator",
      colour: "butter",
      side: "right",
    },
    {
      quote:
        "Having venue EPOS, society memberships, and advice casework under one roof means our teams actually talk to each other through the data.",
      author: "Cardiff Students' Union",
      role: "Director of Operations",
      colour: "mint",
      side: "left",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/* Section Header */}
      <Box sx={{ mb: 6, maxWidth: 650 }}>
        <InfoBox
          colour="rose"
          offset={2}
          sx={{ width: "fit-content", transform: "rotate(-1.5deg)", mb: 1.5 }}
        >
          <Typography variant="caption" fontWeight={800} letterSpacing="0.06em">
            UNION VOICES
          </Typography>
        </InfoBox>

        <Typography variant="h2" fontWeight={800} lineHeight={1.1} sx={{ mb: 1.5 }}>
          Heard across campus
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.85 }}>
          Real feedback from the staff and student leaders running their unions on SUMS every day.
        </Typography>
      </Box>

      {/* Alternates*/}
      <Box
        sx={{
          display: "flex",flexDirection: "column",
          gap: 5,maxWidth: "920px",mx: "auto",
        }}
      >
        {testimonials.map((item, idx) => {
          const isLeft = item.side === "left";

          return (
            <Box
              key={idx}
              sx={{display: "flex", justifyContent: isLeft ? "flex-start" : "flex-end", width: "100%",}}
            >
              <InfoBox
                colour={item.colour}
                sx={(theme) => {
                  const isDark = theme.palette.mode === "dark";
                  const borderColor = isDark ? "#ffffff" : "#000000";

                  return {
                    position: "relative",
                    width: { xs: "100%", md: "82%" },
                    p: { xs: 3, md: 4 },
                    borderRadius: "4px",
                    overflow: "visible",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: "-20px",
                      ...(isLeft ? { left: "36px" } : { right: "36px" }),
                      width: 0,
                      height: 0,
                      borderStyle: "solid",
                      borderWidth: isLeft ? "20px 22px 0 0"
                        : "20px 0 0 22px",
                      borderColor: isLeft? `${borderColor} transparent transparent transparent`
                        : `${borderColor} transparent transparent transparent`,
                      filter: `drop-shadow(3px 3px 0px ${borderColor})`,
                      zIndex: 1,
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-15px",
                      ...(isLeft ? { left: "38px" } : { right: "38px" }),
                      width: 0,
                      height: 0,
                      borderStyle: "solid",
                      borderWidth: isLeft
                        ? "16px 18px 0 0"
                        : "16px 0 0 18px",
                      borderColor: "inherit",
                      borderTopColor: "inherit",
                      zIndex: 2,
                    },
                  };
                }}
              >
                <Typography variant="h5" fontWeight={700} lineHeight={1.35} sx={{ mb: 2.5 }}>
                  “{item.quote}”
                </Typography>

                <Box
                  sx={{
                    display: "flex",flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 0.5,pt: 1.5,
                    borderTop: "1.5px solid currentColor",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={800}>
                    {item.author}
                  </Typography>
                  <Typography variant="caption" fontWeight={700} sx={{ opacity: 0.8 }}>
                    {item.role}
                  </Typography>
                </Box>
              </InfoBox>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}