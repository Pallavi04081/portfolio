import { Link } from "react-router-dom";


function Home() {

 let galaray = ["galray1","galary2","galary3","galaray4","galaray5","galaray6","galaray7","galaray8"]
 
 let ContactDetails=[{
  heading:"Kemps Corner",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
 {
  heading:"Juhu",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
 {
  heading:"Ghatkopar",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
 {
  heading:"Dadar",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
 {
  heading:"Vashi",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
 {
  heading:"Lower Parel",
  details:"7, Janta Industrial Estate, Senapat Bapat Marg, Opp. Phoenix Mills, Lower Parel, Mumbai 400013",
  mobileNo:"+91-111111111"
 },
]

  return (
    <div className="App">
      <div style={{height:"80vh",padding:"10px"}}>
        <img src="coverphoto.png" style={{background:"cover",height:"100%",width:"100%"}} />
      </div>
      <div >
      <div class="card">
        <div>
        <div style={{position:"relative",width:"100%",height:"100%"}}>
        <img src="coverphoto3.png" style={{width:"70%",height:"90%",position:"absolute",top:"5%",bottom:"5%",left:"2%"}}/>
        <img src="coverphoto4.png" style={{width:"25%",height:"25%",background:"cover",position:"absolute",left:"60%",top:"8%"}}/>
        <img src="coverphoto5.png" style={{width:"25%",height:"25%",background:"cover",position:"absolute",left:"55%",top:"38%"}}/>
        <img src="coverphoto6.png" style={{width:"25%",height:"25%",background:"cover",position:"absolute",left:"60%",top:"67%"}}/>
        </div>
        </div>
        <div style={{position:"relative"}}>
        <h1 style={{color:"white",fontFamily:"Abraham Lincoln",fontWeight:"400",position:"absolute",top:"3%",fontSize:"60px"}}>About Us</h1>
        <p style={{position:"absolute",top:"18%",color:"white",paddingRight:"13px",fontSize:"14px"}}>Lorem ipsum dolor sit amet consectetur. A pellentesque habitant vel vitae. Sem pharetra sed consectetur consectetur vitae. Aenean vel magna viverra arcu diam lorem. Cras ut dictum molestie risus. Eget a in urna viverra adipiscing.Lorem ipsum dolor sit amet consectetur. 

A pellentesque habitant vel vitae. Sem pharetra sed consectetur consectetur vitae. Aenean vel magna viverra arcu diam lorem. Cras ut dictum molestie risus. Eget a in urna viverra adipiscing. A pellentesque habitant vel vitae. Sem pharetra sed consectetur consectetur vitae.</p>
        <button style={{position:"absolute",top:"85%",borderRadius:"40px",background:" #A9CAB2",border:"none",height:"44px",width:"130px",marginLeft:"5px"}}><Link to="/aboutus" style={{textDecoration:"none"}}>know more</Link></button>
        </div>
        </div>
      </div>
      <div style={{background:"#A9CAB2",marginTop:"30px",display:"flex",flexDirection:"column"}}>
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
        <div className="cover4">
        <div className="cover41">
          <h1>Get your Order in less time !</h1>
        </div>
        <div className="cover42">
          <div className="cover42h">
            <h5 style={{textAlign:"right",margin:"20px"}}>Food Delivery</h5>
            <h5 style={{textAlign:"left",margin:"20px"}}>Reserve Table</h5>
          </div>
          <div className="cover42c">
            <div style={{width:"100%",height:"100%"}}>
              <h5>Lorem ipsum dolor sit amet consectetur.</h5>
              <p>Lorem ipsum dolor sit amet consectetur. Amet posuere integer netus sapien consequat non nisl fermentum. Purus malesuada leo sed pretium scelerisque orci. Tortor molestie placerat gravida iaculis nunc feugiat.</p>
              <button style={{borderRadius:"40px",background:" #A9CAB2",border:"none",height:"44px",width:"130px",marginLeft:"5px"}}>Know More</button>
            </div>
            <div style={{width:"100%",height:"100%"}}>
             <img src="delivery.png"/>
           </div>
          </div>
        </div>
        </div>
        <div className="cover5">
          <div className="cover41" style={{paddingTop:"0px"}}>
            <h5 style={{fontSize:"24px",marginBottom:"30px"}}>Testimonials</h5>
          </div>
          <div className="cover52">
            <div style={{padding:"10px",textAlign:"centre",padding:"30px"}}>
              <h6>James</h6>
              <p>Lorem ipsum dolor sit amet consectetur. Amet posuere integer netus sapien consequat non nisl fermentum. Purus malesuada leo sed pretium scelerisque orci. Tortor molestie placerat gravida iaculis nunc feugiat.</p>
            </div>
            <div style={{padding:"10px",textAlign:"centre",padding:"30px",borderLeft:"1px solid gray"}}>
              <h6>Jessica</h6>
              <p>Lorem ipsum dolor sit amet consectetur. Amet posuere integer netus sapien consequat non nisl fermentum. Purus malesuada leo sed pretium scelerisque orci. Tortor molestie placerat gravida iaculis nunc feugiat.</p>
            </div>
          </div>
        </div>
        <div class="cover6">
          <div className="cover61">
            <h3>Media Articles</h3>
          </div>
          <div className="cover62">
            <div className="cover621">
              <img src="cover61.png"/>
              <h5>Lorem ipsum dolor</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Amet posuere integer netus sapien consequat non nisl fermentum. Purus malesuada leo sed pretium scelerisque orci. Tortor molestie placerat.
              </p>
            </div>
            <div className="cover622">
            <img src="cover61.png"/>
            <h5>Lorem ipsum dolor</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur. Amet posuere integer netus sapien consequat non nisl fermentum. Purus malesuada leo sed pretium scelerisque orci. Tortor molestie placerat.
            </p>
            </div>
          </div>
        </div>
        <div class="footer">
          <div className="footer1">
            <div class="footer11"></div>
            <div style={{width:"30%",margin:"auto"}}>
            <img src="vector1.png" style={{width:"20%",margin:"5px"}}/>
            <img src="vector2.png" style={{width:"20%",margin:"5px"}}/>
            <img src="vector3.png" style={{width:"20%",margin:"5px"}}/>
            </div>
          </div>
          <div className="footer2">
          <div className="footer21">
            <h5><Link to="/aboutus" style={{color:"white",textDecoration:"none"}}>About Us</Link></h5>
            <h5><Link to="/kems" style={{color:"white",textDecoration:"none"}}>Our Locations</Link></h5>
            <h5>Testimonials</h5>
            <h5>Media Articles</h5>
            <h5><Link to="/grandpa" style={{color:"white",textDecoration:"none"}}>Grandpa’s Den</Link></h5>
          </div>
          <div className="footer22">
            {
              ContactDetails.map((ele)=>{
              return(
                <>
                <div>
                  <h6>{ele.heading}</h6>
                  <p>{ele.details}</p>
                  <p>{ele.mobileNo}</p>
                </div>
                </>
              )
              })
            }
          </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
