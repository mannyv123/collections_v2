import { useEffect, useRef, useState } from "react";
import "./MapUI.scss";
import Map, { GeolocateControl } from "react-map-gl";

function MapUI() {
   const [viewState, setViewState] = useState({
      latitude: 49.285283,
      longitude: -123.115044,
      zoom: 2,
   });

   const geoControlRef = useRef<mapboxgl.GeolocateControl>(null);

   useEffect(() => {
      // Activate as soon as the control is loaded
      geoControlRef.current?.trigger();
   }, [geoControlRef.current]);

   return (
      <div className='map'>
         <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: "100%", height: "100%" }}
            mapStyle='mapbox://styles/mapbox/light-v10'
            projection={{ name: "globe" }}
         >
            <GeolocateControl
               ref={geoControlRef}
               showUserLocation={true}
               fitBoundsOptions={{ maxZoom: 2 }}
               style={{ position: "absolute", top: "5rem", right: "3rem", margin: 0 }}
            />
         </Map>
      </div>
   );
}

export default MapUI;
