import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import useCollectionData from "../../lib/hooks/useCollectionData";
import "./CollectionView.scss";
import { useParams, useNavigate } from "react-router-dom";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import Loading from "../../components/Loading/Loading";
import useImageData from "../../lib/hooks/useImageData";
import CommentCard from "../../components/CommentCard/CommentCard";

function CollectionView() {
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

   return (
      <div className='collection'>
         <div className='collection__info'>
            <CollectionDetails currentImage={currentImage} collectionInfo={collectionInfo} />
            <div className='collection__comments'>
               {comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
               ))}
            </div>
         </div>
         <div className='collection__images'>
            <div className='collection__main-image-container'>
               {currentImage ? (
                  <img
                     className='collection__main-image'
                     src={currentImage.imageUrl}
                     alt={currentImage.name}
                  />
               ) : null}
            </div>
            <div className='collection__thumbnails'>
               {filteredThumbnails.length !== 0 ? (
                  <>
                     {filteredThumbnails.map((image) => (
                        <div key={image.id} className='collection__thumbnail-card-wrapper'>
                           <ThumbnailCard image={image} handleSelectImage={handleSelectImage} />
                        </div>
                     ))}
                  </>
               ) : (
                  <div className='collection__thumb-loading'>
                     <Loading />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default CollectionView;
