import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TeamsLogoSVG } from "../../assets/teams";
import { Block, Button, Typography } from "../../components";
import { StackParamsList } from "../../routes/router";
import { THEME } from "../../theme/theme";

const { colors } = THEME;

type TeamsScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  "Teams"
>;

export const TeamsScreen = () => {
  const { push } = useNavigation<TeamsScreenNavigationProp>();

  return (
    <Block container flex={1} justifyContent="space-between">
      <Block gap={40}>
        <Block alignItems="center" gap={8}>
          <Typography weight="700" fontSize={24} color={colors.base.white}>
            Teams
          </Typography>
          <Typography fontSize={16} color={colors.base.gray[300]}>
            play with your teams
          </Typography>
        </Block>

        <Block gap={10}>
          <Block teamCard>
            <TeamsLogoSVG />
            <Typography fontSize={18} color={colors.base.white}>
              Team name #1
            </Typography>
          </Block>

          <Block teamCard>
            <TeamsLogoSVG />
            <Typography fontSize={18} color={colors.base.white}>
              Team name #2
            </Typography>
          </Block>

          <Block teamCard>
            <TeamsLogoSVG />
            <Typography fontSize={18} color={colors.base.white}>
              Team name #3``
            </Typography>
          </Block>
        </Block>
      </Block>

      <Button
        standard
        onPress={() => {
          push("NewTeam");
        }}
      >
        Add new team
      </Button>
    </Block>
  );
};
