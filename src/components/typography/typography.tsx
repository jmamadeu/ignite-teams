import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = TextProps & {
  children: React.ReactNode;
  color?: TextStyle["color"];
  fontSize?: TextStyle["fontSize"];
  weight?: TextStyle["fontWeight"];
};

export const Typography: React.FC<TypographyProps> = ({
  color,
  children,
  fontSize,
  weight,
  ...props
}) => {
  const textStyle = StyleSheet.flatten<TextStyle>([
    color !== undefined && {
      color,
    },
    fontSize !== undefined && {
      fontSize,
    },
    weight !== undefined && {
      fontWeight: weight,
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
