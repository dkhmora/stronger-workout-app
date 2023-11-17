import React from "react";
import { Avatar, Typography, Grid, Paper, Box } from "@mui/material";
import Chart from "react-google-charts";
import { blueGrey } from "@mui/material/colors";

// Sample data for the charts
const workoutData = [
  ["Week", "Workouts"],
  ["9/24", 3],
  ["10/1", 2],
  ["10/8", 4],
  ["10/15", 3],
  ["10/22", 5],
  ["10/29", 2],
  ["11/5", 1],
  ["11/12", 1],
];

const weightData = [
  ["Week", "Weight"],
  ["10/22", 70],
  ["10/29", 69],
  ["11/5", 68.5],
  ["11/12", 68],
];

const macrosData = [
  ["Macro", "Value"],
  ["Protein", 120],
  ["Carbs", 200],
  ["Fat", 50],
];

export default function ProfileDashboard() {
  return (
    <Paper sx={{ padding: 2, borderRadius: 4 }}>
      <Grid container spacing={3}>
        {/* Workouts per week chart */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Workouts per Week
          </Typography>
          <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Chart
              chartType="BarChart"
              data={workoutData}
              options={{
                hAxis: {
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                vAxis: {
                  title: "Activity",
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                legend: {
                  position: "none",
                },
                backgroundColor: blueGrey[900],
              }}
              graph_id="BarChart"
              width="100%"
              height="300px"
            />
          </Paper>
        </Grid>

        {/* Body weight chart */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Body Weight Progress
          </Typography>
          <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Chart
              chartType="LineChart"
              data={weightData}
              options={{
                hAxis: {
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                vAxis: {
                  title: "Activity",
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                legend: {
                  position: "none",
                },
                backgroundColor: blueGrey[900],
              }}
              graph_id="BodyWeightLineChart"
              width="100%"
              height="300px"
            />
          </Paper>
        </Grid>

        {/* Daily Macros chart */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Daily Macros
          </Typography>
          <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Chart
              chartType="LineChart"
              data={macrosData}
              options={{
                hAxis: {
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                vAxis: {
                  title: "Activity",
                  titleTextStyle: { color: "white" },
                  textStyle: { color: "white" },
                },
                legend: {
                  position: "none",
                },
                backgroundColor: blueGrey[900],
              }}
              graph_id="DailyMacrosLineChart"
              width="100%"
              height="300px"
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
