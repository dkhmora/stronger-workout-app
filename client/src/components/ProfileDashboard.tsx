import React from "react";
import { Avatar, Typography, Grid, Paper, Box } from "@mui/material";
import Chart from "react-google-charts";
import { blueGrey } from "@mui/material/colors";

// Sample data for the charts
const workoutData = [
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
  ["10/22", 70],
  ["10/29", 69],
  ["11/5", 68.5],
  ["11/12", 68],
];

const bodyFatData = [
  ["Sep", 20.2],
  ["Oct", 21],
  ["Nov", 21.3],
];

const selectedWorkoutData = [["Week", "Workouts"], ...workoutData.slice(-5)];
const selectedWeightData = [["Week", "Weight"], ...weightData.slice(-7)];
const selectedBodyFatData = [["Month", "Body Fat"], ...bodyFatData.slice(-90)];

export default function ProfileDashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Paper sx={{ padding: 2, borderRadius: 4 }}>
        <Grid container spacing={2}>
          {/* Workouts per week chart */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
              <Chart
                chartType="ColumnChart"
                data={selectedWorkoutData}
                options={{
                  title: "Workouts per Week",
                  titleTextStyle: {
                    color: "white",
                    fontSize: 18,
                  },
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
            <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
              <Chart
                chartType="LineChart"
                data={selectedWeightData}
                options={{
                  title: "Body Weight Progress",
                  titleTextStyle: { color: "white", fontSize: 18 },
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

          {/* Body Fat chart */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
              <Chart
                chartType="LineChart"
                data={selectedBodyFatData}
                options={{
                  title: "Body Fat",
                  titleTextStyle: { color: "white", fontSize: 18 },
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
    </Box>
  );
}
