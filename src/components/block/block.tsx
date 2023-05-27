import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { THEME } from "../../theme/theme";

type BlockProps = ViewProps & {
  children?: React.ReactNode;
  flex?: ViewStyle["flex"];
  bg?: ViewStyle["backgroundColor"];
  backgroundColor?: ViewStyle["backgroundColor"];
  container?: boolean;
  alignItems?: ViewStyle["alignItems"];
  justifyContent?: ViewStyle["justifyContent"];
  gap?: ViewStyle["gap"];
  h?: ViewStyle["height"];
  height?: ViewStyle["height"];
  paddingLeft?: ViewStyle["paddingLeft"];
  pl?: ViewStyle["paddingLeft"];
  radius?: ViewStyle["borderRadius"];
  teamCard?: boolean;
  row?: boolean;
  px?: ViewStyle["paddingHorizontal"];
  paddingHorizontal?: ViewStyle["paddingHorizontal"];
};

const { colors } = THEME;

export const Block: React.FC<BlockProps> = ({
  flex,
  backgroundColor,
  bg,
  container,
  alignItems,
  justifyContent,
  gap,
  h,
  height,
  pl,
  paddingLeft,
  radius,
  teamCard,
  row,
  px,
  paddingHorizontal,
  ...props
}) => {
  const blockStyle = StyleSheet.flatten<ViewStyle>([
    flex !== undefined && {
      flex,
    },
    (backgroundColor || bg) !== undefined && {
      backgroundColor: backgroundColor ?? bg,
    },
    container !== undefined && {
      paddingHorizontal: 24,
      paddingVertical: 64,
    },
    alignItems !== undefined && {
      alignItems,
    },
    justifyContent !== undefined && {
      justifyContent,
    },
    gap !== undefined && {
      gap,
    },
    (height || h) !== undefined && {
      height: height ?? h,
    },
    (pl || paddingLeft) !== undefined && {
      paddingLeft: paddingLeft ?? pl,
    },
    radius !== undefined && {
      borderRadius: radius,
    },
    teamCard !== undefined && {
      borderRadius: 6,
      paddingLeft: 30,
      height: 70,
      alignItems: "center",
      gap: 20,
      backgroundColor: colors.base.gray[500],
      flexDirection: "row",
    },
    row && {
      flexDirection: "row",
    },
    (px || paddingHorizontal) !== undefined && {
      paddingHorizontal: paddingHorizontal ?? px,
    },
  ]);

  return <View style={blockStyle} {...props} />;
};
