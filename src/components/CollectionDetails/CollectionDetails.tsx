import "./CollectionDetails.scss";
import marker from "../../assets/icons/marker.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Image, UserCollection } from "../../lib/types";
import Loading from "../Loading/Loading";

type CollectionDetailsProps = {
   currentImage: Image | undefined;
   collectionInfo: UserCollection | undefined;
   styles?: string;
};

function CollectionDetails({ currentImage, collectionInfo, styles = "" }: CollectionDetailsProps) {
   return (
      <div className={`details ${styles}`}>
         <div className='details__item details__item--location'>
            <img src={marker} alt='marker' className='details__marker-icon' />
            <div className='details__title'>
               {currentImage ? (
                  <h3>
                     {currentImage?.city}, {currentImage?.country}
                  </h3>
               ) : (
                  <Loading />
               )}
            </div>
         </div>
         <div className='details__item'>
            <div className='details__item details__item--collection-name'>
               <CollectionsIcon fontSize='medium' />
               {collectionInfo ? <p>{collectionInfo.title}</p> : null}
            </div>
            <div className='details__item details__info-item--user'>
               <PersonOutlineIcon fontSize='medium' />
               {collectionInfo ? <p>{collectionInfo.username}</p> : null}
            </div>
         </div>
      </div>
   );
}

export default CollectionDetails;
