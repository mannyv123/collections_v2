import useCollectionData from "../../lib/hooks/useCollectionData";
import "./CollectionView.scss";
import { useParams, useNavigate } from "react-router-dom";
import useImageData from "../../lib/hooks/useImageData";
import CollectionViewUI from "../../components/CollectionViewUI/CollectionViewUI";
import { MouseEvent, useState } from "react";

function CollectionView() {
   const [isFullImage, setIsFullImage] = useState(false);

   const navigate = useNavigate();
   const { collectionId: selectedCollection = "", imageId = "" } = useParams<{
      collectionId: string;
      imageId: string;
   }>();

   const { collectionInfo, imageThumbnails } = useCollectionData({ selectedCollection });
   const { image: currentImage, comments } = useImageData({ imageId });

   const filteredThumbnails = imageThumbnails.filter((img) => img.id !== imageId);

   const handleSelectImage = (imageId: string) => {
      navigate(`/collection/${selectedCollection}/image/${imageId}`);
   };

   const handleNextImage = (increment: number, e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      const currentImageIndex = imageThumbnails.findIndex((image) => image.id === imageId);
      let nextImageId: string;

      if (currentImageIndex === imageThumbnails.length - 1 && increment === 1) {
         nextImageId = imageThumbnails[0].id;
      } else if (currentImageIndex === 0 && increment === -1) {
         nextImageId = imageThumbnails[imageThumbnails.length - 1].id;
      } else {
         nextImageId = imageThumbnails[currentImageIndex + increment].id;
      }

      navigate(`/collection/${selectedCollection}/image/${nextImageId}`);
   };

   const handleExpandImage = () => {
      setIsFullImage((prev) => !prev);
   };

   return (
      <>
         <CollectionViewUI
            currentImage={currentImage}
            collectionInfo={collectionInfo}
            comments={comments}
            filteredThumbnails={filteredThumbnails}
            handleSelectImage={handleSelectImage}
            handleNextImage={handleNextImage}
            isFullImage={isFullImage}
            handleExpandImage={handleExpandImage}
         />
      </>
   );
}

export default CollectionView;
