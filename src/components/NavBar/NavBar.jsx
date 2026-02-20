import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AnchorIcon from "@mui/icons-material/Anchor";
import ColorModeIconDropdown from "../../styles/colorModeIconDropdown";
import { useNavigate } from "react-router-dom";
import BasicButton from "../Button/BasicButton";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const navigateToHref = (link) => {
    navigate(link);
  };

  const handleMenuClick = () => {
    navigateToHref(menuItems[0].link);
    setOpen(!open);
    console.log("Menu clicked");
  };
  const handleMenuItemClick = (link) => {
    setOpen(!open);
    navigateToHref(link);
    console.log("Menu Item clicked");
  };

  const menuItems = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Me",
      link: "/about-me",
    },
    {
      title: "Contact",
      link: "/contact-me",
    },
  ];
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <AnchorIcon sx={{ color: "#000000" }} />
            <Box sx={{ pl: 4, display: { xs: "none", md: "flex" } }}>
              {menuItems.map((data, index) => {
                return (
                  <BasicButton
                    sx={{ px: 3 }}
                    key={index}
                    variant="text"
                    color="info"
                    size="small"
                    label={data.title}
                    onClick={() => {
                      handleMenuItemClick(data.link);
                      console.log("NavBarItem clicked");
                    }}
                  />
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {menuItems.map((data, index) => {
                  return (
                    <MenuItem
                      key={index}
                      color="inherit"
                      label={data.title}
                      onClick={() => {
                        handleMenuItemClick(data.link);
                        console.log("NavBarItem clicked");
                      }}
                    />
                  );
                })}
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
