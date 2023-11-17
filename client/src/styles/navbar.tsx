import { SxProps, Theme, CSSObject } from "@mui/material/styles";

export const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

type DynamicNavbarStylesProps = {
  [key: string]: any;
};
type StyleFunction = (props: DynamicNavbarStylesProps) => SxProps<Theme>;

export const dynamicNavbarStyles: Record<string, StyleFunction> = {
  listItemButton: ({ open }) => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
  }),
  listItemIcon: ({ open }) => ({
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  }),
  listItemText: ({ open }) => ({ opacity: open ? 1 : 0 }),
};

export const navbarStyles: Record<string, SxProps<Theme>> = {
  listItem: { display: "block" },
};
