import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navebar.css"


class Nav_bar extends Component {
    render(){
        return(
            <div className="">
                <nav className="navbar  nav_background">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <img src="./logo.png" alt="" width="150px"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-right">
                        <li className="nav-item">
                            <a href="" className="nav-link text-light">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-light">Account</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-light">Transaction</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-light">Statistics</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav_bar