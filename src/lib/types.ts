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

// Collection
export type Collection = {
   id: string;
   title: string;
   description: string;
   user_id: string;
};

// Collection with Username
export interface UserCollection extends Collection {
   username: string;
}

// Image with url
export interface Image extends MarkerData {
   imageUrl: string;
}

// Likes
export type Likes = {
   id: string;
   image_id: string;
   user_id: string;
};

// Comments
export type Comments = {
   id: string;
   comment: string;
   image_id: string;
   user_id: string;
};
