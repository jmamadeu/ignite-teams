import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEAMS_KEY } from "./storage-keys";

export const addNewTeam = async (params: Module.Team.AddTeamParams) => {
  try {
    const response = await AsyncStorage.getItem(TEAMS_KEY);
    const oldTeams = response ? JSON.parse(response) : [];

    const team = {
      ...params,
      id: new Date().toISOString(),
    };

    const teams = [...oldTeams, team];

    console.log({ teams });

    await AsyncStorage.setItem(TEAMS_KEY, JSON.stringify(teams));
  } catch (e) {
    console.log(e);
  }
};
