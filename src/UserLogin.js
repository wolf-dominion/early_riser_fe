import React, { Component } from 'react'

export default class UserLogin extends Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <form>
                <label>Username</label>
                <input name="username" onChange={this.handleChange}/>
                <label>Password</label>
                <input name="password" onChange={this.handleChange}/>
                <label>Location</label>
                <input name="location" onChange={this.handleChange}/>
                <input type="submit" />
                </form>
            </div>
        )
    }
}
