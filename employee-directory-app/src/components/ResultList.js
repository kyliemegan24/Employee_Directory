import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Photo</th>
      <th scope="col" onClick={props.handleSort}>#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {props.results.map((result, index) => {
       return  (

        <tr key={index}>
          <td><img alt="profilepic" src={result.picture.thumbnail}/></td>
          <td>{result.cell}</td>
          <td>{/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */
          result.name.first}
          </td>
          <td>{result.name.last}</td>
          <td>{result.email}</td>
         
        </tr>
      )})}
      </tbody>
      </table>
  );
}

export default ResultList;