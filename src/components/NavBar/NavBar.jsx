import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeIcon from "@mui/icons-material/Dehaze";

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  Button,
  Typography,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useStyles } from "../../assets/styles/NavBarStyle";
import BasicButton from "../Button/BasicButton";
import { useNavigate } from "react-router-dom";

// Exporting Default Navbar to the App.js File
function NavBar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const small = useMediaQuery("(max-width:600px)");
  const full = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);

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

  const navigateToHref = (link) => {
    navigate(link);
  };

  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Toolbar variant="dense">
          {small && (
            <>
              <List>
                <ListItem button>
                  <Button onClick={handleMenuClick}>
                    <DehazeIcon sx={{ color: "#fefefe" }} />
                    {open ? (
                      <ExpandLess sx={{ color: "#fefefe" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fefefe" }} />
                    )}
                  </Button>
                  <Typography
                    variant="h6"
                    color="inherit"
                    onClick={() => {
                      console.log("logo clicked");
                      setOpen(false);
                    }}
                  >
                    ZProjects
                  </Typography>
                </ListItem>
                {menuItems.map((data, index) => {
                  return (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton
                          key={index}
                          button
                          onClick={() => handleMenuItemClick(data.link)}
                        >
                          <ListItemText primary={data.title} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  );
                })}
              </List>
            </>
          )}

          {full && (
            <>
              <Button
                onClick={() => {
                  handleMenuClick();
                  console.log("Logo clicked");
                }}
              >
                <Typography variant="h6" sx={{ color: "#fefefe" }}>
                  ZProjects
                </Typography>
              </Button>
              {menuItems.map((data, index) => {
                return (
                  <BasicButton
                    key={index}
                    color="inherit"
                    label={data.title}
                    onClick={() => {
                      handleMenuItemClick(data.link);
                      console.log("NavBarHome clicked");
                    }}
                  />
                );
              })}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
