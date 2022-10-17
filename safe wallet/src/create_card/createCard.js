import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./createCard.css";

class CreateCard extends Component {
    constructor(props){
        super(props);
        this.num=0;
        this.table_card=[]
        this.state = {
            title :'',
            fName :'',
            lName : '',
            bin:'', 
            month:'',
            year: '',
            payment_network:'',
            color:'#030303'
        }
    }

    handelChange=(e)=> {
        this.setState(
            {
                ...this.state,
                [e.target.name]:e.target.value
                
            }
            
        )

    }

   

    
     create_card=(e)=>{
        e.preventDefault();
        this.table_card.push(this.state)
        this.num++;
        this.create_new()
    }
    render(){
        return(
            <div>            
                <div className=" row me-1   ">
                    <h2 className="text-center p-5">Create a Card </h2>
                    <div className="col-6 p-5">
                        <form action="" onSubmit={this.create_card}>
                            <label htmlFor="" className="form-label">Bank Branding : </label>
                            {/* we call the function to change the value of the bank title  */}
                            <select name="title" id="" className="form-control  mb-4" onChange={this.handelChange } >
                                <option value="" selected disabled>Select Your Bank</option>
                                <option value="BANK OF AFRICA">Bank of Africa</option>
                                <option value="CIH BANK">CIH bank</option>
                                <option value="ATTIJARIWAFA BANK">Attijariwafa Bank</option>
                                <option value="BANK AL-MAGHRIB">Bank al-maghrib</option>
                            </select>

                            <label htmlFor="" className="form-label">First Name :</label>
                            <input type="text" name="fName" className="form-control mb-4" onChange={this.handelChange} />

                            
                            <label htmlFor="" className="form-label">Last Name :</label>
                            <input type="text" name="lName" className="form-control mb-4" onChange={this.handelChange} />


                            <label htmlFor="" className="form-label">Account Number (BIN) :</label>
                            <input type="number" name="bin" className="form-control mb-4" placeholder="4111 111 111 111" onChange={this.handelChange}/>

                            <label htmlFor="" className="form-label">Expiration Date : </label>
                            <div className="d-flex pb-3" >
                                <input type="number"  name="month" id="" className="form-control w-25 me-5" onChange={this.handelChange}/>
                                <input type="number" className="form-control w-25" name="year" id="" onChange={this.handelChange}/>
                            </div>

                            <label htmlFor="" className="form-label">Payment Network : </label>
                            <select name="payment_network" id="" className="form-control  mb-4" onChange={this.handelChange}>
                                <option value="" selected disabled>Select Payment Network</option>
                                <option value="./visa.png">Visa</option>
                                <option value="./mastercard.png">Mastercard</option>
                                <option value="./discover.png">Discover</option>
                                <option value="./american-express.png">American Express</option>
                                <option value="./paypal.png">PayPal</option>
                            </select>

                            <label htmlFor="" className="form-label">Card Color :</label><br />
                            <input type="color" name="color" className=" mb-4 " onChange={this.handelChange}/><br />

                            <div className=" text-end">
                                <button className="btn btn-dark me-3" onClick={this.create_card} >Create New card</button>
                                
                            </div>

                        </form>
                    </div>




                    {/* the card  */}
                    <div className="col-6 bg-light " id="card">
                        <div className="m-5 card border-rounded" style={{backgroundColor: this.state.color,}}>
                                <div className="ps-4 pt-3 mb-3">
                                    <h5>
                                        <b>                                    
                                            {
                                                this.state.title
                                            }
                                        </b>
                                    </h5>

                                </div>
                                <div className="ps-4 mb-2">
                                    <img src="./chip_card.png" alt="" width="60px"/>
                                </div>
                                <div className="ps-4 ">
                                    <h4>
                                        {
                                            this.state.bin
                                        }
                                    </h4>
                                </div>
                                <div className="ps-5 ms-5 row ">     
                                    <div className="col-3 row ms-5">
                                        <div className="col-5 p-0"> 
                                            <i className="date_valid">
                                                VALID <br />
                                                THRU
                                            </i>
                                        </div>
                                        <div className="col-4 p-0 pt-2">
                                            <img src="./arow.png" alt=""  width="20px"/>
                                        </div>
                                        
                                    </div>
                                    <div className="row col date_valid ps-0 ">
                                        <i className="pt-2 ps-0">
                                            
                                            Month/Year <br />
                                            {this.state.month}/{this.state.year}
                                        </i>
                                    </div>                          
                                    
                                </div>
                                <div className="mt-4 ps-4 mb-3 row">
                                    <div className="col-6">
                                        <h5>
                                            <i>
                                                Mr :{
                                                    this.state.lName.toUpperCase() + " "+
                                                    this.state.fName.toUpperCase()
                                                }
                                            </i>
                                        </h5>
                                    </div>
                                    <div className="col-6 text-end pe-5">
                                        <img src={this.state.payment_network} alt="" width="70px" />
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        
                        {
                            this.table_card.map((item)=>(
                               
                            <div className="m-5 card border-rounded" style={{backgroundColor: item.color,}}>
                                <div className="ps-4 pt-3 mb-3">
                                    <h5>
                                        <b>                                    
                                            {
                                                item.title
                                            }
                                        </b>
                                    </h5>

                                </div>
                                <div className="ps-4 mb-2">
                                    <img src="./chip_card.png" alt="" width="60px"/>
                                </div>
                                <div className="ps-4 ">
                                    <h4>
                                        {
                                            item.bin
                                        }
                                    </h4>
                                </div>
                                <div className="ps-5 ms-5 row ">     
                                    <div className="col-3 row ms-5">
                                        <div className="col-5 p-0"> 
                                            <i className="date_valid">
                                                VALID <br />
                                                THRU
                                            </i>
                                        </div>
                                        <div className="col-4 p-0 pt-2">
                                            <img src="./arow.png" alt=""  width="20px"/>
                                        </div>
                                        
                                    </div>
                                    <div className="row col date_valid ps-0 ">
                                        <i className="pt-2 ps-0">
                                            
                                            Month/Year <br />
                                            {item.month}/{item.year}
                                        </i>
                                    </div>                          
                                    
                                </div>
                                <div className="mt-4 ps-4 mb-3 row">
                                    <div className="col-6">
                                        <h5>
                                            <i>
                                                Mr :{
                                                    item.lName.toUpperCase() + " "+
                                                    item.fName.toUpperCase()
                                                }
                                            </i>
                                        </h5>
                                    </div>
                                    <div className="col-6 text-end pe-5">
                                        <img src={item.payment_network} alt="" width="70px" />
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        )) }
                    </div>
                            
                        
                </div>
            </div>
        )
    }
}
export default CreateCard