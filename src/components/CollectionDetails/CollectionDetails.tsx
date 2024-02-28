import "./CollectionDetails.scss";
import marker from "../../assets/icons/marker.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Image, UserCollection } from "../../lib/types";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

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
            {collectionInfo && currentImage ? (
               <>
                  <Link
                     className='details__link'
                     to={`/collection/${collectionInfo?.id}/image/${currentImage?.id}`}
                  >
                     <div className='details__collection-name'>
                        <CollectionsIcon fontSize='medium' />
                        <p>{collectionInfo.title}</p>
                     </div>
                  </Link>
                  <div className='details__user'>
                     <PersonOutlineIcon fontSize='medium' />
                     <p>{collectionInfo.username}</p>
                  </div>
               </>
            ) : null}
         </div>
      </div>
   );
}

export default CollectionDetails;
