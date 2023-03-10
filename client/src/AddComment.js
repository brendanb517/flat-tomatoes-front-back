import { useState, useEffect } from "react";
import Comment from "./Comment"

 function AddComment({user, featuredMovie }) {

 
const [comments, setComments] = useState([]);
// const [updateComment, setUpdateComment] = useState([]);
const [commentForm, setCommentForm] = useState('')

useEffect(() => {
  fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(commentData => {
      setComments(commentData)
  })
  }, [])

// const commentComponents = comments.map((comment) => {

//    return (<Comment key={comment.id} comment={comment}/>)
//   })

function handleSubmit (e) {

  const newObj = {
    user_id: user,
    movie_id: featuredMovie,
    text: commentForm
  }
  e.preventDefault();
  console.log(commentForm)
  fetch("/comments" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObj),
  })
  .then(r=> r.json())
  .then((newComment) => setComments([...comments, newComment]))
}
function postComment(event) {
  setCommentForm(event.target.value);
}
// function postComment(event) {
//       setCommentForm({...commentForm, [event.target.name]: event.target.value});
// }

// function handleEditComment(id, commentIndex) {
//   fetch(`/comments/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(commentIndex),
//   })
//     .then((r) => r.json())
//     .then((updatedComment) => {
//       const updatedComments = comments.map((comment) => {
//         if (comment.id === updatedComment.id) return updatedComment;
//         return comment;
//       });
//       setComments(updatedComments);
//     });
// }


function handleDeleteComment(id) {
fetch(`/comments/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

})
.catch(error => {
  console.error('There was a problem with the delete request:', error);
});
}
    return (
        <div className="new-comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="text" 
        placeholder="Enter comment here"
        onChange={postComment}
         />
        <button type="submit">Submit Comment</button>
        </form>
        {/* {commentComponents} */}
        </div>
    )
}
export default AddComment;