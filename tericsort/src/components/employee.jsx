import {nanoid} from "nanoid"
import "./form.css"
function Employees({data}){
return data.map((e)=>(
    <div className="empdiv" key={nanoid()}>
        
        <p> Name: {e.name}</p>
        <p>Email: {e.email}</p>
        <p>Phoneno: {e.phone}</p>
        <p>Dob: {e.dob}</p>
        <p>Gender: {e.gender}</p>
        <p>hobbie: {e.hobbies}</p>
    </div>
))
}
export{Employees};