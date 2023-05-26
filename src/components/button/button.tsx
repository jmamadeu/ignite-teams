import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme/theme";
import { Typography } from "../typography/typography";

type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode | string;
  standard?: boolean;
};

const { colors } = THEME;

export const Button: React.FC<ButtonProps> = ({
  children,
  standard,
  ...props
}) => {
  const buttonStyles = StyleSheet.flatten<ViewStyle>([
    standard !== undefined && {
      backgroundColor: colors.product.green[700],
      height: 56,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
  ]);

  const textStyles = StyleSheet.flatten<TextStyle>([
    standard !== undefined && {
      color: colors.base.white,
      fontSize: 16,
      fontWeight: "600",
    },
  ]);

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.8} {...props}>
      {typeof children === "string" ? (
        <Typography style={textStyles}>{children}</Typography>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
