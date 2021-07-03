import { Component } from "react";
import {AVERAGE_PRICE_POINT} from './../Data'
import Card from './Card'

class MidPart extends Component{
    createCards=()=>{
       return AVERAGE_PRICE_POINT[this.props.ShowCards].Qualified.map(data=>{
            return <Card data={data} clickedOnTrail={this.props.clickedOnTrail} key={data.uid}></Card>
        })
    }
    render(){
        return(
            <div style={{marginTop:'70px',padding:'0'}} className="row align-items-end">
                {this.createCards()}
                <div className="col-md-3 col-sm-2" >
       
        <div className="text-white p-2 text-center" style={{background:'#b46cba'}}>
                <h4>Enterprise</h4>
        </div>
        <div className=" p-2 text-center " style={{background:'#edf5f7',height:'375px',position:'relative'}}>
                <h3 style={{position:'absolute',top:'50%',transform:'translate(0%,-50%)'}}>
                    Want More Than 80 Qualified Lead Per Month
                </h3>
        </div>
        <div className=" p-2 text-center" style={{marginTop:'6px',color:'#db1802',border:'1px solid #db1802'}} onClick={()=>this.props.clickedOnTrail('Get IN Touch')}>
                <h4>Get In Touch</h4>
        </div>
        </div>
            </div>
        )
    }
}
export default MidPart