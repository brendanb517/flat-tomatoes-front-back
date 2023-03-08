import { useState, useEffect } from "react";
import Comment from "./Comment"

 function AddComment({comment}) {

const [comments, setComments] = useState([]);
const [commentForm, setCommentForm] = useState({
  //user_id: 1,
  //movie_id: 1
})

useEffect(() => {
  fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(commentData => {
      setComments(commentData)
  })
  }, [])

const commentComponents = comments.map((comment) => {

   return (<Comment key={comment.id} comment={comment}/>)
  })

function handleSubmit (e) {
  e.preventDefault();
  console.log(commentForm)
  fetch("/comments" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentForm),
  })
  .then(r=> r.json())
  .then((newComment) => setComments([...comments, newComment]))
}

function updateComment(event) {
      setCommentForm({...commentForm, [event.target.name]: event.target.value});
}
    return (
        <div className="new-comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="text" 
        placeholder="Enter comment here"
        onChange={updateComment}
         />
        <button type="submit">Submit Comment</button>
        </form>
        {commentComponents}
        </div>
    )
}
export default AddComment;