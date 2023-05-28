import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainLogoSVG } from "../assets/logo";
import { NewTeamScreen, PlayersScreen, TeamsScreen } from "../screens";
import { THEME } from "../theme/theme";

const { colors } = THEME;

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.base.gray[600],
          },
          headerShadowVisible: false,

          contentStyle: {
            backgroundColor: colors.base.gray[600],
          },
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: () => <MainLogoSVG />,
          }}
          name="Teams"
          component={TeamsScreen}
        />

        <Stack.Screen
          options={{
            headerRight: () => <MainLogoSVG />,
            headerBackTitleVisible: false,
            title: "",
          }}
          name="NewTeam"
          component={NewTeamScreen}
        />

        <Stack.Screen
          options={{
            headerRight: () => <MainLogoSVG />,
            headerBackTitleVisible: false,
            title: "",
          }}
          name="Players"
          component={PlayersScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
