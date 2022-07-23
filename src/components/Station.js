import { Badge, Card, Group, Text, Space } from "@mantine/core";
import React from "react";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import DockIcon from "@mui/icons-material/Dock";

const Station = ({ station }) => {
  return (
    <Card>
      <Text>
        {station.name} - {station.distance}
      </Text>
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
