import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TEAMS_KEY } from "./storage-keys";

export const useTeams = () => {
  const { getItem } = useAsyncStorage(TEAMS_KEY);
  const [value, setValue] = useState<Array<Module.Team.Type>>([]);

  const readItemFromStorage = async () => {
    const item = await getItem();

    setValue(JSON.parse(item));
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  function retry() {
    readItemFromStorage();
  }

  return {
    teams: value,
    retry,
  };
};
