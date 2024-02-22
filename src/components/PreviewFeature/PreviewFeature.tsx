import "./PreviewFeature.scss";
import marker from "../../assets/icons/marker.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type PreviewFeatureProps = {
   isPreviewOpen: boolean;
   handleMarkerSelect: () => void;
};

function PreviewFeature({ isPreviewOpen, handleMarkerSelect }: PreviewFeatureProps) {
   return (
      <section className={`preview ${isPreviewOpen ? "preview--open" : "preview--closed"}`}>
         <div className='preview__close-arrow' onClick={handleMarkerSelect}>
            <KeyboardArrowDownIcon fontSize='large' />
         </div>
         <div className='preview__container'>
            <div className='preview__info'>
               <div className='preview__info-item preview__info-item--location'>
                  <img src={marker} alt='marker' className='preview__marker-icon' />
                  <h3 className='preview__title'>Istanbul, Turkey</h3>
               </div>
               <div className='preview__info-item'>
                  <div className='preview__info-item preview__info-item--collection-name'>
                     <CollectionsIcon fontSize='medium' />
                     <p>Honeymoon</p>
                  </div>
                  <div className='preview__info-item preview__info-item--user'>
                     <PersonOutlineIcon fontSize='medium' />
                     <p>mannyvirdi</p>
                  </div>
               </div>
            </div>
            <div className='preview__images'>
               <div className='preview__image'></div>
               <div className='preview__thumbnails'>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
                  <div className='preview__thumbnail-card'></div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PreviewFeature;
