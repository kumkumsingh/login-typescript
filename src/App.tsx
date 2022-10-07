  import './App.css';
  import LoginForm from './components/LoginForm';
  interface IUserDetails {
    userName?: string  ,
    password?: string
  }
  const App = ()=>{

     const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>, userDetails:IUserDetails) =>{
      event.preventDefault();
       console.log('onHandleSubmit', userDetails)
       try{
        // Post the data here 
       }
       catch{
        // Incase of error print the error unauthorised
       }
     }


    return (
      <div className="App">
        <LoginForm onHandleSubmit={onHandleSubmit}/>
      </div>
      );
  }
 

  export default App;

