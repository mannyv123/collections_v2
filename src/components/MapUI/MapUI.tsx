import { RefObject } from "react";
import { MapView } from "../../lib/types";
import "./MapUI.scss";
import Map, { GeolocateControl, ViewStateChangeEvent } from "react-map-gl";

type MapUIProps = {
   viewState: MapView;
   handleViewChange: (e: ViewStateChangeEvent) => void;
   geoControlRef: RefObject<mapboxgl.GeolocateControl>;
   imagePoints: JSX.Element[];
};

function MapUI({ viewState, handleViewChange, geoControlRef, imagePoints }: MapUIProps) {
   return (
      <div className='map'>
         <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string}
            {...viewState}
            onMove={handleViewChange}
            style={{ width: "100%", height: "100%" }}
            mapStyle='mapbox://styles/mapbox/light-v10'
            projection={{ name: "globe" }}
         >
            {imagePoints}
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
