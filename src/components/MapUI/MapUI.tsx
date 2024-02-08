import "./MapUI.scss";
import Map from "react-map-gl";

function MapUI() {
   return (
      <div className='map'>
         <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string}
            initialViewState={{
               longitude: -122.4,
               latitude: 37.8,
               zoom: 1,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle='mapbox://styles/mapbox/dark-v10'
            projection={{ name: "globe" }}
         />
      </div>
   );
}

export default MapUI;
