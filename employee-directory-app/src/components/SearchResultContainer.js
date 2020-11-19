import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import Hero from "./Hero"
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    allResults: [],
    filteredResults: []
  };

  
  componentDidMount() {
    API.getEmployeeData()
    .then(res => {
      
      this.setState({ allResults: res.data.results, filteredResults: res.data.results })
      console.log(this.state.filteredResults)
    })
    .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value)
    
    const filtered = this.state.allResults.filter(result => {
        return (result.name.first.toLowerCase().includes(value.toLowerCase())) || (result.name.last.toLowerCase().includes(value.toLowerCase()))
    } )
    // this.setState({filteredResults: filtered})

    this.setState({
      [name]: value,
      filteredResults: filtered
    });

  };


  handleSort = event => {
    event.preventDefault();
    console.log("sort");
  }
  // add onclick
  //look up sort list in js


  render() {
    return (
      <div>
         <Hero backgroundImage="">
        <h1>Employee Database</h1>
        <h4>Search Employees</h4>
      </Hero>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.filteredResults} 
        handleSort={this.handleSort}/>
      </div>
    );
  }
}

export default SearchResultContainer;