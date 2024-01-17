import { ListItemButton, Paper, Typography } from "@mui/material";
import React from "react";
import { TemplateData } from "../../interfaces";
import TemplateListItemBody from "./TemplateListItemBody";
import TemplateListItemHeader from "./TemplateListItemHeader";

interface TemplateListItemProps {
  templateData: TemplateData;
}

export default function TemplateListItem({
  templateData,
}: TemplateListItemProps) {
  const openTemplateDetailsDialog = (row: any) => () => {
    console.log(row);
    /* place open workout dialog here */
  };

  return (
    <Paper className="rounded-xl h-full">
      <ListItemButton
        alignItems="flex-start"
        role={undefined}
        onClick={openTemplateDetailsDialog(templateData)}
        dense
        className="flex-1 flex-col h-full justify-start text-left rounded-xl"
      >
        <TemplateListItemHeader title={templateData.title} />

        <TemplateListItemBody exercises={templateData.exercises} />
      </ListItemButton>
    </Paper>
  );
}
