import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = TextProps & {
  children: React.ReactNode;
  color?: TextStyle["color"];
};

export const Typography: React.FC<TypographyProps> = ({
  color,
  children,
  ...props
}) => {
  const textStyle = StyleSheet.flatten([
    color !== undefined && {
      color,
    },
  ]);

  return (
    <Text
      allowFontScaling={true}
      adjustsFontSizeToFit={false}
      maxFontSizeMultiplier={1.2}
      style={textStyle}
      {...props}
    >
      {children}
    </Text>
  );
};
