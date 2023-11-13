import React from "react";
import { Box } from "@mui/material";
import DataTable from "../components/DataTable";
import { useSelector } from "react-redux";
import ExerciseList from "../components/ExerciseList";
import type { RootState } from "../store/general";
import { ExerciseColumn, ExerciseData } from "../Interfaces";

export default function ExercisesPage() {
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

  const isMobile = useSelector((state: RootState) => state.isMobile);

  if (isMobile) {
    return (
      <ExerciseList toolbarTitle="Exercises" columns={columns} rows={rows} />
    );
  }

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <DataTable toolbarTitle="Exercises" columns={columns} rows={rows} />
    </Box>
  );
}
