import Headers from "../header"


const Kems = ()=>{
    let galaray = ["galray1","galary2","galary3","galaray4","galaray5","galaray6","galaray7","galaray8"]

    return(<>
      <div>
      <Headers/>
      </div>
      <div style={{display:"grid",gridTemplaterows:"20% 40% 40%",textAlign:"center",padding:"10px"}}>
      <h1 style={{marginTop:"20px"}}>Kemps Corner</h1>
      <p style={{width:"70%",margin:"auto",marginBottom:"20px"}}>Lorem ipsum dolor sit amet consectetur. Eget cras pellentesque pellentesque at eu suspendisse et nam mauris. Lorem ipsum dolor sit amet consectetur. Eget cras pellentesque pellentesque at eu suspendisse et nam mauris. Lorem ipsum dolor sit amet</p>
      <img src="grandpaa1.png" style={{width:"60%",margin:"auto"}}/>
      </div>
      <div style={{width:"98vw",margin:"auto",background:"#A9CAB2",marginTop:"30px",display:"flex",flexDirection:"column",padding:"10px"}}>
        <div style={{height:"20%",textAlign:"center"}}><h1 style={{margin:"3%"}}>Galaray</h1></div>
        <div style={{height:"80%",width:"80%",display:"grid",gridTemplateColumns:"auto auto auto auto",gridTemplateRows:"40% 40%",columnGap:"5px", rowGap:"5px",margin:"auto"}}>
       {
        galaray.map((ele)=>{
          return(
            <>
             <div>
            <img src={`${ele}.png`} style={{width:"100%",height:"100%"}}/>
          </div>
            </>
          )
        })
       }
        </div>
        </div>
        <div className="cover5">
          <div className="cover41" style={{paddingTop:"0px"}}>
            <h5 style={{fontSize:"24px",marginBottom:"30px"}}>Locations</h5>
          </div>
          <div className="cover52">
            <div style={{textAlign:"left",padding:"10px",width:"50%",marginTop:"30px"}}>
              <h6 style={{fontWeight:"600"}}>Address</h6>
              <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur. Pellentesque non nisl vulputate odio feugiat facilisis curabitur in. Id purus aenean et lacus.</p>
              <h6 style={{fontWeight:"600"}}>Contact Info</h6>
              <p style={{fontSize:"12px"}}>oyekake@gmail.com</p>
              <h6 style={{fontWeight:"600"}}>Opening Hours</h6>
              <p style={{fontSize:"12px"}}>Tuesday - Sunday</p>
            </div>
            <div style={{padding:"10px",textAlign:"centre",padding:"30px",borderLeft:"1px solid gray",width:"50%"}}>
              <img src="graph.png"  style={{width:"100%",height:"100%"}}/> 
            </div>
          </div>
        </div>
    </>)
}

export default Kems;