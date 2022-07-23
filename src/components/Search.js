import {
  Button,
  Card,
  Chip,
  Chips,
  Grid,
  NumberInput,
  Text,
} from "@mantine/core";
import React from "react";

const Search = () => {
  return (
    <Card>
      <Grid align="center" gutter="lg">
        <Grid.Col span={4}>
          <Text>Search for</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput defaultValue={5}></NumberInput>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>closest</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text>stations with at least</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <NumberInput defaultValue={2}></NumberInput>
        </Grid.Col>
        <Grid.Col
          span={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Chips align="center">
            <Chip value="react">bikes</Chip>
            <Chip value="ng">e-bikes</Chip>
            <Chip value="svelte">docks</Chip>
          </Chips>
        </Grid.Col>
        <Grid.Col span={12} style={{ display: "flex" }}>
          <Button style={{ flex: 1 }}>Search</Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default Search;
