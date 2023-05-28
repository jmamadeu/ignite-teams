declare namespace Module {
  declare namespace Team {
    type Type = {
      id: string;
      name: string;
      players?: Array<Player>;
    };

    type Player = {
      id: string;
      name: string;
    };

    type AddTeamParams = Pick<Type, "name">;
  }
}
