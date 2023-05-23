import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type BlockProps = ViewProps & {
  children?: React.ReactNode;
  flex?: ViewStyle["flex"];
  bg?: ViewStyle["backgroundColor"];
  backgroundColor?: ViewStyle["backgroundColor"];
};

export const Block: React.FC<BlockProps> = ({
  flex,
  backgroundColor,
  bg,
  ...props
}) => {
  const blockStyle = StyleSheet.flatten<ViewStyle>([
    flex !== undefined && {
      flex,
    },
    (backgroundColor || bg) !== undefined && {
      backgroundColor: backgroundColor ?? bg,
    },
  ]);

  return <View style={blockStyle} {...props} />;
};
