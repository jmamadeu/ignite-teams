import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "react-native";
import { Block, Button, Input, Typography } from "../../components";
import { StackParamsList } from "../../routes/router";
import { THEME } from "../../theme/theme";

type NavigationProps = NativeStackNavigationProp<StackParamsList, "NewTeam">;

export const NewTeamScreen = () => {
  const { push } = useNavigation<NavigationProps>();

  return (
    <Block container gap={34} flex={1}>
      <Block alignItems="center" gap={18}>
        <Image source={require("../../assets/teams-groups/group.png")} />
        <Block alignItems="center" gap={8}>
          <Typography
            weight="700"
            fontSize={24}
            color={THEME.colors.base.white}
          >
            New team
          </Typography>
          <Typography fontSize={16} color={THEME.colors.base.gray[300]}>
            create a new team to add players
          </Typography>
        </Block>
      </Block>

      <Block gap={20}>
        <Input placeholder="Team name" />
        <Button
          standard
          onPress={() => {
            push("Players");
          }}
        >
          Add
        </Button>
      </Block>
    </Block>
  );
};
