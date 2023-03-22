import { useLocation } from "react-router-dom"

function Account() {
    const navigationState = useLocation(); // Hämtar från vårt "state" som vi skickade från Registration.jsx
    console.log(navigationState);

    return (
      <section>
        <p>Account</p>
        { /** Här använder vi oss av en tenary operator för att enbart visa något om vi har ett objekt som heter state och i det objektet ett som heter user annars visa <h2>Du har inget konto</h2> */}
        { navigationState?.state?.user ? 
            <article> 
                <p>{ navigationState.state.user.username }</p>
                <p>{ navigationState.state.user.email }</p>
                <p>{ navigationState.state.user.password }</p>
            </article>
            : <h2>Du har inget konto</h2>
        }
      </section>
    )
}
  
export default Account
  