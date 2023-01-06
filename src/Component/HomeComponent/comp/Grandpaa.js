import Headers from "../header"


const Grandpa = ()=>{
    let galaray = ["galray1","galary2","galary3","galaray4","galaray5","galaray6","galaray7","galaray8"]

    return(<>
      <div>
      <Headers/>
      </div>
      <div style={{display:"grid",gridTemplaterows:"20% 40% 40%",textAlign:"center",padding:"10px"}}>
      <img src="grandpaa1.png" style={{width:"100%",margin:"auto"}}/>
      <h1 style={{marginTop:"20px"}}>Grandpa’s Den</h1>
      <p style={{margin:"auto",marginBottom:"20px"}}>Located in a separate section of Grandmama’s Cafe, Phoenix Mills, Grandma opens doors to her beloved & well-travelled husband’s precinct, The Grandpa’s Den! We welcome all our patrons to enjoy 12 delicious & handcrafted, not to forget Instagram worthy cocktails inspired by our very own Grandpa’s travel and adventures from across the world. Enjoy the hospitality at its best in this cocktail lounge serving vintage spirits and some of Grandpa’s favourite dishes from Grandmama’s kitchen. Also, cast eyes upon his legendary collection of global artefacts and antiques.
This cozy 37 seater promises to be a place of refined enjoyment and fun in the comforts of our fun-loving Grandpa’s chamber!</p>
      </div>
      <div style={{margin:"auto",background:"#A9CAB2",marginTop:"30px",display:"flex",flexDirection:"column",padding:"10px"}}>
        <div style={{height:"20%",textAlign:"center"}}><h1 style={{margin:"3%",textAlign:"centre"}}>Galaray</h1></div>
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
     
    </>)
}

export default Grandpa;