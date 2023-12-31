import UserGreeting from "./UserGreeting";


function App() {
  
    return(
      <>
        <UserGreeting loggedIn={true} username="DLew" day={10}/>
        <UserGreeting loggedIn={true} username="DLew"/>
        <UserGreeting loggedIn={false} username="DLew" day={9}/>
        <UserGreeting loggedIn={false} username="DLew" />
      </>
      
    );
}

export default App
