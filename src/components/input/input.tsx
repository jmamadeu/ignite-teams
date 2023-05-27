import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native";
import { THEME } from "../../theme/theme";

type InputProps = TextInputProps & {};

const { colors } = THEME;

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const inputStyles = StyleSheet.flatten<TextStyle>([
    {
      height: 56,
      backgroundColor: THEME.colors.base.gray[700],
      borderRadius: 6,
      fontSize: 16,
      paddingLeft: 16,
      color: colors.base.white,
    },
  ]);

  return (
    <TextInput
      placeholderTextColor={colors.base.gray[300]}
      style={inputStyles}
      {...props}
    />
  );
};
