import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";


/**
 * Spilling carosel of univerisities in a banner near the top of the page
 * This pushes the partners higher, as i belive it improves credibility of the brand via trust
 * 
 */

interface Partner {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function Partners() {
  const universities: Partner[] = [
    { name: "Lincoln Students' Union", logoUrl: "https://lcdn.sumsmanagement.com/documents/Website/homepage/temp-su-logo-colour.webp" },
    { name: "Kent Union", logoUrl: "https://sassets.sumsmanagement.com/web/logos/kentunion.jpg" },
    { name: "Nottingham Students' Union", logoUrl: "https://sassets.sumsmanagement.com/web/logos/nottingham.jpg" },
    { name: "Loughborough Students' Union", logoUrl: "https://sassets.sumsmanagement.com/web/logos/lsu-logo.jpg" },
    { name: "Sussex Union", logoUrl: "https://cdn.sums.digital/sums-website/folders/sussex-logo.jpg" },
    { name: "Sheffield Students' Union", logoUrl: "https://sassets.sumsmanagement.com/web/logos/sheffield.jpg" },
  ];

  const repeatedPartners = [...universities, ...universities];

  return (
    <Box
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";
        const borderColor = isDark ? "#ffffff" : "#000000";

        return {
          width: "100vw",position: "relative",
          left: "50%", right: "50%",
          marginLeft: "-50vw", marginRight: "-50vw",
          bgcolor: isDark ? "background.paper" : "#FFFDF2",
          borderTop: `2px solid ${borderColor}`,
          borderBottom: `2px solid ${borderColor}`,
          py: 2.5, overflow: "hidden",
        };
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: 3, mb: 2, textAlign: "center" }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,letterSpacing: "0.1em",
            textTransform: "uppercase", opacity: 0.7,
          }}
        >
          Trusted by leading Students' Unions across the UK
        </Typography>
      </Box>

      {/* Scrolling Container */}
      <Box
        sx={{
          display: "flex", width: "max-content",
          animation: `${scroll} 35s linear infinite`,
          "&:hover": {
            animationPlayState: "paused", 
          },
        }}
      >
        {repeatedPartners.map((partner, index) => (
          <Box
            key={`${partner.name}-${index}`}
            sx={(theme) => {
              const isDark = theme.palette.mode === "dark";
              return {
                display: "flex",
                alignItems: "center",  justifyContent: "center",
                px: 2,py: 1, mx: 2, bgcolor: isDark ? "#161817" : "#FFFFFF",
                borderRadius: 2, border: `2px solid ${isDark ? "#ffffff" : "#000000"}`,
                boxShadow: `3px 3px 0px ${isDark ? "#ffffff" : "#000000"}`,
                minWidth: "180px", height: "90px",
                transition: "transform 0.15s ease",
                "&:hover": {
                  transform: "translate(-2px, -2px)",
                  boxShadow: `5px 5px 0px ${isDark ? "#ffffff" : "#000000"}`,
                },
              };
            }}
          >
            <img src={partner.logoUrl} style={{maxHeight:75, maxWidth:150}}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
}