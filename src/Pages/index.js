import { Component } from 'react';
import Navbar from './../Components/CustomNavbar'
import MidPart from './../Components/MidPart'
import Modal from './../Components/Modal'

class Page extends Component{
  state={
    ShowCards:2,
    details:{
      name:'',email:'',phone:'',leads:'',leadsCRM:'',CRM:'',agents:''
    }
  }
  
  componentDidMount=()=>{
    if(localStorage.getItem('ShowCards')){
      this.setState({
        ShowCards:localStorage.getItem('ShowCards')
      })
    }
  }

  clickHandler=(id)=>{
    this.setState({
      ShowCards:id
    })
    localStorage.setItem('ShowCards',id);
  }

  clickedOnTrail=(data)=>{
    this.setState({
      selectedQualified:data,
      showModal:true
    })
  }
  
  changeCheckboxHandler=(e)=>{
    let name=e.target.name;
    let olddetails={...this.state.details};
    olddetails[name] =olddetails[name] ?false:true
    this.setState({
      details:olddetails
    })  
  }

  changeHandler=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    let olddetails={...this.state.details};
    olddetails[name]=value;
    this.setState({
      details:olddetails
    })
  }

  submitHandler=()=>{
    this.setState({
      showModal:false
    })
    var det=this.state.details;
    var keys=Object.keys(det);
    var Values=Object.values(det);
    var sum='';
    let old={...this.state.details};
        let traverse=Object.keys(old);
        traverse.forEach(name=>{
            old[name]='';
    })
    this.setState({
      details:old
    })
    for(let i=0;i<keys.length;i++){
      sum = sum + `${keys[i]} : ${Values[i]}  && `
    }
    alert(sum)
  }

  closeHandler=()=>{
    this.setState({
      showModal:false
    })
  }

  render(){
    return (
      <div style={{overflow:'hidden'}}>
        <Navbar
            ClickHanlder={(uid)=>this.clickHandler(uid)}
            ShowCards={this.state.ShowCards}
        ></Navbar>

        <MidPart
            ShowCards={this.state.ShowCards}
            clickedOnTrail={(data)=>this.clickedOnTrail(data)}
        ></MidPart>

        {this.state.showModal && 
        <Modal
            closeHandler={this.closeHandler} 
            Formdetails={this.state.details}
            changeHandler={(e)=>this.changeHandler(e)}
            selectedQualified={this.state.selectedQualified}
            changeCheckboxHandler={(e)=>this.changeCheckboxHandler(e)}
            submitHandler={this.submitHandler}
        ></Modal> }
      </div>
    )
  }
}
export default Page