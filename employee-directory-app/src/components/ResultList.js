import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Photo</th>
      <th scope="col" >#</th>
      <th scope="col" onClick={props.handleSort}>First</th>
      <th scope="col" onClick={props.handleSort}>Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {props.results.map((result, index) => {
       return  (

        <tr key={index}>
          <td><img alt="profilepic" src={result.picture.thumbnail}/></td>
          <td>{result.cell}</td>
          <td>{
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