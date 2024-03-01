import { useEffect, useState } from "react";
import { Comments, Image, Likes } from "../types";
import { getComments, getImage, getLikes } from "../api";

type UseImageDataProps = {
   imageId: string;
};

function useImageData({ imageId }: UseImageDataProps) {
   const [image, setImage] = useState<Image>();
   const [likes, setLikes] = useState<Likes[]>([]);
   const [comments, setComments] = useState<Comments[]>([]);

   useEffect(() => {
      void (async () => {
         const fullImage = await getImage(imageId, "full");
         setImage(fullImage);

         const imageLikes = await getLikes(imageId);
         const sortedLikes = imageLikes.sort(
            (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at),
         );
         setLikes(sortedLikes);

         const imageComments = await getComments(imageId);
         const sortedComments = imageComments.sort(
            (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at),
         );
         setComments(sortedComments);
      })();
   }, [imageId]);

   return { image, likes, comments };
}

export default useImageData;
