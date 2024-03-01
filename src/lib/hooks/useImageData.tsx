// will be used to provide details for a single image including
// - full image
// - likes count
// - comments
// - image location

import { useEffect, useState } from "react";
import { Image } from "../types";
import { getImage } from "../api";

type UseImageDataProps = {
   imageId: string;
};

function useImageData({ imageId }: UseImageDataProps) {
   const [image, setImage] = useState<Image>();

   useEffect(() => {
      void (async () => {
         const newImage = await getImage(imageId, "full");
         setImage(newImage);
      })();
   }, [imageId]);

   return { image };
}

export default useImageData;
