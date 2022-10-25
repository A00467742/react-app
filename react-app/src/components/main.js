import { Component } from "react";
import AboutMe from "./aboutMe";
import WeatherDetails from "./weather";

class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            isAboutMe: true
        }
    }

    render() {
        return (
            <div>
                <a onClick={() => this.setState({ isAboutMe: true })} href="#" style={{ padding: "5px", color: this.state.isAboutMe === true ? "blue" : "black" }}>
                    About Me
                </a>
                <a onClick={() => this.setState({ isAboutMe: false })} href="#" style={{ padding: "5px", color: this.state.isAboutMe === false ? "blue" : "black" }}>
                    My Town
                </a>
                <br />
                {this.state.isAboutMe === true ?
                    <AboutMe /> :
                    <WeatherDetails />}
            </div>
        )
    }
}


export default MainComponent;