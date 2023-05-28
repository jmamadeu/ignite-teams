import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { TeamsLogoSVG } from "../../assets/teams";
import { Block, Button, Typography } from "../../components";

import { useTeams } from "../../services/storage/use-teams";
import { THEME } from "../../theme/theme";

const { colors } = THEME;

export const TeamsScreen = () => {
  const { navigate } = useNavigation();
  const { teams, retry } = useTeams();

  useFocusEffect(() => {
    retry();
  });

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

        {teams?.length ? (
          <Block gap={10}>
            {teams?.map((team) => (
              <Block teamCard key={team.id}>
                <TeamsLogoSVG />
                <Typography fontSize={18} color={colors.base.white}>
                  {team.name}
                </Typography>
              </Block>
            ))}
          </Block>
        ) : (
          <Block justifyContent="center" alignItems="center">
            <Typography color="white" fontSize={16}>
              there's no team, add new one
            </Typography>
          </Block>
        )}
      </Block>

      <Button
        standard
        onPress={() => {
          navigate("NewTeam");
        }}
      >
        Add new team
      </Button>
    </Block>
  );
};
