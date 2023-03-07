import { useState } from "react";

export default function AddComment({onAddComment}) {
const [comment, setComment] = useState("");

function handleSubmit (e) {
  e.preventDefault();
  fetch("/comments" , {
    method: "POST",
    headers: {
      "Content-Type": "applicaiton/json",
    },
    body: JSON.stringify(comment),
  })
  .then(r=> r.json())
  .then((newComment) => onAddComment(newComment))
}
    return (
        <div className="new-comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit = {handleSubmit}>
        <input 
        type="text" 
        name="comment" 
        placeholder="Enter comment here"
        value = {comment}
        onChange={(e) => setComment(e.target.value)}
         />
        <button type="submit">Submit Comment</button>
        </form>
        </div>
    )
}