import React from "react";
import TemplatesHeader from "./TemplatesHeader";
import TemplateList from "../TemplateList";
import { data } from "../../temp_db/templates";

export default function TemplatesSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <TemplatesHeader className="flex flex-row w-full justify-between items-center mb-6" />

      <TemplateList templates={data} />
    </div>
  );
}
