import {React,Component} from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./money_tracker.css"

class Money_tracker extends Component {
    constructor (props){
        super(props);
        this.expenses=[]
        this.i=0
        this.state = {
            Amount :0,
            price:0,
            expense_name:""
        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        }
        )
    }

    myamount=(e)=>{
         this.my_amount= this.state.Amount
        
    }

    AddToExpenses_talbel=(e)=>{
        e.preventDefault()
        
        // add object to table of epenses
        this.expenses.push({ Expense_name:this.state.expense_name , Price:this.state.price, index:this.i.toString() }) 
        this.setState(
            {
                Amount : this.state.Amount - this.state.price,
                price:0,
                expense_name:""

            }
        )
        
        document.getElementById("expense_name").value=""
        document.getElementById("price").value=""
        // I use this i to get the index of the table (whene we click for the button the i get incrimented )
        this.i++

    }


    remove_expense=(e)=>{

        // I used indexOf because for example whene we remove item in the midell the index change
        // let index= this.expenses.indexOf(e.target.name)
        const index= this.expenses.map(item => item.index).indexOf(e.target.name);
        this.setState(
            {
                Amount: this.state.Amount + parseInt(this.expenses[index].Price) 
            }
        )
        this.expenses.splice(index ,1)


    }

    render(){
        return (
            <div className="bg-dark text-light m-0">
                <div className="p-5">                
                    <h3 className="text-center ">Money tracking </h3>
                    <div className="p-5 d-flex justify-content-center">
                        <div className=" w-50 ">
                            <form action="" className="" onSubmit={this.handleChange}>
                                <label htmlFor="" className="form-label"><b> Your Amount</b></label>
                                <div className="row">
                                    <div className="col-8">
                                        <input type="number" name="Amount" id="" className="form-control" placeholder="2000,34" onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-secondary" onClick={this.myamount}>Create</button>
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-center">
                                <div className="w-25 bg-info mt-5 p-2 rounded-2 text-center ">
                                    <b>{
                                        this.state.Amount
                                    } Dh</b> 
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>



                    <div className=" d-flex justify-content-center">
                        <div className=" boxshadow w-50 p-4 rounded-3">
                            <h4 className="mb-4 ">Add Expense</h4>
                            <form action="">
                                <input type="text" id="expense_name" name="expense_name" className="form-control mb-3" placeholder="Expense Name : coffee" onChange={this.handleChange}/>
                                <input type="number" id="price" name="price" className="form-control" placeholder="Price" onChange={this.handleChange} />
                                <div className="text-center">
                                    <button className="btn btn-secondary mt-3" onClick={this.AddToExpenses_talbel}>Add Expense</button>
                                </div>                                
                            </form>
                            <hr />
                            <div className="expense_manage mt-5">
                                <table  id="expenses" className="table table-dark table-striped table-hover ">
                                    {/* <tr>
                                        <td>
                                            {
                                                this.state.expense_name
                                            }
                                        </td>
                                        <td>
                                            {
                                                this.state.price
                                            } Dh
                                        </td>
                                        
                                    </tr> */}
                                    {
                                        this.expenses.map((item)=>(
                                            
                                            <tr>
                                                
                                                <td>
                                                    {
                                                        item.Expense_name
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        item.Price
                                                    } Dh
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-danger" onClick={this.remove_expense} name={item.index}>remove</button>
                                                </td>
                                                
                                            </tr>
                                        ))
                                    }
                                </table>                                
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        )
    }
}


export default Money_tracker