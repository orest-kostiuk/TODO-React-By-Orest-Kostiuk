import React, {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onSearchPost(e.target.value)
  }

  render() {
    return(
      <input
        className="form-control search-input"
        type="text"
        placeholder="Введіть назву"
        onChange={this.onChange}
      />
    )
  }
}