import { useEffect, useState } from "react";
import { getCollectionDetails, getThumbnails } from "../api";
import { Image, UserCollection } from "../types";

type UseCollectionDataProps = {
   selectedCollection: string;
};

function useCollectionData({ selectedCollection }: UseCollectionDataProps) {
   const [collectionDetails, setCollectionDetails] = useState<UserCollection>();
   const [imageThumbnails, setImageThumbnails] = useState<Image[]>([]);

   useEffect(() => {
      void (async () => {
         const collectionData = await getCollectionDetails(selectedCollection);
         setCollectionDetails(collectionData);
      })();
   }, [selectedCollection]);

   useEffect(() => {
      void (async () => {
         const thumbnails = await getThumbnails(selectedCollection);
         setImageThumbnails(thumbnails);
      })();
   }, [selectedCollection]);

   return { collectionDetails, imageThumbnails };
}

export default useCollectionData;
