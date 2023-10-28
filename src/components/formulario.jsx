import react, { useState } from  'react';


const UserForm = (props)=>{

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const checkNombre = (firstname) =>{
    if ((firstname.length<=2) & (firstname!=="")) {
        return "Nombre debe tener más de dos caracteres"
    }}
    

    const checkApellido = (lastname) =>{
        if ((lastname.length<=2) & (lastname!=="")) {
            return "Nombre debe tener más de dos caracteres"
        }}
    
    const checkCorreo = (email) =>{
        if ((email.length<=5) & (email!=="")) {
            return "Correo debe tener más de cinco caracteres"
        }}


    const checkPassword = (password) =>{
        if ((password.length<=8) & (password!=="")) {
            return "Password debe tener más de ocho caracteres"
        }
    }

    const checkPassword2 = (password,confirmpassword) =>{
        if ((password !== confirmpassword)& (confirmpassword!=="")) {
            return "Contraseñas deben ser iguales"
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}}

    return(
        <form>
            <h3>{formMessage}</h3>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={(e) => setFirstname(e.target.value)  }></input>
                <p>{checkNombre(firstname)}</p>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={(e) => setLastname(e.target.value)}></input>
                <p>{checkApellido(lastname)}</p>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                <p>{checkCorreo(email)}</p>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                <p>{checkPassword(password)}</p>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={(e) => setconfirmPassword(e.target.value)}></input>
                <p>{checkPassword2(password,confirmpassword)}</p>
            </div>
            <button onClick={createUser}>Enviar</button>
        </form>
    )

}
    

export default UserForm;