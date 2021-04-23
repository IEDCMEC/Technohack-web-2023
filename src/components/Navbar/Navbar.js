import { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-link">Speakers</div>
                <div className="nav-link active">Competitions</div>
                <div className="nav-link">Faq</div>
                <div className="nav-link">About</div>
            </div>
        )
    }
}    