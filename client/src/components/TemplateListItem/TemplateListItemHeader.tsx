import { Typography } from "@mui/material";
import React from "react";

export default function TemplateListItemHeader({ title }: { title: string }) {
  return (
    <div>
      <Typography className="font-bold">{title}</Typography>
    </div>
  );
}
