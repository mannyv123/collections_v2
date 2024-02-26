import { useCallback, useEffect, useMemo, useState } from "react";
import { MarkerData } from "../types";
import { Marker } from "react-map-gl";
import { getImageMarkers } from "../api";

type UseMarkersDataProps = {
   handleMarkerSelect: (collectionId: string, imageId: string) => void;
};

function useMarkersData({ handleMarkerSelect }: UseMarkersDataProps) {
   const [markersData, setMarkersData] = useState<MarkerData[]>([]);

   const getMarkerData = useCallback(async () => {
      const data = await getImageMarkers();
      setMarkersData(data);
   }, []);

   useEffect(() => {
      getMarkerData().catch((error) => console.log(error));
   }, [getMarkerData]);

   const markers = useMemo(
      () =>
         markersData.map((marker) => (
            <Marker
               key={marker.id}
               longitude={marker.location.x}
               latitude={marker.location.y}
               onClick={() => handleMarkerSelect(marker.collection_id, marker.id)}
               style={{ cursor: "pointer" }}
            />
         )),
      [markersData, handleMarkerSelect],
   );

   return { markers };
}

export default useMarkersData;
