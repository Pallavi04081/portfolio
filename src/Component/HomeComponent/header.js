import Popup from 'reactjs-popup';

const Headers = ()=>{
    return(
        <>
        <nav class="navbar" style={{display:"gird",gridTemplateColumns:"auto auto",background:"#A9CAB2",padding:"20px"}}>
            <div>
         <a class="navbar-brand" href="/">Home</a>
        </div>
  <div>
    <div class="navbar-nav" style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto",color:"white"}}>
      <a class="nav-item nav-link active" href="#" style={{margin:"20px"}}>AboutUs</a>
      <Popup trigger={<a class="nav-item nav-link active" href="#" style={{margin:"20px"}}>Our Locations</a>} position="bottom center">
        <div style={{width:"80%",height:"50%",display:"grid",gridTemplateColumns:"15% 15% 15% 15%"}}>
            <img src="galaray4.png" style={{width:"100%",height:"100%"}}/>
            <img src="galaray5.png" style={{width:"100%",height:"100%"}}/>
            <img src='galaray6.png' style={{width:"100%",height:"100%"}}/>
            <img src='galaray7.png' style={{width:"100%",height:"100%"}}/>
            <img src='galaray8.png' style={{width:"100%",height:"100%"}}/>
            <img src='galaray4.png' style={{width:"100%",height:"100%"}}/>
            <img src="galaray6.png" style={{width:"100%",height:"100%"}}/>
            <img />
        </div>
      </Popup>
      <a class="nav-item nav-link active" href="#" style={{margin:"20px"}}>Testimonials</a>
      <a class="nav-item nav-link active" href="#" style={{margin:"20px"}}>Media Articles</a>
      <a class="nav-item nav-link active" href="#" style={{margin:"20px"}}>Grandpa’s Den</a>
    </div>
  </div>
</nav>
        </>
    )
}

export default Headers;