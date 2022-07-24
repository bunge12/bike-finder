import React, { useEffect, useState } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";
import "./App.css";
import Header from "./components/Header";
import Station from "./components/Station";
import sampleResponse from "./stories/sampleResponse.json";
import Search from "./components/Search";

function App() {
  const [openedSearch, setOpenedSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [stations, setStations] = useState([{}]);
  const handleSearch = (query) => {
    setSearchQuery(query);
    setOpenedSearch(false);
  };

  useEffect(() => {
    console.log("fetch data");
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#F8F8F8" }}>
      <Header onSearchClick={() => setOpenedSearch(true)} />
      <Text size="sm" style={{ padding: "0.5rem", marginTop: "1rem" }}>
        Showing 5 closest bike share stations
      </Text>
      <Stack
        spacing="xs"
        style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
      >
        {stations.map((station, i) => {
          return <Station key={i} station={station} />;
        })}
        <Text size="sm">Alternatively, you can</Text>
        <Button
          color="bike-share"
          variant="outline"
          uppercase
          onClick={() => setOpenedSearch(true)}
        >
          search for a station
        </Button>
      </Stack>
      <Modal
        centered
        opened={openedSearch}
        onClose={() => setOpenedSearch(false)}
      >
        <Search onSearch={handleSearch} />
      </Modal>
    </div>
  );
}

export default App;
