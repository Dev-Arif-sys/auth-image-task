import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import locationApi from "../../../app/locationApi";
import { COLORS } from "../../../theme";

const ShowLocation = ({ coords, navError }) => {
  const [currentLocation, setCurrentLocation] = useState({});

  const getLocation = async () => {
    const response = await locationApi.get("/geolocationapi", {
      params: { lat: coords.lat, lng: coords.long },
    });

    setCurrentLocation(response.data.Results[0]);
  };

  useEffect(() => {
    if (coords.lat && coords.long) {
    getLocation();
    }
  }, [coords]);
  return (
    <Box
      sx={{
        maxWidth: "480px",
        width: "85%",
        margin: "0 auto",
        border: `3px solid ${COLORS.secondary}`,
        mt: 2,
        padding: "10px 7px",
        borderRadius: "6px",
      }}
    >
      {navError && (
        <Typography
          sx={{
            textAlign: "center",
          }}
          color={COLORS.black}
        >
          {navError}
        </Typography>
      )}

      {currentLocation.city && (
        <Typography
          sx={{
            textAlign: "center",
          }}
          color={COLORS.black}
        >
          You are from{" "}
          <span style={{ fontWeight: "bold" }}>
            {currentLocation.city},{currentLocation.country}{" "}
          </span>
        </Typography>
      )}
      
    </Box>
  );
};

export default ShowLocation;
