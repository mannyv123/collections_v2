import "./CollectionViewUI.scss";
import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import Loading from "../../components/Loading/Loading";
import CommentCard from "../../components/CommentCard/CommentCard";
import { Comments, Image, UserCollection } from "../../lib/types";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

type CollectionViewUIProps = {
   currentImage: Image | undefined;
   collectionInfo: UserCollection | undefined;
   comments: Comments[];
   filteredThumbnails: Image[];
   handleSelectImage: (imageId: string) => void;
   handleNextImage: (increment: number) => void;
};

function CollectionViewUI({
   currentImage,
   collectionInfo,
   comments,
   filteredThumbnails,
   handleSelectImage,
   handleNextImage,
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
               <div className='collection__navigation-container'>
                  <div
                     className='collection__nav-item collection__nav-item--prev'
                     onClick={() => handleNextImage(-1)}
                  >
                     <NavigateBeforeIcon fontSize='large' />
                  </div>
                  <div
                     className='collection__nav-item collection__nav-item--next'
                     onClick={() => handleNextImage(1)}
                  >
                     {" "}
                     <NavigateNextIcon fontSize='large' />
                  </div>
               </div>
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
