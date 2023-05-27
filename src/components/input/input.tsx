import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { THEME } from "../../theme/theme";

type InputProps = TextInputProps & {
  right?: React.ReactNode;
};

const { colors } = THEME;

export const Input: React.FC<InputProps> = ({ right, ...props }) => {
  const inputStyles = StyleSheet.flatten<TextStyle>([
    {
      fontSize: 16,
      paddingLeft: 16,
      color: colors.base.white,
      flex: 1,
      height: 56,
    },
  ]);

  const styles = StyleSheet.create({
    inputContainer: {
      borderRadius: 6,
      height: 56,
      backgroundColor: THEME.colors.base.gray[700],
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={colors.base.gray[300]}
        style={[inputStyles]}
        {...props}
      />

      {right ? <View style={{ marginRight: 20 }}>{right}</View> : null}
    </View>
  );
};
