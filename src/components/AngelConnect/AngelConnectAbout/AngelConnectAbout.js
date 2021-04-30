import { Component } from "react";
import './AngelConnectAbout.css';
import border from '../../../assets/border.png';
import logo from '../../../assets/angel_connect_white.png'
export default class AngelConnectAbout extends Component {
    render() {
        return (
            <div className="angel-connect-about">
              <div className='angel-heading'> ANGEL CONNECT </div>
              <p className='angel-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas proin dapibus orci quisque 
              justo dui morbi. Id interdum eu nec at eros pretium.Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Maecenas proin dapibus orci quisque justo dui morbi. Id interdum eu nec at 
              eros pretium.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas proin dapibus orci quisque 
              justo dui morbi. Id interdum eu nec at eros pretium.Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Maecenas proin dapibus orci quisque justo dui morbi. Id interdum eu nec at 
              eros pretium.
              </p>
               <img src={ logo } alt='AngelConnect' className='angelImg'/>
            </div>
          );
        }
}