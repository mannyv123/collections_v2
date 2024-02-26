import marker from "../../assets/icons/marker.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import { Image, UserCollection } from "../../lib/types";
import "./PreviewUI.scss";
import Loading from "../Loading/Loading";

type PreviewUIProps = {
   isPreviewOpen: boolean;
   handlePreview: () => void;
   handleSelectImage: (imageId: string) => void;
   currentImage: Image | undefined;
   collectionDetails: UserCollection | undefined;
   filteredThumbnails: Image[];
};

function PreviewUI({
   isPreviewOpen,
   handlePreview,
   handleSelectImage,
   currentImage,
   collectionDetails,
   filteredThumbnails,
}: PreviewUIProps) {
   return (
      <section className={`preview ${isPreviewOpen ? "preview--open" : "preview--closed"}`}>
         <div className='preview__close-arrow' onClick={handlePreview}>
            <KeyboardArrowDownIcon fontSize='large' />
         </div>
         <div className='preview__container'>
            <div className='preview__info'>
               <div className='preview__info-item preview__info-item--location'>
                  <img src={marker} alt='marker' className='preview__marker-icon' />
                  <div className='preview__title'>
                     {currentImage ? (
                        <h3>
                           {currentImage?.city}, {currentImage?.country}
                        </h3>
                     ) : (
                        <Loading />
                     )}
                  </div>
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
                  ) : (
                     <Loading />
                  )}
               </div>
               <div className='preview__thumbnail-container'>
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
      </section>
   );
}

export default PreviewUI;
