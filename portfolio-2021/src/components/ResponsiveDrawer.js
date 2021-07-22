import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "none",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ color: "white" }}
            noWrap
          ></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to="/" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItem>
          </NavLink>
          <NavLink to="/projects" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <CodeIcon style={{ height: 30, width: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    Projects
                  </Typography>
                }
              />
            </ListItem>
          </NavLink>
          <NavLink to="/resume" onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <GetAppIcon style={{ height: 30, width: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    Resume
                  </Typography>
                }
              />
            </ListItem>
          </NavLink>
          <hr style={{ width: "90%", marginTop: 8, marginBottom: 8 }} />
          <ListItem>
            <ListItemText>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "black" }}
                  >
                    Contact Me
                  </Typography>
                }
              />
            </ListItemText>
          </ListItem>

          <a
            id="gmail"
            href="mailto:sheridp2@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem button>
              <ListItemIcon>
                <span
                  className="iconify"
                  data-icon="logos:google-gmail"
                  data-inline="false"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                ></span>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    Email
                  </Typography>
                }
              />
            </ListItem>
          </a>
          <a
            id="github"
            href="https://github.com/sheridp2"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem button>
              <ListItemIcon>
                <span
                  className="iconify"
                  data-icon="logos:github-icon"
                  data-inline="false"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                ></span>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    Github
                  </Typography>
                }
              />
            </ListItem>
          </a>

          <a
            id="linkedin"
            href="https://www.linkedin.com/in/patrick-sheridan/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem button>
              <ListItemIcon>
                <span
                  className="iconify"
                  data-icon="logos:linkedin-icon"
                  data-inline="false"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                ></span>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    style={{ fontSize: 24, color: "#5e72e4" }}
                  >
                    LinkedIn
                  </Typography>
                }
              />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </div>
  );
}
