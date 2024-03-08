import "./CollectionViewUI.scss";
import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import Loading from "../../components/Loading/Loading";
import CommentCard from "../../components/CommentCard/CommentCard";
import { Comments, Image, UserCollection } from "../../lib/types";

type CollectionViewUIProps = {
   currentImage: Image | undefined;
   collectionInfo: UserCollection | undefined;
   comments: Comments[];
   filteredThumbnails: Image[];
   handleSelectImage: (imageId: string) => void;
};

function CollectionViewUI({
   currentImage,
   collectionInfo,
   comments,
   filteredThumbnails,
   handleSelectImage,
}: CollectionViewUIProps) {
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

export default CollectionViewUI;
