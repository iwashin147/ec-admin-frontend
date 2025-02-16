import type { AppDispatch, AppStore, RootState } from "@/store/store";
import { useDispatch, useSelector, useStore } from "react-redux";

/**
 * dispatchを取得するhooks
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * セレクタを取得するhooks
 * なるべくsliceにselectorsしてselectorに渡すようにする
 */
export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * storeを取得するhooks
 */
export const useAppStore = useStore.withTypes<AppStore>();
