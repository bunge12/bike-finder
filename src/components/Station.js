import { Badge, Card, Group, Paper, Text } from "@mantine/core";
import React from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";

const Station = ({ station }) => {
  return (
    <Card>
      <Text>{station.name}</Text>
      <Group>
        <Badge
          size="lg"
          leftSection={<PedalBikeIcon sx={{ alignSelf: "baseline" }} />}
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
