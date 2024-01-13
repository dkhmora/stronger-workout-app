import React from "react";
import QuickStartSection from "./QuickStartSection";
import TemplatesSection from "./TemplatesSection";

export default function StartWorkoutMainSection() {
  return (
    <div className="my-6">
      <QuickStartSection />

      <TemplatesSection />
    </div>
  );
}
