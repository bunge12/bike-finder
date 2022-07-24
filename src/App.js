import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Skeleton,
  Stack,
  Text,
  Notification,
} from "@mantine/core";
import "./App.css";
import Header from "./components/Header";
import Station from "./components/Station";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [openedSearch, setOpenedSearch] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    stations: 5,
    quantity: 0,
    item: "bikes",
  });
  const [stations, setStations] = useState([]);
  const [notification, setNotification] = useState();
  const handleSearch = (query) => {
    setSearchQuery(query);
    setOpenedSearch(false);
  };

  useEffect(() => {
    setStations([]);
    setNotification();
    lat &&
      lng &&
      axios
        .post(`${process.env.REACT_APP_API_ROUTE}/api/stations`, {
          ...searchQuery,
          lat,
          lng,
        })
        .then((res) => {
          if (res.status === 200) {
            setStations(res.data);
          }
          if (res.status === 204) {
            setNotification({
              text: "Your search returned no results. Please modify your search and try again.",
            });
          }
        })
        .catch(() => {
          setNotification({
            color: "red",
            text: "There was an error processing your request. Please try again.",
          });
        });
  }, [searchQuery, lat, lng]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setNotification({
        color: "red",
        text: "Geolocation is not supported by your browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setNotification({
            color: "red",
            text: "Unable to retrieve your location",
          });
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#F8F8F8" }}>
      <Header onSearchClick={() => setOpenedSearch(true)} />
      <Text
        size="sm"
        align="center"
        style={{ padding: "0.5rem", marginTop: "1rem" }}
      >
        {stations.length > 0 ? (
          <>Showing {stations.length} closest bike share stations:</>
        ) : (
          !notification && (
            <Skeleton
              width="75%"
              height="1.25rem"
              style={{ margin: "0px auto" }}
            />
          )
        )}
      </Text>
      <Stack
        spacing="xs"
        style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
      >
        {stations.map((station, i) => {
          return <Station key={i} station={station} />;
        })}
        {stations.length === 0 && !notification && (
          <>
            <Station key={1} />
            <Station key={2} />
            <Station key={3} />
            <Station key={4} />
            <Station key={5} />
          </>
        )}
        {notification && (
          <Notification
            disallowClose
            color={notification.color}
            style={{ textAlign: "left", marginBottom: "2rem" }}
          >
            {notification.text}
          </Notification>
        )}
        {!notification && <Text size="sm">Alternatively, you can</Text>}
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
        <Search onSearch={handleSearch} searchQuery={searchQuery} />
      </Modal>
    </div>
  );
}

export default App;
