import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Block, Button, Input, Typography } from "../../components";

import { useState } from "react";
import { addNewTeam } from "../../services/storage/add-new-team";
import { THEME } from "../../theme/theme";

export const NewTeamScreen = () => {
  const { navigate } = useNavigation();

  const [teamName, setTeamName] = useState("");
  const [saving, setSaving] = useState(false);

  const handleCreateTeam = async () => {
    if (!teamName) return;
    setSaving(true);
    await addNewTeam({ name: teamName });
    setSaving(false);
    setTeamName("");
    navigate("Players");
  };

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
        <Input
          placeholder="Team name"
          value={teamName}
          autoFocus
          onChangeText={setTeamName}
        />
        <Button standard onPress={handleCreateTeam}>
          {saving ? "Adding..." : "Add"}
        </Button>
      </Block>
    </Block>
  );
};
