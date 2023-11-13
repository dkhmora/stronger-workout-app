import moment from "moment";
import { WeightUnit, WorkoutData } from "../Interfaces";

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

export const getTotalWeight = (workoutData: WorkoutData) => {
  const { exercises } = workoutData;
  const userDefaultUnit = "lb"; // Temporary. TODO: Change to selected user weight in store
  const convertWeight = (weight: number, exerciseUnit: WeightUnit) => {
    if (exerciseUnit === userDefaultUnit) return weight;
    if (userDefaultUnit === "lb") return getLb(weight);
    else return getKg(weight);
  };
  let totalWeight = 0;

  exercises.forEach(({ exerciseData, sets }) => {
    sets.forEach(
      ({ numberOfReps, weight }) =>
        (totalWeight += convertWeight(
          numberOfReps * weight,
          exerciseData.weightUnit
        ))
    );
  });

  return totalWeight;
};
