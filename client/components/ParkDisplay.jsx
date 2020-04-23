import React, { Component } from 'react';
import { connect } from 'react-redux';
import Park from './park.jsx';

import '../stylesheets/styles.scss';
 
// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  city: state.park.city,
  stateCode: state.park.stateCode,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  activities: state.park.activities,
  
})

// Production Code =====================================================================================================
// class ParkDisplay extends Component {
//   render() {
//     return (
//       <div id="parkDisplayContainer">
//         <h1>{this.props.fullName}</h1>
//         <img id="parkDisplayImage" src={this.props.images}/>
//         <ul>
//           <li className="parkItem" id='description'>{this.props.description}</li>
//           <li className="parkItem"id='weather'>{this.props.weather}</li>
//         </ul>
//       </div>
//     )
//   }
// }

// Test Code ===========================================================================================================
class ParkDisplay extends Component {
  render() {
    return (
      // <div id="parkDisplayContainer">
      //   <h1>{this.props.fullName}</h1>
      //   <h3>{this.props.city}, {this.props.stateCode}</h3>
      //   <img id="parkDisplayImage" src={this.props.images}/>
      //   <ul>
      //     <li className="parkItem" id='description'>Description: {this.props.description}</li>
      //     <li className="parkItem"id='weather'>Weather: {this.props.weather}</li>
      //     <li className="parkItem" id='activities'>Activities: {this.props.activities}</li>
      //   </ul>
      <div id="parkDisplayContainer" >
        Annacostia National Park
        <div id="parkDisplayContainerSmall">
          <img id="parkDisplayImage" src="https://www.nps.gov/common/uploads/structured_data/3C82A965-1DD8-B71B-0B42F2CD698E11A7.jpg" width='250px'/>
        </div>
        <div>
          <ul>
            <li id='description'>"Welcome to Anacostia Park, your neighborhood national park in the heart of Washington, DC!\nEnjoy exercise along the river trail or relax by the water, Anacostia Park is a breath of fresh air and a space to unwind amid a bustling city."</li>
            <li id='weather'>"Spring brings mild temperatures and a light breeze along with springtime flower blooms. Summer can be hot and humid. Fall cools down and changing of the seasons brings changing of </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ParkDisplay);