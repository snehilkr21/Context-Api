import './App.css';
import Login from './component/Login';
import Profile from './component/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Profile/>
      <Login/>
    </UserContextProvider>
  );
}

export default App;
