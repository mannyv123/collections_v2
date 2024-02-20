// Map related types
export type MapView = {
   latitude: number;
   longitude: number;
   zoom: number;
};

// Image Markers
export type MarkerData = {
   id: string;
   name: string;
   location: {
      x: number;
      y: number;
   };
   city: string;
   country: string;
   collection_id: string;
   user_id: string;
};
