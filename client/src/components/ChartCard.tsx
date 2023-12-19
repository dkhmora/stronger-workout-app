import { Paper } from "@mui/material";
import React from "react";
import useWindowDimension from "../hooks/useWindowDimension";
import { blueGrey } from "@mui/material/colors";
import Chart, {
  GoogleChartOptions,
  GoogleChartWrapperChartType,
} from "react-google-charts";

interface AdditionalGoogleChartOptions
  extends Omit<GoogleChartOptions, "backgroundColor"> {
  backgroundColor?: string;
}

type ChartCardProps = {
  data: any[];
  title: string;
  chartType: GoogleChartWrapperChartType;
  options?: AdditionalGoogleChartOptions;
  className?: string;
};

export default function ChartCard({
  data,
  title,
  chartType,
  options,
  className,
}: ChartCardProps) {
  const { windowDimension } = useWindowDimension();
  const graph_id = `${title}${chartType}`;
  const defaultOptions: AdditionalGoogleChartOptions = {
    title,
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
  };

  const { titleTextStyle, hAxis, vAxis, ...restOptions } =
    options || defaultOptions;

  return (
    <Paper className={"rounded-3xl overflow-hidden " + className}>
      <Chart
        key={`${windowDimension.width}${title}${chartType}`}
        chartType={chartType}
        data={data}
        options={{
          title,
          titleTextStyle: {
            color: "white",
            fontSize: 18,
            ...titleTextStyle,
          },
          hAxis: {
            titleTextStyle: { color: "white" },
            textStyle: { color: "white" },
            ...hAxis,
          },
          vAxis: {
            title: "Activity",
            titleTextStyle: { color: "white" },
            textStyle: { color: "white" },
            ...vAxis,
          },
          legend: {
            position: "none",
          },
          backgroundColor: blueGrey[900],
          ...restOptions,
        }}
        graph_id={graph_id}
        width="100%"
        height="300px"
      />
    </Paper>
  );
}
