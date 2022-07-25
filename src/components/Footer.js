import React from "react";
import { ActionIcon, Group, Title } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  padding: 1rem;
  color: white;
  background-color: #006747;
`;

const Footer = ({ onSearchClick }) => {
  return (
    <StyledHeader>
      <Group position="apart">
        <Title order={3}>Bike Finder</Title>
        <ActionIcon
          onClick={onSearchClick}
          variant="transparent"
          style={{ color: "white" }}
        >
          <SearchIcon />
        </ActionIcon>
      </Group>
    </StyledHeader>
  );
};

export default Footer;
