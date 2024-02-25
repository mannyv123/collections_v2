import useMarkersData from "../../lib/hooks/useMarkersData";
import MapUI from "../MapUI/MapUI";
import PreviewFeature from "../PreviewFeature/PreviewFeature";
import "./MapFeature.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { ViewStateChangeEvent } from "react-map-gl";
import type { MapRef } from "react-map-gl";

function MapFeature() {
   const [selectedCollection, setSelectedCollection] = useState("");
   const [selectedImage, setSelectedImage] = useState<null | string>(null);
   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
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

   const handleMarkerSelect = (collectionId: string, imageId: string) => {
      setSelectedCollection(collectionId);
      setSelectedImage(imageId);
      setIsPreviewOpen(true);
   };

   const handlePreview = useCallback(() => {
      setIsPreviewOpen(false);
   }, []);

   const { markers } = useMarkersData({ handleMarkerSelect });

   //TODO: update to use forwardref
   const mapRef = useRef<MapRef>(null);

   useEffect(() => {
      mapRef.current?.resize();
   }, [isPreviewOpen]);

   return (
      <div className='map-container'>
         <PreviewFeature
            isPreviewOpen={isPreviewOpen}
            handlePreview={handlePreview}
            selectedCollection={selectedCollection}
            selectedImage={selectedImage}
         />
         <MapUI
            viewState={viewState}
            handleViewChange={handleViewChange}
            geoControlRef={geoControlRef}
            imagePoints={markers}
            mapRef={mapRef}
         />
      </div>
   );
}

export default MapFeature;
