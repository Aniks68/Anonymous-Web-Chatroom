import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="/chat/:user" element={ <Chat /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
