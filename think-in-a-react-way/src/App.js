import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/router-5/Navbar";
import Home from "./components/router-5/Home";
import About from "./components/router-5/About";
import Services from "./components/router-5/Services";
import Error from "./components/router-5/Error";
import Posts from "./components/router-5/Posts";
import Dashboard from "./components/router-5/Dashboard";
// import Header from "./components/Header";
// import Hello from "./components/Hello";
// import Post from "./components/Post";
// import Posts from "./components/Posts";

function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        {/* <Route path='/services' exact><Services number='5'/></Route> */}
        <Route path='/services' exact render={()=><Services number='5'/>}/>
        <Route path='/posts/:category/:topic' exact component={Posts}/>
        <Route path='/login' exact>
            <Redirect to={isLoggedIn ? '/dashboard' : '/'}/>
        </Route>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route component={Error}/> // works like anything
      </Switch>
    </div>
  );
      {/* <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/hello" />
        </Route>
        <Route path="/hello">
          <Hello />
        </Route>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <Route path="/posts/:postId">
          <Post />
        </Route>
      </Switch> */}
    
  
}

export default App;
