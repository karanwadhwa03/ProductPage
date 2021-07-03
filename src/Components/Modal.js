import {CheckBoxesData1,CheckBoxesData2} from './../Data/index'
import CheckBoxes from './CheckBoxes'

const Modal=(props)=>{
    console.log(props.Formdetails.email)
    return (
        <>
<div style={{position: 'absolute',left: '50%',top: '50%',width: '80%',transform: 'translate(-50%, -50%)'}}>
  <div class="modal-dialog" style={{maxWidth:'700px'}} role="document">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title " >Get Started With Squad Voice</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={props.closeHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5> Plan Selected :{props.selectedQualified}</h5>
        <br></br>

        <p>Name</p>
        <input type="text" className="form-control" value={props.Formdetails.name} onChange={(e)=>props.changeHandler(e)} name="name"></input>
        <div className="row " style={{marginTop:'10px'}}>
        <div className="col">
        <p>Email Address</p>
        <input type="text" className="form-control" name='email' value={props.Formdetails.email} onChange={(e)=>props.changeHandler(e)} ></input>
        </div>
        <div className="col">
        <p>Phone No.</p>
        <input type="text" className="form-control" value={props.Formdetails.phone} onChange={(e)=>props.changeHandler(e)} name="phone"></input>
        </div>
        </div>

        <div className="row " style={{marginTop:'10px'}}>
        <div className="col">
        <p>Number of leads you generate in a month</p>
        <input type="number" className="form-control" value={props.Formdetails.leads} onChange={(e)=>props.changeHandler(e)} name="leads"></input>
        </div>
        <div className="col">
        <p> Total leads in your CRM</p>
        <input type="number" className="form-control" value={props.Formdetails.leadsCRM} onChange={(e)=>props.changeHandler(e)} name="leadsCRM"></input>
        </div> 
        </div>

        <div className="row " style={{marginTop:'10px'}}>
        <div className="col">
        <p>Which CRM do you use</p>
        <input type="number" className="form-control" value={props.Formdetails.CRM} onChange={(e)=>props.changeHandler(e)} name="CRM"></input>
        </div>
        <div className="col">
        <p>Number Of Agents</p>
        <input type="text" className="form-control" value={props.Formdetails.agents} onChange={(e)=>props.changeHandler(e)} name="agents"></input>
        </div>
        <p style={{marginTop:'10px'}}>
            What are your biggest lead resources
        </p>

        <CheckBoxes 
        CheckBoxesChange={(e)=>props.changeCheckboxHandler(e)}
        data={CheckBoxesData1}></CheckBoxes>

        <p style={{marginTop:'10px'}}>
            How did you hear about us
        </p>

        <CheckBoxes 
        CheckBoxesChange={(e)=>props.changeCheckboxHandler(e)}
        data={CheckBoxesData2}></CheckBoxes>
        </div>
       
        



      </div>
      <div class="modal-footer" style={{justifyContent:'flex-start'}}>
        <button type="button" class="btn btn-primary text-right" onClick={()=>props.submitHandler()}>Submit</button>
        
      </div>
    </div>
  </div>
  </div>      


        </>


    )


}
export default Modal
