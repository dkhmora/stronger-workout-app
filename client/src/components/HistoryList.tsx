import * as React from "react";
import { Box, List, Grid } from "@mui/material";
import HistoryListItem from "./HistoryListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";

export default function HistoryList(props: any) {
  const { workouts } = props;
  const isMobile = useSelector((state: RootState) => state.isMobile);

  const itemsPerRow = isMobile ? 1 : 3;

  const renderRows = () => {
    const rows = [];
    const totalItems = workouts.length;

    for (let i = 0; i < totalItems; i += itemsPerRow) {
      const row = workouts.slice(i, i + itemsPerRow);

      rows.push(
        <Grid container spacing={2}>
          {row.map((data: any, index: number) => (
            <Grid item xs={12 / itemsPerRow} md={12 / itemsPerRow} key={index}>
              <HistoryListItem workoutData={data} />
            </Grid>
          ))}
        </Grid>
      );
    }

    return rows;
  };

  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {renderRows()}
      </List>
    </Box>
  );
}
