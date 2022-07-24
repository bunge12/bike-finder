import React from "react";
import { Group, Title } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div>
      <Group position="apart">
        <Title order={3}>Bike Finder</Title>
        <SearchIcon />
      </Group>
    </div>
  );
};

export default Header;
