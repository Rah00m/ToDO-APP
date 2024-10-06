import { useState } from 'react';
import './User.css'
function User() {
    const [name ,setname]=useState("");
    return (
        <div className="User">
            <div className="UserImg">
            <div className='Box'></div>
            </div>
            <div className="info">
                <input type="text" placeholder='Enter your name please' 
                value={name} 
                onChange={(event)=>{setname(event.target.value)}}
                />
                <button type='submit' >Save</button>
            </div>
        </div>
    )
}

export default User;
