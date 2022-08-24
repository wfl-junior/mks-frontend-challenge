import type { TypedUseSelectorHook } from "react-redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useDispatch: () => AppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
