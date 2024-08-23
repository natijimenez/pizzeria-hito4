import { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import Pizza from './components/Pizza';
// import Home from './components/Home'
// import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';
import Footer from './components/Footer'


function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      <Navigation token={token} />
      <a className='switchToken' onClick={() => setToken(!token)}>
        {token ? 'Log Out' : 'Log In'}
      </a>
      <Pizza />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart/> */}
      <Footer />
    </>
  )
}

export default App
