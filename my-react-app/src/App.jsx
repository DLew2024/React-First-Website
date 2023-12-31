import Student from "./Student";

function App() {
  
    return(
      <>
          <Student name="DLew" age={30} isStudent={1}/>
          <Student name="Milani" age={32} isStudent={true}/> 
          <Student name="Lailani" age={29} isStudent={false}/>
          <Student name="CHIC" age={11} isStudent={false}/>
          <Student name="FIC" age={19} isStudent={true}/>
      </>
      
    );
}

export default App
