import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Photo</th>
      <th scope="col" >#</th>
      <th scope="col" onClick={props.handleSort}>First<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></th>
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