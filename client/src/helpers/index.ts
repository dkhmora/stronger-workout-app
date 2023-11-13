import moment from "moment";

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
