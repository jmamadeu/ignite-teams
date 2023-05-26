import { MainLogoSVG } from "../../assets/logo";
import { TeamsLogoSVG } from "../../assets/teams";
import { Block, Button, Typography } from "../../components";
import { THEME } from "../../theme/theme";

const { colors } = THEME;

export const TeamsScreen = () => {
  return (
    <Block
      container
      flex={1}
      justifyContent="space-between"
      bg={colors.base.gray[600]}
    >
      <Block gap={40}>
        <Block alignItems="center" gap={8}>
          <MainLogoSVG />
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

      <Button standard>Add new team</Button>
    </Block>
  );
};
