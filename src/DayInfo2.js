import React, { Component } from 'react'

export default class DayInfo extends Component {
   constructor(props){
       super(props)
       this.state = {
        dayInfo: {},
    }
   }

   componentDidUpdate(){
        if (this.props.latLong){
            this.getDayInfo
        }
   }

    getDayInfo() {
        let tempDayInfo = {}
        const sunriseURL = `https://api.sunrise-sunset.org/json?lat=${this.props.latLong[0]}=${this.props.latLong[1]}&date=today`
        fetch(sunriseURL)
        .then(this.parseJSON)
        .then(preventInfinite)
        
        function preventInfinite(response){
            if (tempdayInfo != this.state.dayInfo) {
                this.setState({dayInfo: dayInfo.results})
            }
        } 

    }
          
      
    parseJSON = (response) => {
        return response.json()
    }
          
    render() {

        

        return (
            <div>
                <p>{this.props.latLong}</p>
            </div>
        )
    }
}