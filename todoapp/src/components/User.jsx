import { useEffect, useState } from 'react';
import './User.css'
function User({onNameChange }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name ,setname]=useState("");
    const [image, setImage] = useState(null); 
    /////////////////////////////////////////////////////////////////////////////
    useEffect(()=>{
        const savedName = localStorage.getItem("userName");
        if (savedName) {
            setname(savedName);
            setIsSubmitted(true); // Automatically greet the user if a name exists
            onNameChange (savedName);
        }
    },[onNameChange]);
    const handleSubmit=()=>{
        if(name!==""){
            localStorage.setItem("username",name);
            setIsSubmitted(true);
            onNameChange (name);
        }
    };
// //////////////////////////////////////////////////
const handleBoxClick =()=>{
    document.getElementById('fileInput').click();
};
const ImageUpload =(event) =>{
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // Set the image as a base64 URL
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
};
    return (
        <div className="User">
            <div className="UserImg" onClick={handleBoxClick} >
            <div className='Box'
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            > {!image && <span>Click to upload your photo</span>}</div>
            <input 
            id="fileInput" 
            type='file'
            accept='image/*'
            style ={{display :"none"}}
            onChange={ImageUpload}
            />
            </div>
            {/* style={{ marginLeft: `calc((200px - ${name.length * 23 }px) /2)` }} // Assuming each character is around 8px wide */}
            {isSubmitted ? (
                <div className='UN'
                >                <h2>Hello,{name}!</h2>
                </div>
            ) : (
            <div className="info">
                <input type="text" placeholder='Enter your name please' 
                value={name} 
                onChange={(event)=>{setname(event.target.value)}}
                />
                <button className='btn' type='submit' onClick={handleSubmit} >Save</button>
            </div>
        )}
        </div>
    )
}

export default User;
