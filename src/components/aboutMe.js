import { Component } from "react";
import userImg from '../assets/user.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Hello I'm <span style={{ color: "green" }}>Arpan!</span></h1>
                <img src={userImg} style={{ height: "100px", width: "100px" }} />

                <p>I am Software Developer based in Halifax, Canada</p>
                <p>I Have 7 years of experience in software development and I joined MSCDA to learn more about data analytics and bid data platform.</p>
            </div>
        );
    }
}

export default AboutMe;