import React, {Component} from "react";
import './post-status-filter.css'

export default class PostStatusFilter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {name: 'all', label: 'Всі'},
        {name: 'like', label: 'Сподобались'}
      ],
      selected: 'all'
    }
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  toggleSelected(name) {
    this.setState(({selected}) => {
      return {
        selected: name
      }
    });
    this.props.onFilter(name);
  }

  render() {
    const buttons = this.state.buttons.map(({name, label}) => {
      let clazz = this.state.selected === name ? 'btn btn-info' : 'btn btn-outline-secondary'
      return (
        <button key={name} className={clazz} onClick={() => this.toggleSelected(name)}>{label}</button>
      )
    })
    return(
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

