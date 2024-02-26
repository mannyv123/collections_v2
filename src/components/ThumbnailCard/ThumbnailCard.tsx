import { Image } from "../../lib/types";
import "./ThumbnailCard.scss";

type ThumbnailCardProps = {
   image: Image;
   handleSelectImage: (imageId: string) => void;
};

function ThumbnailCard({ image, handleSelectImage }: ThumbnailCardProps) {
   return (
      <div key={image.id} className='thumbnail' onClick={() => handleSelectImage(image.id)}>
         <img className='thumbnail__image' src={image.imageUrl} alt={image.id} />
      </div>
   );
}

export default ThumbnailCard;
