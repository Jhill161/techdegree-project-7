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
import Nav from './components/Nav';
import Search from './components/Search';
import NotFound from './components/NotFound';


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
    this.getPhoto('northern lights');
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
        <Switch>
          <Route exact path="/" render={() => <Gallery loading={this.state.loading} data={this.state.photos} /> } />
          <Route path="/search/:query"  render={ () => <Gallery loading={this.state.loading} data={this.state.photos } /> } />
        </Switch>
      </div>
      </BrowserRouter>
    )};r
  }

  export default App;
