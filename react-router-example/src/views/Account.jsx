import { useLocation } from "react-router-dom"

function Account() {
    const navigationState = useLocation();
    console.log(navigationState);

    return (
      <section>
        <p>Account</p>
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
  