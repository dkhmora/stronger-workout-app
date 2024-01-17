import React from "react";
import { TemplateData } from "../interfaces";
import { Grid, List } from "@mui/material";
import TemplateListItem from "./TemplateListItem";

interface TemplateListProps {
  templates: TemplateData[];
  className?: string;
}

export default function TemplateList({
  templates,
  className,
}: TemplateListProps) {
  const renderWorkouts = () => {
    return templates.map((data: TemplateData, index: number) => (
      <Grid
        item
        zeroMinWidth
        xs={6}
        md={4}
        lg={3}
        key={`${data.title}-${index}`}
      >
        <TemplateListItem templateData={data} />
      </Grid>
    ));
  };

  return (
    <List className={className}>
      <Grid container rowSpacing={2} columnSpacing={3} alignItems="stretch">
        {renderWorkouts()}
      </Grid>
    </List>
  );
}
