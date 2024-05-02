import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Drawer as MuiDrawer,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { routeElements, mainRoutes } from "../constants/general";
import "./Navbar.css";
import {
  dynamicNavbarStyles,
  navbarStyles,
  openedMixin,
  closedMixin,
  drawerWidth,
} from "../styles/navbar";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <List>
        {mainRoutes.map(({ text, to, desktop }, index) =>
          desktop ? (
            <ListItem
              key={text}
              disablePadding
              sx={navbarStyles.listItem}
              {...{ to }}
              component={Link}
            >
              <ListItemButton
                sx={dynamicNavbarStyles.listItemButton({ open })}
                selected={location.pathname === to}
              >
                {routeElements[to as keyof typeof routeElements]?.icon && (
                  <ListItemIcon sx={dynamicNavbarStyles.listItemIcon({ open })}>
                    {routeElements[to as keyof typeof routeElements].icon}
                  </ListItemIcon>
                )}

                <ListItemText
                  primary={text}
                  sx={dynamicNavbarStyles.listItemText({ open })}
                />
              </ListItemButton>
            </ListItem>
          ) : null
        )}
      </List>
    </Drawer>
  );
}
