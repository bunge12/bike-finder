import { Card, Paper } from "@mantine/core";
import React from "react";

const Station = ({ station }) => {
  return <Card>{station.name}</Card>;
};

export default Station;
