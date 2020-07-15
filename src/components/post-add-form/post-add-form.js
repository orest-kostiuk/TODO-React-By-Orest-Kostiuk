import React, {Component} from "react";
import './post-add-form.css'

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAddItem(this.state.text)
    this.setState({
      text: ''
    })
  }


   render() {
     return(
       <form
         className="bottom-panel d-flex"
         onSubmit={this.onSubmit}>
         <input
           type="text"
           placeholder="Про що думаєте?"
           className="form-control new-post-label"
           onChange={this.onChange}
           value={this.state.text}
         />
         <button
           type="submit"
           className="btn btn-outline-secondary"
         >
           Добавити
         </button>
       </form>
     )
   }
}

