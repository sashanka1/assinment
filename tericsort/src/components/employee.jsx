import {nanoid} from "nanoid"
import "./form.css"
function Employees({data}){
return data.map((e)=>(
    <div className="empdiv" key={nanoid()}>
        
        <p>{e.name}</p>
        <p>{e.email}</p>
        <p>{e.phone}</p>
        <p>{e.dob}</p>
        <p>{e.gender}</p>
        <p>{e.hobbies}</p>
    </div>
))
}
export{Employees};