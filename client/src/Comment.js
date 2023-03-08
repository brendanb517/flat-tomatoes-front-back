import react from 'react';

function Comment({comment}) {

const {user_id, movie_id, text} = comment




return (
<div>
{user_id}
{text}

</div>
)
}

export default Comment;