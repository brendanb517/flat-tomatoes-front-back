//ella from 
// import { useState } from 'react'

// function UpdateCommentElla({comments, updateComment, handleChangeForUpdate}){

//     const optionTags = movies.map(movie => {
//         return <option key={movie.id} value={movie.id}>{movie.id}</option>
//     })

//     return(
//         <form onSubmit={(event) => {
//             event.preventDefault()
//             updateMovie(event.target.childNodes[2].value)
//         }}>
//             <h1>Update a movie:</h1>
//             <label>Comment ID: </label>
//             <select>
//                 {optionTags}
//             </select>
//             <br/>
//             <label>Title: </label>
//             <input type="text" name="title" onChange={handleChangeForUpdate}/><br/>
//             <label>Release Year: </label>
//             <input type="number" name="release_year" onChange={handleChangeForUpdate}/><br/>
//             <input type="submit"/>
//         </form>
//     )
// }

// export default UpdateGameForm;