import { Block, Typography } from "../../components";
import { THEME } from "../../theme/theme";

const { colors } = THEME;

export const TeamsScreen = () => {
  return (
    <Block flex={1} bg={THEME.colors.base.gray[600]}>
      <Typography color={colors.base.white}>Teams Screen</Typography>
    </Block>
  );
};
