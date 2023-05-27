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
  team?: boolean;
  bg?: ViewStyle["backgroundColor"];
};

const { colors } = THEME;

export const Button: React.FC<ButtonProps> = ({
  children,
  standard,
  team,
  bg,
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
    team && {
      borderColor: colors.product.green[700],
      borderWidth: 1,
      borderRadius: 4,
    },
    bg !== undefined && {
      backgroundColor: bg,
    },
  ]);

  const textStyles = StyleSheet.flatten<TextStyle>([
    standard !== undefined && {
      color: colors.base.white,
      fontSize: 16,
      fontWeight: "600",
    },
    team === false && {
      color: colors.base.gray[300],
      fontSize: 14,
      fontWeight: "700",
    },
    team && {
      color: colors.base.white,
      fontSize: 14,
      fontWeight: "700",
      paddingVertical: 8,
      paddingHorizontal: 10,
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
