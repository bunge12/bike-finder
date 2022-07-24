import { Button, Card, Chip, Chips, Grid, Text } from "@mantine/core";
import React, { useState } from "react";
import QuantityInputs from "./QuantityInputs";
const DEFAULT_STATIONS = 5;
const DEFAULT_QUANTITY = 2;

const Search = ({ onSearch }) => {
  const [stations, setStations] = useState(DEFAULT_STATIONS);
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
  const [item, setItem] = useState("bikes");
  return (
    <Grid align="center" gutter="lg" justify="center">
      <Grid.Col span={4}>
        <Text>Search for</Text>
      </Grid.Col>
      <Grid.Col span={5}>
        <QuantityInputs
          onValueChange={setStations}
          startingValue={DEFAULT_STATIONS}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Text align="center">closest stations with at least</Text>
      </Grid.Col>

      <Grid.Col span={5}>
        <QuantityInputs
          onValueChange={setQuantity}
          startingValue={DEFAULT_QUANTITY}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Text>available</Text>
      </Grid.Col>
      <Grid.Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Chips align="center" multiple={false} value={item} onChange={setItem}>
          <Chip value="bikes">bikes</Chip>
          <Chip value="e-bikes">e-bikes</Chip>
          <Chip value="docks">docks</Chip>
        </Chips>
      </Grid.Col>
      <Grid.Col span={12} style={{ display: "flex" }}>
        <Button
          color="bike-share"
          style={{ flex: 1 }}
          onClick={() => onSearch({ stations, quantity, item })}
        >
          Search for {stations} stations with {quantity} {item}
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default Search;
