import Sheet from "react-modal-sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  SET_RUNNING_WORKOUT_BOTTOM_SHEET_OPEN,
} from "../store/general";

export default function RunningWorkoutBottomSheet() {
  const open = useSelector(
    (state: RootState) => state.runningWorkoutBottomSheetOpen
  );
  const dispatch = useDispatch();

  return (
    <Sheet
      isOpen={open}
      onClose={() => dispatch(SET_RUNNING_WORKOUT_BOTTOM_SHEET_OPEN(false))}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
