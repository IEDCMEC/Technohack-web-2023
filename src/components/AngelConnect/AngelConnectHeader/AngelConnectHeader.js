import AngelConnectNavbar from '../AngelConnectNavbar/AngelConnectNavbar';
import './AngelConnectHeader.css';

import { Component } from "react";

export default class AngelConnectHeader extends Component {

    render() {
        return (
            <div className="angel-connect-header">
                <AngelConnectNavbar />
            </div>

          );
        }
}

