import React, { Component } from 'react'
// import { getNodeText } from '@testing-library/react'

export default class DayInfo extends Component {
   constructor(props){
       super(props)
       this.state = {
        dayInfo: {},
    }
   }

   componentDidUpdate(){
       console.log("update")
       console.log(this.props.latLong)
        this.getDayInfo()
   }

   shouldComponentUpdate(nextProps, nextState){
       console.log("shouldUpdate")
       console.log("next", nextState.dayInfo)
       console.log("this", this.state.dayInfo)
       if (this.state.dayInfo.sunrise && (nextState.dayInfo.sunrise === this.state.dayInfo.sunrise)){
           return false
       }
        return true
   }

    getDayInfo= () => {
        const sunriseURL = `https://api.sunrise-sunset.org/json?lat=${this.props.latLong[0]}&lng=${this.props.latLong[1]}&date=today`
        fetch(sunriseURL)
        .then(this.parseJSON)
        .then(result => {
            console.log(result)
            this.setState({dayInfo: result.results})
        })
    }

    parseJSON = (response) => {
        return response.json()
    }
          
    render() {

        return (
            <div>
                <p>{this.props.latLong}</p>
                <p>{this.state.dayInfo.sunrise}</p>
            </div>
        )
    }
}
