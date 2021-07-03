import {AVERAGE_PRICE_POINT} from './../Data/index'

const EachColumn=(props,data)=>{
    let Customstyle;
    if(props.ShowCards == data.id){
        Customstyle={background:'#b46cba',cursor:'pointer',color:'white',borderLeft:'2px solid #b46cba' }
    }
    else{
        Customstyle={background:'#edf5f7',cursor:'pointer',color:'#b46cba',borderLeft:'2px solid #b46cba' }
    }
    return (
        <div className=" col  p-3 text-center " style={Customstyle} key={data.id} onClick={() => props.ClickHanlder(data.id)} >
                <h4 >{data.PricePoint}</h4>
        </div>
    )
}

const CustomNavbar=(props)=>{
    const createColumns=()=>{
      return  AVERAGE_PRICE_POINT.map((data)=>{
            return EachColumn(props,data);
        })
    }

    return (
        <div className="row">
            {createColumns()}
        </div>
    )
}
export default CustomNavbar