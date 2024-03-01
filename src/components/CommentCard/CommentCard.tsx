import { Comments } from "../../lib/types";
import "./CommentCard.scss";

type CommentCardProps = {
   comment: Comments;
};

function CommentCard({ comment }: CommentCardProps) {
   const commentDate = new Date(comment.created_at);

   const formattedDate = commentDate.toLocaleDateString("en-US", {
      dateStyle: "medium",
   });

   return (
      <div key={comment.id} className='comment'>
         <div className='comment__info-container'>
            <p>{comment.username}</p>
            <p>{formattedDate}</p>
         </div>
         <p>{comment.comment}</p>
      </div>
   );
}

export default CommentCard;
