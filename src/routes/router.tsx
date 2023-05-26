import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { MainLogoSVG } from "../assets/logo";
import { useGetStatusBarHeight } from "../hooks/use-get-status-bar-height";
import { TeamsScreen } from "../screens";
import { THEME } from "../theme/theme";

type StackParamsList = {
  Teams: undefined;
};

const { colors } = THEME;

const Stack = createNativeStackNavigator<StackParamsList>();

export const Router = () => {
  const STATUS_BAR_HEIGHT = useGetStatusBarHeight();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          contentStyle: {
            backgroundColor: colors.base.gray[600],
          },
          headerTitle: "",

          header: () => (
            <View
              style={{
                paddingTop: STATUS_BAR_HEIGHT,
                backgroundColor: colors.base.gray[600],
                alignItems: "center",
              }}
            >
              <MainLogoSVG />
            </View>
          ),
        }}
        name="Teams"
        component={TeamsScreen}
      />
    </Stack.Navigator>
  );
};
