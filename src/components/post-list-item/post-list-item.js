import React, {Component} from "react";
import './post-list-item.css'


export default class PostListItem extends Component {
  render() {
    let classes = "app-list-item d-flex justify-content-between"
    let { label, onDelete, onImportant, onLike } = this.props
    let { important, like } = this.props
    if(important) {
      classes += ' important'
    }
    if(like) {
      classes += ' like'
    }
    return (
      <div className={classes}>
      <span
        className="app-list-item-label"
        onClick={onLike}>
        { label }
      </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-star btn-sm"
          onClick={onImportant}>
            <i className="fa fa-star"/>
          </button>
          <button
            className="btn-trash btn-sm"
            onClick={onDelete}
          >
            <i className="fa fa-trash-o"/>
          </button>
          <i className="fa fa-heart"/>
        </div>

      </div>
    )
  }
}