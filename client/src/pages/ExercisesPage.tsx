import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DataTable from "../components/DataTable";

export default function ExercisesPage() {
  interface ExerciseColumn {
    id: "title" | "description" | "type" | "userCreated";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  interface ExerciseData {
    title: string;
    type: string;
    description: string;
    userCreated: string;
  }

  const columns: ExerciseColumn[] = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "type", label: "Type", minWidth: 170 },
    { id: "description", label: "Description", minWidth: 170 },
    {
      id: "userCreated",
      label: "User Created",
      minWidth: 170,
    },
  ];

  function createData(
    title: string,
    type: string,
    description: string,
    userCreated: boolean
  ): ExerciseData {
    return {
      title,
      type,
      description,
      userCreated: userCreated ? "Yes" : "No",
    };
  }

  const rows = [
    createData(
      "Bench Press",
      "Barbell",
      "Bench Press(Barbell) Description",
      false
    ),
    createData(
      "Bench Press",
      "Dumbell",
      "Bench Press(Dumbell) Description",
      false
    ),
  ];

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <DataTable toolbarTitle="Exercises" columns={columns} rows={rows} />
    </Box>
  );
}
