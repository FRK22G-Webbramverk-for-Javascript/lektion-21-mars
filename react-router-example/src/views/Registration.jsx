import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Ger oss en funktion att kalla på för att navigera till en annan sida

    // const [user, setUser] = useState({
    //     username: '',
    //     email: '',
    //     password: ''
    // });

    // function handleChange(event) {
    //     setUser((currentState) => ({
    //         ...currentState,
    //         [event.target.name]: event.target.value
    //     }));
    // }

    function handleClick() {
        const user = {
            username: username,
            email: email,
            password: password
        }

        navigate('/account', { state: { user: user } }); // Här kan vi skicka med ett objekt till nästa sida när vi navigerar
    }

    return (
        <section>
            <h2>Registrering</h2>
            <input type="text" onChange={ (event) => setUsername(event.target.value) }
            placeholder="Användarnamn" />
            <input type="text" onChange={ (event) => setEmail(event.target.value) }
            placeholder="E-post" />
            <input type="password" onChange={ (event) => setPassword(event.target.value) }
            placeholder="Lösenord" />
            <button onClick={ handleClick }>Skapa konto</button>
        </section>
    )
}

export default Registration
