import { Badge, Card, Group, Text, Space } from "@mantine/core";
import React from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import DockIcon from "@mui/icons-material/Dock";

const formatDistance = (distance) => {
  if (distance < 1) {
    return `${(distance * 1000).toFixed(0)}m`;
  }
  return `${distance.toFixed(1)}km`;
};

const Station = ({ station }) => {
  return (
    <Card>
      <Group>
        <Text>{station.name}</Text>
        <Text size="sm">{formatDistance(station.distance)} away</Text>
      </Group>
      <Space h="sm" />
      <Group>
        <Badge
          size="lg"
          leftSection={<PedalBikeIcon />}
          styles={() => ({ leftSection: { alignSelf: "baseline" } })}
        >
          {station.num_bikes_available_types.mechanical}
        </Badge>
        <Badge
          size="lg"
          leftSection={<ElectricBikeIcon />}
          styles={() => ({ leftSection: { alignSelf: "baseline" } })}
        >
          {station.num_bikes_available_types.ebike}
        </Badge>
        <Badge
          size="lg"
          leftSection={<DockIcon />}
          styles={() => ({ leftSection: { alignSelf: "baseline" } })}
        >
          {station.num_docks_available}
        </Badge>
      </Group>
    </Card>
  );
};

export default Station;
