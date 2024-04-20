import {Component} from "react";
import Brucewillis from "../Brucewillis";
import Details from "../Details";
import Header from "../Header";
import "./index.css";
class Home extends Component{
     render(){
        return (
            <>
            <Header/>
            <div className="bruce-details-con">
            <Brucewillis/>
             <Details/>
            </div>
            </>
        )
     }
}

export default Home