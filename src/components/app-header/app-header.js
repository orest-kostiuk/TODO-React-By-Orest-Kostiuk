import React from "react";
import './app-header.css'

const AppHeader = ({itemsCount, likeCount}) => {
    return(
        <div className="app-header d-flex">
          <h1>Orest Kostiuk</h1>
          <h2>{itemsCount} записів, сподобалось: {likeCount}</h2>
        </div>
    )
}

export default AppHeader