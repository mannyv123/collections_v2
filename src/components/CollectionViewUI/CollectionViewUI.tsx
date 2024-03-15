import "./CollectionViewUI.scss";
import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import Loading from "../../components/Loading/Loading";
import CommentCard from "../../components/CommentCard/CommentCard";
import { Comments, Image, UserCollection } from "../../lib/types";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FullImageFeature from "../FullImageFeature/FullImageFeature";
import { MouseEvent } from "react";

type CollectionViewUIProps = {
   currentImage: Image | undefined;
   collectionInfo: UserCollection | undefined;
   comments: Comments[];
   filteredThumbnails: Image[];
   handleSelectImage: (imageId: string) => void;
   handleNextImage: (increment: number, e: MouseEvent<HTMLDivElement>) => void;
   isFullImage: boolean;
   handleExpandImage: () => void;
};

function CollectionViewUI({
   currentImage,
   collectionInfo,
   comments,
   filteredThumbnails,
   handleSelectImage,
   handleNextImage,
   isFullImage,
   handleExpandImage,
}: CollectionViewUIProps) {
   return (
      <div className='collection'>
         {isFullImage ? <FullImageFeature /> : null}
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
               <div className='collection__navigation-container' onClick={handleExpandImage}>
                  <div
                     className='collection__nav-item collection__nav-item--prev'
                     onClick={(e) => handleNextImage(-1, e)}
                  >
                     <NavigateBeforeIcon fontSize='large' />
                  </div>
                  <div
                     className='collection__nav-item collection__nav-item--next'
                     onClick={(e) => handleNextImage(1, e)}
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
                           <ThumbnailCard
                              image={image}
                              handleSelectImage={() => handleSelectImage(image.id)}
                           />
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
