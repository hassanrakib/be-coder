import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Hero></Hero>
          <Courses></Courses>
        </Route>
        <Route path='/home'>
          <Hero></Hero>
          <Courses></Courses>
        </Route>
        <Route path='/courses'>
          <Courses></Courses>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
