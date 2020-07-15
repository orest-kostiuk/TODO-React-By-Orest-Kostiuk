import React from "react";
import './post-list.css'

import PostListItem from "../post-list-item";

const PostList = ({posts, onDelete, onLike, onImportant}) => {
  let items = posts.map((item) => {
    const {id, ...data} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...data}
          onDelete={() => onDelete(id)}
          onLike={() => onLike(id)}
          onImportant={() => onImportant(id)}/>
      </li>
    )
  })
  return(
    <ul className="app-list list-group">
      {items}
    </ul>
  )
}

export default PostList