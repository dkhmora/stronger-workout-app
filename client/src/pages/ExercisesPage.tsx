import React from "react";
import { Container, Typography } from "@mui/material";
import DataTable from "../components/DataTable";
import { useSelector } from "react-redux";
import ExerciseList from "../components/ExerciseList";
import type { RootState } from "../store/general";
import { ExerciseColumn } from "../interfaces";
import { data } from "../temp_db/exercises";

export default function ExercisesPage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);
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

  return (
    <Container className="py-4 md:p-12">
      {isMobile ? (
        <ExerciseList exercises={data} />
      ) : (
        <>
          <Typography noWrap variant="h2" component="div">
            Exercises
          </Typography>

          <DataTable columns={columns} rows={data} />
        </>
      )}
    </Container>
  );
}
