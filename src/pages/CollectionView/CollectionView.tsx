import useCollectionData from "../../lib/hooks/useCollectionData";
import "./CollectionView.scss";
import { useParams, useNavigate } from "react-router-dom";
import useImageData from "../../lib/hooks/useImageData";
import CollectionViewUI from "../../components/CollectionViewUI/CollectionViewUi";

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
      <>
         <CollectionViewUI
            currentImage={currentImage}
            collectionInfo={collectionInfo}
            comments={comments}
            filteredThumbnails={filteredThumbnails}
            handleSelectImage={handleSelectImage}
         />
      </>
   );
}

export default CollectionView;
