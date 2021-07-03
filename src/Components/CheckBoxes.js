
const CheckBoxes=(props)=>{
    const createCheckBoxes=()=>{
        return props.data.map(data=>{
            return (
                <>
                    <input type="checkbox" style={{margin:'0 8px'}} name={data.name} onChange={(e)=>props.CheckBoxesChange(e,true)} ></input>
                    {data.name}
                </>
            )
        })
    }
    return(
        <div>
            {createCheckBoxes()}
        </div>
    )

}
export default CheckBoxes