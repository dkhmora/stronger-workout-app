import { Add as AddIcon, Folder as FolderIcon } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function TemplatesHeader() {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <Typography component="h4" variant="h4" className="font-bold">
        Templates
      </Typography>

      <div className="space-x-2">
        <Button
          variant="contained"
          size="medium"
          startIcon={<AddIcon fontSize="medium" />}
          className="bg-blue-500 bg-opacity-40 rounded-lg px-4 font-bold text-blue-500 leading-3"
        >
          Create
        </Button>
        <Button
          variant="contained"
          size="small"
          className="bg-blue-500 bg-opacity-40 rounded-lg px-0 text-blue-500 leading-3"
        >
          <FolderIcon className="px-0 mx-0" />
        </Button>
      </div>
    </div>
  );
}
