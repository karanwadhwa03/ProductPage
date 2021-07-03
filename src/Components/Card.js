
const Card=(props)=>{
        var styleButton;
        if(props.data.uid===1){
                styleButton={
                        background:'#ff2626',marginTop:'6px',color:'white',border:'1px solid #ff2626'
                }  
        }
        else{
                styleButton={
                        marginTop:'6px',color:'#ff2626',border:'1px solid #ff2626'
                }  
        }
    return(
        <div className="col-md-3 col-sm-2" >
       {props.data.uid===1 ?<div className="text-white p-2 text-center" style={{background:'#ff2626'}}>
                <h4>Most Popular</h4>
        </div>:''}
        <div className="text-white p-2 text-center" style={{background:'#b46cba'}}>
                <h4>{props.data.leadsPermonths}</h4>
        </div>
        <div className=" p-2 text-center" style={{background:'#edf5f7'}}>
                <h1>{props.data.perQualified}</h1>
                <h5>Per Qualified Lead</h5>
                <p>--------------------------------</p>
                <h5>Qualified Lead Per Month</h5>
                <h4>{props.data.leadsPermonths}</h4>
                <p>--------------------------------</p>
                <h5>Platform Fee</h5>
                <h4>{props.data.platFormFee}</h4>
        </div>
        <div className="text-white p-2 text-center" style={{background:'#b46cba'}}>
                <h4>{props.data.Total}</h4>
        </div>
        <div className=" p-2 text-center " style={{cursor:'pointer',...styleButton}}  onClick={()=>props.clickedOnTrail(props.data.leadsPermonths)}>
                <h4>Start Your Trial</h4>
        </div>
</div>
    )

}
export default Card