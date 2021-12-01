import './App.css';
import {BrowserRouter, Route,Switch}  from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Navbar from './component/Navbar';
import Post from './component/Post';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/"  component={Home} />
       <Route path="/about" component={About}/>
       <Route path='/contact' component={Contact}/>
       <Route path="/post"  component={Post}/>
       <Route component={Error}/>

      </Switch> 
    </BrowserRouter>
     
    </>
  );
  }
export default App;
