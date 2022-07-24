import React from "react";
import { Group, Title } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  padding: 1rem;
  color: white;
  background-color: #006747;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Group position="apart">
        <Title order={3}>Bike Finder</Title>
        <SearchIcon />
      </Group>
    </StyledHeader>
  );
};

export default Header;
