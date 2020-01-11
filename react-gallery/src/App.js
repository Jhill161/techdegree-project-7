import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// App Components //

import "./App.css";
import Gallery from "./components/Gallery";
import apiKey from "./config";
import Nav from "./components/Nav";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      photos: [],
      loading: true,
      home: {
        photos: [],
        loading: true
      },
      aurora: {
        photos: [],
        loading: true
      },
      snow: {
        photos: [],
        loading: true
      },
      alaska: {
        photos: [],
        loading: true
      }
    };
  }

  //Default render from API of cat photos
  componentDidMount() {
    this.getPhoto("northern lights");
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${"northern lights"}&per_page=24&format=json&nojsoncallback=1&safe_search=1`
      )
      .then(response => {
        let home = { ...this.state.home };
        home.photos = response.data.photos.photo;
        home.loading = false;
        home.title = "home";
        this.setState({ home });
      });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${"aurora"}&per_page=24&format=json&nojsoncallback=1&safe_search=1`
      )
      .then(response => {
        let aurora = { ...this.state.aurora };
        aurora.photos = response.data.photos.photo;
        aurora.loading = false;
        aurora.title = "aurora";
        this.setState({ aurora });
      });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${"alaska"}&per_page=24&format=json&nojsoncallback=1&safe_search=1`
      )
      .then(response => {
        let alaska = { ...this.state.alaska };
        alaska.photos = response.data.photos.photo;
        alaska.loading = false;
        alaska.title = "alaska";
        this.setState({ alaska });
      });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${"snow"}&per_page=24&format=json&nojsoncallback=1&safe_search=1`
      )
      .then(response => {
        let snow = { ...this.state.snow };
        snow.photos = response.data.photos.photo;
        snow.loading = false;
        snow.title = "snow";
        this.setState({ snow });
      });
  }

  // search function to get results from flickr using api
  getPhoto = query => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          title: query
        });
      })
      .catch(error => {
        console.log("There was an error fetching your data", error);
      });
  };
  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.getPhoto} title={this.state.title} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Gallery
                  loading={this.state.home.loading}
                  // title={this.state.home.title}
                  data={this.state.home.photos}
                />
              )}
            />

            <Route
              path="/aurora"
              render={() => (
                <Gallery
                  loading={this.state.aurora.loading}
                  data={this.state.aurora.photos}
                />
              )}
            />

            <Route
              path="/snow"
              render={() => (
                <Gallery
                  loading={this.state.snow.loading}
                  data={this.state.snow.photos}
                />
              )}
            />

            <Route
              path="/alaska"
              render={() => (
                <Gallery
                  loading={this.state.alaska.loading}
                  data={this.state.alaska.photos}
                />
              )}
            />
            <Route
              path="/search/:query"
              render={() => (
                <Gallery
                  loading={this.state.loading}
                  data={this.state.photos}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  r;
}

export default App;
