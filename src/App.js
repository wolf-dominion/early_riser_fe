import React from 'react';
import './App.css';
import DayInfo from './DayInfo'
import DayInfo2 from './DayInfo2'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      latLong: [],
    }
    this.parseJSON = this.parseJSON.bind(this)
  }

  componentDidMount(){
    this.getCoordinates()
  }

  getCoordinates = () => {
    const user_zipcode = 80021
    const zipcodeURL = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${user_zipcode}&facet=state&facet=timezone&facet=dst`
    fetch(zipcodeURL)
    .then(this.parseJSON)
    .then(geoInfo => this.setState({latLong: geoInfo.records[0].fields.geopoint}))
      
  }

  parseJSON = (response) => {
    return response.json()
  }
    
  displayCoor = (response) => {
    console.log('coordinates: ', response);
  }

  render(){
    return (
      <div className="App">
        <h1>Early Riser</h1>
        <DayInfo2 latLong={this.state.latLong}/>
      </div>
    )
  }
}

export default App;
