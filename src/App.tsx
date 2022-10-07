  import './App.css';
  import LoginForm from './components/LoginForm';

  const App = ()=>{

     const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
       console.log('onHandleSubmit')
     }


    return (
      <div className="App">
        <LoginForm onHandleSubmit={onHandleSubmit}/>
      </div>
      );
  }
 

  export default App;

