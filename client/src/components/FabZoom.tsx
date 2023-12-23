import { Zoom, Fab } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type FabZoomProps = {
  icon: React.ReactNode;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  className?: string;
  label: string;
  transitionDuration: number;
  to: string;
};

export default function FabZoom({
  icon,
  color,
  className,
  label,
  transitionDuration,
  to,
}: FabZoomProps) {
  return (
    <Zoom
      key={`${label}${color}`}
      timeout={transitionDuration}
      style={{
        transitionDelay: "50ms",
      }}
      in={true}
      unmountOnExit
    >
      <Fab
        component={Link}
        className={className}
        aria-label={label}
        color={color}
        to={to}
      >
        {icon}
      </Fab>
    </Zoom>
  );
}
