import "./PreviewFeature.scss";
import useCollectionData from "../../lib/hooks/useCollectionData";
import { memo, useEffect, useState } from "react";
import { Image } from "../../lib/types";
import PreviewUI from "../PreviewUI/PreviewUI";

type PreviewFeatureProps = {
   isPreviewOpen: boolean;
   handlePreview: () => void;
   selectedCollection: string;
   selectedImage: null | string;
};

const PreviewFeature = memo(function PreviewFeature({
   isPreviewOpen,
   handlePreview,
   selectedCollection,
   selectedImage,
}: PreviewFeatureProps) {
   const [currentImage, setCurrentImage] = useState<Image>();
   const { collectionDetails, imageThumbnails } = useCollectionData({ selectedCollection });

   useEffect(() => {
      if (imageThumbnails) {
         const image = imageThumbnails.find((image) => image.id === selectedImage);
         if (image) setCurrentImage(image);
      }
   }, [imageThumbnails, selectedImage]);

   const filteredThumbnails = imageThumbnails.filter((img) => img.id !== currentImage?.id);

   const handleSelectImage = (imageId: string) => {
      const image = filteredThumbnails.find((image) => image.id === imageId);
      if (image) setCurrentImage(image);
   };

   return (
      <PreviewUI
         isPreviewOpen={isPreviewOpen}
         handlePreview={handlePreview}
         handleSelectImage={handleSelectImage}
         currentImage={currentImage}
         collectionDetails={collectionDetails}
         filteredThumbnails={filteredThumbnails}
      />
   );
});

export default PreviewFeature;
