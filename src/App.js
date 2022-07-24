import { Stack, Text } from "@mantine/core";
import "./App.css";
import Header from "./components/Header";
import Station from "./components/Station";
import sampleResponse from "./stories/sampleResponse.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Text>Showing you 5 closes bike share stations:</Text>
      <Stack>
        {sampleResponse.map((station) => {
          return <Station station={station} />;
        })}
      </Stack>
    </div>
  );
}

export default App;
