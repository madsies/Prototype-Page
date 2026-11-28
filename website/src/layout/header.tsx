import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../contexts/themeContext";
import { SITE_CONFIG } from "../constants";
import InfoBox from "../components/InfoBox";
import NeoButton from "../components/Button";

interface NavItem {
  label: string;
  targetId?: string;
  href?: string;
}

export default function Header() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark ? "#ffffff" : "#000000";

  // Smooth scroll to sections on the homepage, or link to external/sub-pages
  const navItems: NavItem[] = [
    { label: "Modules", targetId: "modules" },
    { label: "Why SUMS", targetId: "why-sums" },
    { label: "Testimonials", targetId: "testimonials" },
    { label: "Join Us", href: "https://sums.digital/" },
  ];

  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);

    if (item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: "secondary.main",
          borderBottom: `2px solid ${borderColor}`,
          boxShadow: `0px 3px 0px 0px ${borderColor}`,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ height: 84, px: 0 }}>
          <Box
            sx={{
              width: "100%",maxWidth: SITE_CONFIG.MAX_WIDTH_PX,
              mx: "auto", px: { xs: 2, md: 4 },
              display: "flex",alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <InfoBox sx={{ p: "4px", display: "flex", alignItems: "center" }}>
                <img
                  src="sums.jpg"
                  alt="SUMS Logo"
                  style={{ height: 54, display: "block" }}
                />
              </InfoBox>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1.5,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    color: "#ffffff", fontWeight: 700,fontSize: "0.95rem",
                    textTransform: "none", px: 2,  py: 1, borderRadius: 1.5,
                    border: "2px solid transparent",
                    transition: "all 0.15s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.12)",
                      border: `2px solid ${borderColor}`,
                      transform: "translate(-1px, -1px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <NeoButton
                label="Get in Touch"
                onClick={() => handleNavClick({ label: "Get in Touch", targetId: "footer" })}
                sx={{ ml: 1 }}
              />

              <IconButton
                onClick={toggleColorMode}
                aria-label="Toggle light and dark theme"
                sx={{
                  ml: 1, color: "#ffffff",
                  border: `2px solid ${borderColor}`, borderRadius: 1.5,
                  bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.2)",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "#000000",
                  },
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {/* Mobile Controls */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                sx={{
                  color: "#ffffff",
                  border: `2px solid ${borderColor}`,
                  borderRadius: 1.5,
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                  color: "#ffffff",
                  border: `2px solid ${borderColor}`,
                  borderRadius: 1.5,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "background.default",
            borderLeft: `2px solid ${borderColor}`,
            p: 2,
          },
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item)}
                sx={{
                  border: `2px solid ${borderColor}`,
                  borderRadius: 1.5,
                  boxShadow: `2px 2px 0px ${borderColor}`,
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 800 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ mt: 2 }}>
            <NeoButton
              label="Get in Touch"
              onClick={() => handleNavClick({ label: "Get in Touch", targetId: "footer" })}
              sx={{ width: "100%" }}
            />
          </Box>
        </List>
      </Drawer>
    </>
  );
}