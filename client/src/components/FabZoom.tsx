import { Zoom, Fab } from "@mui/material";
import React from "react";

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
};

export default function FabZoom({
  icon,
  color,
  className,
  label,
  transitionDuration,
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
      <Fab className={className} aria-label={label} color={color}>
        {icon}
      </Fab>
    </Zoom>
  );
}
