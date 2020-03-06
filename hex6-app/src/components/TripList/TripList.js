import React, { Component } from 'react';
// import tripListData from './TripListData.js'


import ComplexGrid from "./TripListGridContainer"

class CenteredGrid extends Component {
  constructor () {
    super ();
    this.state = {
      tripList: [],
    };
  }

componentDidMount () {
  fetch('http://localhost:3000/public/tripListData.json')
    .then(results => results.json())
    .then(results => console.log(results))
    .then (data => {
      let tripList = data.results.map(item => {
        return (
        <ComplexGrid tripListData={item} key={item.id}/>
        )
      })
      this.setStatus({tripList: tripList})
    })
}

render () {
  const { tripList } = this.state;
  return (
    <>
      {tripList.map(item => (
        <ComplexGrid tripListData={item} key={item.id}/>
      ))}
    </>
  )
} }

export default CenteredGrid;

// export default function CenteredGrid() {
//   return (
//     <>
//     {tripListData.map(item => (
//       <ComplexGrid tripListData={item} key={item.id}/>
//     ))}
//     </>
//   );
// }