import { Stack, Text } from "@mantine/core";
import "./App.css";
import Header from "./components/Header";
import Station from "./components/Station";
import sampleResponse from "./stories/sampleResponse.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Text size="small" style={{ padding: "0.5rem" }}>
        Showing 5 closest bike share stations:
      </Text>
      <Stack
        spacing="sm"
        style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
      >
        {sampleResponse.map((station, i) => {
          return <Station key={i} station={station} />;
        })}
      </Stack>
    </div>
  );
}

export default App;
