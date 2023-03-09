import react from 'react';
import AddComment from './AddComment';

function Comment({comment}) {

const {user_id, movie_id, text} = comment




return (
    <>
<div>
{user_id}
{text}
<button onClick={console.log("deleted")}>delete</button>
</div>
<div>
<AddComment />
</div>
</>
)
}

export default Comment;