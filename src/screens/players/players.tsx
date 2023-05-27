import { Entypo } from "@expo/vector-icons";
import { Block, Button, Input, PlayerCard, Typography } from "../../components";
import { THEME } from "../../theme/theme";

const { colors } = THEME;

export const PlayersScreen = () => {
  return (
    <Block container justifyContent="space-between" flex={1}>
      <Block gap={32}>
        <Block justifyContent="center" alignItems="center" gap={10}>
          <Typography fontSize={24} weight="700" color={colors.base.white}>
            Group #1
          </Typography>
          <Typography color={colors.base.gray[300]} fontSize={16}>
            Create new players and add them to the teams
          </Typography>
        </Block>

        <Input
          placeholder="Player name"
          right={
            <Entypo
              name="plus"
              size={24}
              color={THEME.colors.product.green[700]}
            />
          }
        />

        <Block row gap={20} alignItems="center">
          <Button team>Team A</Button>
          <Button team={false}>Team B</Button>
        </Block>

        <Block>
          <PlayerCard />
        </Block>
      </Block>

      <Button standard bg={colors.product.redDark}>
        Remove team
      </Button>
    </Block>
  );
};
