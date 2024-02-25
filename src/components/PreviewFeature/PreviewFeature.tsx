import "./PreviewFeature.scss";
import marker from "../../assets/icons/marker.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useCollectionData from "../../lib/hooks/useCollectionData";
import { memo, useEffect, useState } from "react";
import { Image } from "../../lib/types";

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
      <section className={`preview ${isPreviewOpen ? "preview--open" : "preview--closed"}`}>
         <div className='preview__close-arrow' onClick={handlePreview}>
            <KeyboardArrowDownIcon fontSize='large' />
         </div>
         <div className='preview__container'>
            <div className='preview__info'>
               <div className='preview__info-item preview__info-item--location'>
                  <img src={marker} alt='marker' className='preview__marker-icon' />
                  {currentImage ? (
                     <h3 className='preview__title'>
                        {currentImage?.city}, {currentImage?.country}
                     </h3>
                  ) : null}
               </div>
               <div className='preview__info-item'>
                  <div className='preview__info-item preview__info-item--collection-name'>
                     <CollectionsIcon fontSize='medium' />
                     {collectionDetails ? <p>{collectionDetails.title}</p> : null}
                  </div>
                  <div className='preview__info-item preview__info-item--user'>
                     <PersonOutlineIcon fontSize='medium' />
                     {collectionDetails ? <p>{collectionDetails.username}</p> : null}
                  </div>
               </div>
            </div>
            <div className='preview__images'>
               <div className='preview__image'>
                  {currentImage ? (
                     <img
                        className='preview__selected-image'
                        src={currentImage.imageUrl}
                        alt='selected preview'
                     />
                  ) : null}
               </div>
               <div className='preview__thumbnails'>
                  {filteredThumbnails.map((image) => (
                     <div
                        key={image.id}
                        className='preview__thumbnail-card'
                        onClick={() => handleSelectImage(image.id)}
                     >
                        <img
                           className='preview__thumbnail-image'
                           src={image.imageUrl}
                           alt={image.id}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
});

export default PreviewFeature;
