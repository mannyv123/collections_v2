import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import { Image, UserCollection } from "../../lib/types";
import "./PreviewUI.scss";
import Loading from "../Loading/Loading";
import CollectionDetails from "../CollectionDetails/CollectionDetails";
import CloseIcon from "@mui/icons-material/Close";

type PreviewUIProps = {
   isPreviewOpen: boolean;
   handlePreview: () => void;
   handleSelectImage: (imageId: string) => void;
   currentImage: Image | undefined;
   collectionInfo: UserCollection | undefined;
   filteredThumbnails: Image[];
};

function PreviewUI({
   isPreviewOpen,
   handlePreview,
   handleSelectImage,
   currentImage,
   collectionInfo,
   filteredThumbnails,
}: PreviewUIProps) {
   return (
      <section className={`preview ${isPreviewOpen ? "preview--open" : "preview--closed"}`}>
         <div className='preview__close-arrow' onClick={handlePreview}>
            <KeyboardArrowDownIcon fontSize='large' />
         </div>
         <div className='preview__container'>
            <div className='preview__header'>
               <CollectionDetails
                  currentImage={currentImage}
                  collectionInfo={collectionInfo}
                  styles='preview__details'
               />
               <div className='preview__close-icon' onClick={handlePreview}>
                  <CloseIcon fontSize='medium' />
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
