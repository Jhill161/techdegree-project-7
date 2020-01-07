import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


// App Components

import './App.css';
import Gallery from './components/Gallery';
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Search from './components/Search';


class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      photos: [],
      loading: true,
    };
  }

  //Default render from API of cat photos
  componentDidMount(){
    this.getPhoto('cat');
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'cat'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
      .then( response => { 
        this.setState({ photos:response.data.photos.photo})
      })
  }

  // search function to get results from flickr using api
  getPhoto = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
            photos: response.data.photos.photo,
            loading: false,
            title: query,
          })
      })
      .catch(error => {
        console.log('There was an error fetching your data', error);
      });
  };
  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
      <div className="container">
        <Search 
          onSearch={ this.getPhoto }
          title={ this.state.title }
        />
        <Nav/>
        <Gallery data={this.state.photos} />
      </div>
      </BrowserRouter>
    )};r
  }

  export default App;
