import { UserCollection, Image, MarkerData, Likes, Comments } from "./types";

const API_URL = import.meta.env.VITE_API_URL as string;

// Fetch image data for markers (all collections)
export const getImageMarkers = async () => {
   try {
      const response = await fetch(`${API_URL}/images`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return [] as MarkerData[];
      }

      const data = (await response.json()) as MarkerData[];

      return data;
   } catch (error) {
      console.error(error);
      return [] as MarkerData[];
   }
};

// Fetch single collection details
export const getCollectionDetails = async (collectionId: string) => {
   try {
      const response = await fetch(`${API_URL}/collections/${collectionId}`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return {} as UserCollection;
      }

      const data = (await response.json()) as UserCollection;

      return data;
   } catch (error) {
      console.error(error);
      return {} as UserCollection;
   }
};

// Fetch image thumbnails for single collection
export const getThumbnails = async (collectionId: string) => {
   try {
      const response = await fetch(`${API_URL}/collections/${collectionId}/images`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return [] as Image[];
      }

      const data = (await response.json()) as Image[];

      return data;
   } catch (error) {
      console.error(error);
      return [] as Image[];
   }
};

// Fetch single image
export const getImage = async (imageId: string, size: "full" | "thumbnail") => {
   try {
      const response = await fetch(`${API_URL}/images/${imageId}?size=${size}`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return {} as Image;
      }

      const data = (await response.json()) as Image;

      return data;
   } catch (error) {
      console.error(error);
      return {} as Image;
   }
};

// Get likes for image
export const getLikes = async (imageId: string) => {
   try {
      const response = await fetch(`${API_URL}/images/${imageId}/likes`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return [] as Likes[];
      }

      const data = (await response.json()) as Likes[];

      return data;
   } catch (error) {
      console.error(error);
      return [] as Likes[];
   }
};

// Get comments for image
export const getComments = async (imageId: string) => {
   try {
      const response = await fetch(`${API_URL}/images/${imageId}/comments`, {
         method: "GET",
      });

      if (!response.ok) {
         console.error("Error fetching data", response.statusText);
         return [] as Comments[];
      }

      const data = (await response.json()) as Comments[];

      return data;
   } catch (error) {
      console.error(error);
      return [] as Comments[];
   }
};
