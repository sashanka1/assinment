import { useState, useEffect } from "react";
import "./form.css"

function Formdata(){
    const [formdata, setFromdata] = useState({
        // name, email, phone, dob, gender, hobbies
        name: "",
        email: "",
        phone: "",
        dob:"",
        gender:"",
        hobbies:""
      });
      const handlechange = (e) => {
        
          setFromdata({ ...formdata, [e.target.name]: e.target.value });
        
      
        
      };
      const submit = async() => {
        // console.log(formdata);
        
          
          let resp = await fetch(" http://localhost:8080/Employee", {
            method:"post",
            body:JSON.stringify({
                // name, email, phone, dob, gender, hobbies
                name: formdata.name,
                email: formdata.email,
                phone:formdata.phone,
                dob:formdata.dob,
                gender:formdata.gender,
                hobbies:formdata.hobbies
              
                 // adding  product to cart
    
            }),
            headers:{
                "content-Type":"application/json",
            },
            
        }).then((res) => {
            return res.json();
            });
            console.log( "resp",resp)
            
    
        
    
         
    
    
    
      };
      return (
        <>
        <div className="signinCont">
          <input
            type="text"
            name="name"
            value={formdata.name}
            placeholder="enter your name"
            required
            onChange={handlechange}
          />
          <input
            type="email"
            name="email"
            value={formdata.email}
            placeholder="enter your email"
            required
            onChange={handlechange}
          />
          <input
            type="password"
            name="phone"
            value={formdata.phone}
            placeholder="phone no"
            required
             onChange={handlechange} //name, email, phone, dob, gender, hobbies
          />
          <input
            type="date"
            name="dob"
            value={formdata.dob}
            placeholder="dob"
            required
            onChange={handlechange} //name, email, phone, dob, gender, hobbies
          />
          <input
            type="text"
            name="gender"
            value={formdata.gender}
            placeholder="gender"
            required
            onChange={handlechange}
          />
          <input
            type="text"
            name="hobbies"
            value={formdata.hobbies}
            placeholder="hobbies"
            required
            onChange={handlechange}
          />
          
          <button onClick={submit}>submit</button>
        </div>
        </>
)}

export{Formdata};