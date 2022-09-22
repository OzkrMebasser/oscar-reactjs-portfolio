import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../Contact/Contact.css";

export default function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 48.4304753, lng: -123.3605964 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="MYmap"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}