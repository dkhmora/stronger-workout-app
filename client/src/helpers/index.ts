import moment from "moment";
import { WorkoutData } from "../interfaces";
import { WeightUnit } from "../types";

export const getHumanReadableTime = (timestamp: number) =>
  moment.unix(timestamp).calendar();

export const getDuration = (start: number, end: number) => {
  let readableDuration = "";
  const startMoment = moment.unix(start);
  const endMoment = moment.unix(end);

  // Calculate the duration between the two moments
  const duration = moment.duration(endMoment.diff(startMoment));
  const durationHour = moment.utc(duration.asMilliseconds()).format("H[h]");
  const durationMinutes = moment.utc(duration.asMilliseconds()).format("mm[m]");

  readableDuration = durationMinutes;

  if (durationHour !== "0h") {
    readableDuration = durationHour + " " + readableDuration;
  }

  return readableDuration;
};

export const getKg = (weight: number) => weight / 2.20462262185;
export const getLb = (weight: number) => weight * 2.20462262185;

// Get workout summary (workout duration, total weight lifted, number of PRs)
export const getWorkoutSummary = (workoutData: WorkoutData) => {
  const { exercises, start, end } = workoutData;
  const userDefaultUnit = "lb"; // Temporary. TODO: Change to selected user weight in store
  const convertWeight = (weight: number, exerciseUnit: WeightUnit) => {
    if (exerciseUnit === userDefaultUnit) return weight;
    if (userDefaultUnit === "lb") return getLb(weight);
    else return getKg(weight);
  };
  let totalPersonalRecords = 0;
  let totalWeight = 0;

  exercises.forEach(({ exerciseData, sets }) => {
    sets.forEach(({ numberOfReps, weight, personalRecord }) => {
      totalWeight += convertWeight(
        numberOfReps * weight,
        exerciseData.weightUnit
      );

      if (personalRecord) totalPersonalRecords += 1;
    });
  });

  return {
    duration: getDuration(start, end),
    totalWeight: Math.round(totalWeight),
    totalPersonalRecords,
  };
};
