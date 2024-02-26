import { useEffect, useState } from "react";
import { getCollectionDetails, getThumbnails } from "../api";
import { Image, UserCollection } from "../types";

type UseCollectionDataProps = {
   selectedCollection: string;
};

function useCollectionData({ selectedCollection }: UseCollectionDataProps) {
   const [collectionInfo, setCollectionInfo] = useState<UserCollection>();
   const [imageThumbnails, setImageThumbnails] = useState<Image[]>([]);

   useEffect(() => {
      void (async () => {
         const collectionData = await getCollectionDetails(selectedCollection);
         setCollectionInfo(collectionData);
      })();
   }, [selectedCollection]);

   useEffect(() => {
      void (async () => {
         if (selectedCollection) {
            const thumbnails = await getThumbnails(selectedCollection);
            setImageThumbnails(thumbnails);
         }
      })();
   }, [selectedCollection]);

   return { collectionInfo, imageThumbnails };
}

export default useCollectionData;
