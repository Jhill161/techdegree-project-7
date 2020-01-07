import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

// class Search extends Search {

// }






// class Search extends Component {
  
//   //search text state that gets updated to the value of the input
//     state = {
//       searchText: '',
//       loading: this.props.loading
//     }
    
//     //set the component's state when change occurs on search
//     onSearchChange = e => {
//         this.setState({ 
//           searchText: e.target.value,
//           loading:true });
//     }
    
//     //function to handle the submission of a search
//     handleSubmit = e => {
//         //prevent the page from actually submitting and refreshing to allow for the search submit
//         e.preventDefault();
//         //onSearch references the value of the search input referred to in the ref prop
//         this.props.onSearch(this.query.value);
//         //add the query to the browsers history
//         this.props.history.push(this.query.value);
//         //reset the form field so the name query text goes away after submitted
//         e.currentTarget.reset();
//     }

    
//     render() {  

//       return (
        
//         //render a search form based on html template
//         <form className="search-form" onSubmit={this.handleSubmit} >
//         {/*give the search form an input element and pass necessary props*/}
//           <input type="search"
//                  onChange={this.onSearchChange}
//                  name="search"
//                 //this puts a reference to an input on the search class
//                  ref={(input) => this.query = input}
//                  placeholder="Search for images" />
//           <button type="submit" className="search-button">search</button>
//               <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//                 <path d="M0 0h24v24H0z" fill="none"/>
//               </svg>

//         </form>

//       );
//     }
//   }

//export default Search;