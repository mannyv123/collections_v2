import { useCallback, useEffect, useMemo, useState } from "react";
import { MarkerData } from "../types";
import { Marker } from "react-map-gl";

const API_URL = import.meta.env.VITE_API_URL as string;

function useMarkersData() {
   const [markersData, setMarkersData] = useState<MarkerData[]>([]);

   const getMarkersData = useCallback(async () => {
      const response = await fetch(`${API_URL}/images`, {
         method: "GET",
      });

      if (!response.ok) {
         throw new Error("Error fetching data");
      }

      const data = (await response.json()) as MarkerData[];

      setMarkersData(data);
   }, []);

   useEffect(() => {
      getMarkersData().catch((error) => console.log(error));
   }, [getMarkersData]);

   const markers = useMemo(
      () =>
         markersData.map((marker) => (
            <Marker key={marker.id} longitude={marker.location.x} latitude={marker.location.y} />
         )),
      [markersData],
   );

   return { markers };
}

export default useMarkersData;
