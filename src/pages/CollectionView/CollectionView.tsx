import { useEffect, useState } from "react";
import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import useCollectionData from "../../lib/hooks/useCollectionData";
import "./CollectionView.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Image } from "../../lib/types";
import { getImage } from "../../lib/api";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";

function CollectionView() {
   const navigate = useNavigate();
   const { collectionId: selectedCollection = "", imageId = "" } = useParams<{
      collectionId: string;
      imageId: string;
   }>();
   const [currentImage, setCurrentImage] = useState<Image>();

   const { collectionInfo, imageThumbnails } = useCollectionData({ selectedCollection });

   const filteredThumbnails = imageThumbnails.filter((img) => img.id !== imageId);

   useEffect(() => {
      void (async () => {
         const image = await getImage(imageId, "full");
         setCurrentImage(image);
      })();
   }, [imageId]);

   const handleSelectImage = (imageId: string) => {
      navigate(`/collection/${selectedCollection}/image/${imageId}`);
   };

   return (
      <div className='collection'>
         <div className='collection__info'>
            <CollectionDetails currentImage={currentImage} collectionInfo={collectionInfo} />
            <div className='collection__comments'>Comments</div>
         </div>
         <div className='collection__images'>
            <div className='collection__main-image-container'>
               {currentImage ? (
                  <img
                     className='collection__main-image'
                     src={currentImage.imageUrl}
                     alt={currentImage?.name}
                  />
               ) : null}
            </div>
            <div className='collection__thumbnails'>
               {filteredThumbnails.map((image) => (
                  <ThumbnailCard
                     key={image.id}
                     image={image}
                     handleSelectImage={handleSelectImage}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default CollectionView;
