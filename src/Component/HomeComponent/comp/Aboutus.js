import Headers from "../header"

const AboutUs = ()=>{
    return(<>
      <div>
      <Headers/>
      </div>
      <div style={{display:"grid",gridTemplateRows:"auto auto auto",margin:"30px 0px"}}>
        <div style={{width:"80%",display:"grid",gridTemplateColumns:"50% 50%",margin:"auto"}}>
            <div style={{width:"90%",background:"#D55555",margin:"auto"}}>
                <img src="aboutus1.png" style={{width:"95%"}}/>
                </div>
            <div style={{width:"90%",margin:"auto"}}>
                <p>Step into your average restaurant or pub today and you know exactly what you will see. Bare brick walls, light bulbs hanging above tables, exposed pipes, etc. Since when did the need for such bland monotony arise? Don’t we all need some colour in our lives? Rustic and industrial is all well and good, but shouldn’t restaurant interiors be happy and vibrant too?</p>
            </div>
        </div>
        <div style={{width:"80%",display:"grid",gridTemplateColumns:"50% 50%",margin:"auto"}}>
        <div style={{width:"90%",margin:"auto"}}>
            <p>Step into your average restaurant or pub today and you know exactly what you will see. Bare brick walls, light bulbs hanging above tables, exposed pipes, etc. Since when did the need for such bland monotony arise? Don’t we all need some colour in our lives? Rustic and industrial is all well and good, but shouldn’t restaurant interiors be happy and vibrant too?</p>
        </div>
        <div style={{width:"90%",background:"#A9CAB2",margin:"auto"}}>
            <img src="aboutus2.png" style={{width:"95%",margin:"auto"}}/>
        </div>
        </div>
        <div style={{width:"80%",display:"grid",gridTemplateColumns:"50% 50%",margin:"auto"}}>
        <div style={{width:"90%",background:" #00C1A9",margin:"auto"}}>
            <img src="aboutus3.png" style={{width:"95%",margin:"auto"}}/>
        </div>
        <div style={{width:"90%",margin:"auto"}}>
            <p>Step into your average restaurant or pub today and you know exactly what you will see. Bare brick walls, light bulbs hanging above tables, exposed pipes, etc. Since when did the need for such bland monotony arise? Don’t we all need some colour in our lives? Rustic and industrial is all well and good, but shouldn’t restaurant interiors be happy and vibrant too?</p>
        </div>
        </div>
      </div>
      <div style={{background:"#A9CAB2",display:"grid",gridTemplateColumns:"30% 70%"}}>
        <div style={{width:"50%",margin:"auto"}}>
         <img src="aboutus1.png" style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
        </div>
        <div style={{width:"80%",margin:"auto"}}>
            <h5>Abhayraj Kohli </h5>
            <p>And this rings very true, for the café was designed by the owners themselves! Mr Abhayraj Kohli and his wife, Simar Kohli.
In a day and age where the importance of restaurant decor has dwindled down to stark furnishings and minimal personal touches, Grandmama’s Café shines through with its most unique spin on a café. It can be whatever you want it to be – your favourite cozy corner at home, your grandmother’s old house filled with memories or even your very own personal tea party in Wonderland!</p>
        </div>
      </div>
    </>)
}

export default AboutUs;