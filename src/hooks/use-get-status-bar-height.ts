import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useGetStatusBarHeight = () => {
  const insets = useSafeAreaInsets();

  return insets.top;
};
