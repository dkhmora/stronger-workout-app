import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
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

  if (isMobile) {
    return (
      <ExerciseList toolbarTitle="Exercises" columns={columns} rows={data} />
    );
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          p: 3,
        }}
      >
        {!isMobile && (
          <Grid item sx={{ my: 3 }}>
            <Typography noWrap variant="h2" component="div">
              Exercises
            </Typography>
          </Grid>
        )}

        <Grid item>
          <DataTable columns={columns} rows={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
