import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Пора вчити реакт', important: true, like: false, id: 1},
        {label: 'Реакт вже вивчено', important: false, like: false, id: 2},
        {label: 'Пора зробити відпочинок', important: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onLike = this.onLike.bind(this)
    this.onImportant = this.onImportant.bind(this)
    this.onSearchPost = this.onSearchPost.bind(this)
    this.onFilter = this.onFilter.bind(this)
    this.maxId = 4
  }

  deleteItem(id) {
    this.setState(({data}) => {
      let itemIndex = data.findIndex((elem) => elem.id === id)
      const newArray = [...data.slice(0, itemIndex), ...data.slice(itemIndex + 1)]
      return {
        data: newArray
      }
    })
  }

  onLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      let old = data[index]
      const newItem = [{...old, like: !old.like}]
      const newArr = [...data.slice(0, index), ...newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  onImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      let old = data[index]
      const newItem = [{...old, important: !old.important}]
      const newArr = [...data.slice(0, index), ...newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  addItem(text) {
    if(text.length < 1) {
      return
    }
    const newItem = {
      label: text,
      important: false,
      like: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArray = [...data, newItem]
      return {
        data: newArray
      }
    })
  }

  onSearchPost(term) {
    this.setState({
      term: term
    })
  }

  searchPost(items, text) {
    if(text.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.label.indexOf(text) > -1
    })
  }

  onFilter(name) {
    this.setState(({filter})=> {
      return {
        filter: name
      }
    })
  }

  filterPosts(items, filter) {
    if(filter ==='like') {
      return items.filter(elem => elem.like)
    }else {
      return items
    }
  }
  render() {
    const data = this.state.data;
    const {term, filter} = this.state
    const likeCount = data.filter(item => item.like).length;
    const itemsCount = data.length;
    const filteredPosts = this.filterPosts(this.searchPost(data, term), filter);
    return(
      <div className="app">
        <AppHeader
          itemsCount={itemsCount}
          likeCount={likeCount}/>
        <div className="search-panel d-flex">
          <SearchPanel
            onSearchPost={this.onSearchPost}/>
          <PostStatusFilter
            onFilter={this.onFilter}/>
        </div>
        <PostList
          posts={filteredPosts}
          onDelete={this.deleteItem}
          onLike={this.onLike}
          onImportant={this.onImportant}/>
        <PostAddForm
          onAddItem={this.addItem}/>
      </div>
    )
  }
}