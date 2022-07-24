import React, { useState } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";
import "./App.css";
import Header from "./components/Header";
import Station from "./components/Station";
import sampleResponse from "./stories/sampleResponse.json";
import Search from "./components/Search";

function App() {
  const [openedSearch, setOpenedSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  return (
    <div className="App">
      <Header />
      <Text size="sm" style={{ padding: "0.5rem", marginTop: "1rem" }}>
        Showing 5 closest bike share stations
      </Text>
      <Stack
        spacing="sm"
        style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
      >
        {sampleResponse.map((station, i) => {
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
      <Modal opened={openedSearch} onClose={() => setOpenedSearch(false)}>
        <Search onSearch={setSearchQuery} />
      </Modal>
    </div>
  );
}

export default App;
