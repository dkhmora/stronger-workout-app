import { TemplateData } from "../interfaces";
import { WorkoutExercises } from "../types";

function createData(
  title: string,
  exercises: WorkoutExercises[]
): TemplateData {
  return {
    title,
    exercises,
  };
}

export const data = [
  createData("Leg Day", [
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
  ]),
  createData("Leg Day", [
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
  ]),
  createData("Leg Day", [
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
  ]),
  createData("Leg Day", [
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
  ]),
  createData("Leg Day", [
    {
      exerciseData: {
        id: 1,
        title: "Squat",
        type: "Barbell",
        description: "Squat Description",
        userCreated: false,
        weightUnit: "lb",
      },
      sets: [
        {
          numberOfReps: 6,
          weight: 100,
          personalRecord: true,
        },
      ],
    },
  ]),
];
