import { Badge, Card, Group, Paper, Text } from "@mantine/core";
import React from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import styled from "@emotion/styled";

const Station = ({ station }) => {
  return (
    <Card>
      <Text>{station.name}</Text>
      <Group>
        <Badge
          size="lg"
          leftSection={<PedalBikeIcon />}
          styles={() => ({ leftSection: { alignSelf: "baseline" } })}
        >
          15
        </Badge>
        <Badge>15</Badge>
        <Badge>15</Badge>
      </Group>
    </Card>
  );
};

export default Station;
