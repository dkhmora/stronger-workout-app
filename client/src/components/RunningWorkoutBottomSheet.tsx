import Sheet, { SheetRef } from "react-modal-sheet";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import { useRef } from "react";
import { Typography } from "@mui/material";

export default function RunningWorkoutBottomSheet() {
  const currentWorkout = useSelector(
    (state: RootState) => state.currentWorkout
  );
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <Sheet
      isOpen={currentWorkout !== null}
      ref={ref}
      initialSnap={0}
      onClose={() => snapTo(1)}
      snapPoints={[1, 80]}
      disableScrollLocking
      className="mb-[56px] sm:mb-0"
    >
      <Sheet.Container>
        <Sheet.Header />

        <Sheet.Content className="flex text-center">
          <Typography>Running Workout</Typography>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
