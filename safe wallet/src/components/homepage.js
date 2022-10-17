import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./homepage.css"

class Home_page extends Component {
    
    render(){
        return(
            <div className="home_background h-100" >
                <div className="text-light home_text w-100 p-5 pt-0 d-flex align-items-center">
                    <h4 className="text w-50 ">
                        Hi! Safe Wallet allows you to secure, manage, and exchange your favorite cryptocurrencies like Bitcoin, Ethereum, WSN, and more from a beautiful, easy to use wallet that puts you in control of your wealth.
                    </h4>
                </div>
                
            </div>
        )
    }
}


export default Home_page