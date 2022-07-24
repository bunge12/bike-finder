import { Button, Card, Chip, Chips, Grid, Text } from "@mantine/core";
import React, { useState } from "react";
import QuantityInputs from "./QuantityInputs";
const DEFAULT_STATIONS = 5;
const DEFAULT_QUANTITY = 2;

const Search = () => {
  const [stations, setStations] = useState(DEFAULT_STATIONS);
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
  const [item, setItem] = useState("bikes");
  return (
    <Card>
      <Grid align="center" gutter="lg">
        <Grid.Col span={3}>
          <Text>Search for</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <QuantityInputs />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>closest stations</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>with at least</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <QuantityInputs
            onValueChange={setQuantity}
            startingValue={DEFAULT_QUANTITY}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>available</Text>
        </Grid.Col>
        <Grid.Col
          span={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Chips
            align="center"
            multiple={false}
            value={item}
            onChange={setItem}
          >
            <Chip value="bikes">bikes</Chip>
            <Chip value="e-bikes">e-bikes</Chip>
            <Chip value="docks">docks</Chip>
          </Chips>
        </Grid.Col>
        <Grid.Col span={12} style={{ display: "flex" }}>
          <Button color="bike-share" style={{ flex: 1 }}>
            Search for 2 stations with {quantity} {item}
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default Search;
