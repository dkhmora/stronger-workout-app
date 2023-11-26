import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "./DataTable";
import { data } from "../temp_db/exercises";
import { ExerciseColumn } from "../interfaces";

test("renders data table", () => {
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

  render(<DataTable columns={columns} rows={data} />);

  const tableHeader = (text: string) =>
    screen.getAllByText(new RegExp(text, "i"))[0] as HTMLTableCellElement;

  columns.forEach((item) =>
    expect(tableHeader(item.label)).toBeInTheDocument()
  );

  const tableFooter = screen.getByText(/Rows per page:/i);

  expect(tableFooter).toBeInTheDocument();
});
