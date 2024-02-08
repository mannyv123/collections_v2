import { useEffect, useRef, useState } from "react";
import "./MapUI.scss";
import Map, { GeolocateControl } from "react-map-gl";

function MapUI() {
   const [viewState, setViewState] = useState({
      latitude: 49.285283,
      longitude: -123.115044,
      zoom: 2,
   });

   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (screenWidth <= 768) {
         setViewState({ ...viewState, zoom: 0.5 });
      }
   }, [screenWidth]);

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
               style={{ marginRight: "3rem" }}
               position='bottom-right'
            />
         </Map>
      </div>
   );
}

export default MapUI;
