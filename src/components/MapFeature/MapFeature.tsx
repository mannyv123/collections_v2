import useMarkersData from "../../lib/hooks/useMarkersData";
import MapUI from "../MapUI/MapUI";
import "./MapFeature.scss";
import { useEffect, useRef, useState } from "react";
import { ViewStateChangeEvent } from "react-map-gl";

function MapFeature() {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const [viewState, setViewState] = useState({
      latitude: 49.285283,
      longitude: -123.115044,
      zoom: 2,
   });

   const handleViewChange = (e: ViewStateChangeEvent) => {
      setViewState(e.viewState);
   };

   //Check size of window
   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   //If window size less than 768px, render smaller zoom
   useEffect(() => {
      if (screenWidth <= 768) {
         setViewState({ ...viewState, zoom: 0.5 });
      }
   }, [screenWidth]);

   //Geolocate Controls
   const geoControlRef = useRef<mapboxgl.GeolocateControl>(null);
   useEffect(() => {
      // Activate as soon as the control is loaded
      geoControlRef.current?.trigger();
   }, [geoControlRef.current]);

   const { markers } = useMarkersData();

   return (
      <div className='map-container'>
         <MapUI
            viewState={viewState}
            handleViewChange={handleViewChange}
            geoControlRef={geoControlRef}
            imagePoints={markers}
         />
      </div>
   );
}

export default MapFeature;
