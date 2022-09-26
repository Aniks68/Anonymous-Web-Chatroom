import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';

function App() {
  const user = localStorage.getItem("user");

  return (
    <>
    { user ? <Chat /> : <SignIn /> }
    {/* <SignIn/>
    <Chat /> */}
    </>
  );
}

export default App;
