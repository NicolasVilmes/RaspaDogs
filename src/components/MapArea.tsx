import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type Props = {
  width: string;
  heigth: string;
};

export const MapArea = ({ width, heigth }: Props) => {
  const chiche = { lat: 8.993876, lng: -79.510818 };
  const petopia = { lat: 9.000797, lng: -79.496968 };
  const puppy = { lat: 9.005913, lng: -79.572969 };
  const perro = { lat: 8.987592, lng: -79.508121 };
  const animal = { lat: 8.98422, lng: -79.574033 };
  const pet = { lat: 8.92221, lng: -79.697237 };
  const oeste = { lat: 8.945707, lng: -79.680833 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0rG_aRoHyMBQTrDCnG-EN9fxm1hhni_U",
  });
  return (
    <div style={{ width: width, height: heigth }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: 8.956098,
            lng: -79.590175,
          }}
          zoom={12}
        >
          <Marker position={chiche} />
          <Marker position={petopia} />
          <Marker position={puppy} />
          <Marker position={perro} />
          <Marker position={animal} />
          <Marker position={pet} />
          <Marker position={oeste} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
