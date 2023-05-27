import { AntDesign, Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme/theme";
import { Block } from "../block/block";
import { Typography } from "../typography/typography";

export const PlayerCard = () => {
  return (
    <Block
      bg={THEME.colors.base.gray[500]}
      h={54}
      justifyContent="space-between"
      row
      alignItems="center"
      px={20}
      radius={6}
    >
      <Block row gap={10} alignItems="center">
        <Ionicons name="person" size={24} color={THEME.colors.base.gray[200]} />
        <Typography color={THEME.colors.base.gray[200]} fontSize={16}>
          Mateus Alexandre
        </Typography>
      </Block>
      <AntDesign name="close" size={24} color={THEME.colors.product.redDark} />
    </Block>
  );
};
