import { Navigate, Route, Routes } from "react-router-dom";
// import Navbar from "./components/router-5/Navbar";
// import Home from "./components/router-5/Home";
// import About from "./components/router-5/About";
// import Services from "./components/router-5/Services";
// import Error from "./components/router-5/Error";
// import Posts from "./components/router-5/Posts";
// import Dashboard from "./components/router-5/Dashboard";
import Header from "./components/router-5Torouter-6/Header";
import Hello from "./components/router-5Torouter-6/Hello";
import Post from "./components/router-5Torouter-6/Post";
import Posts from "./components/router-5Torouter-6/Posts";

function App() {
  const isLoggedIn = true;
  return (
  // router 5 lecture
  //   <div className="App">
  //     <Navbar/>
  //     <Switch>
  //       <Route path='/' exact component={Home}/>
  //       <Route path='/about' exact component={About}/>
  //       {/* <Route path='/services' exact><Services number='5'/></Route> */}
  //       <Route path='/services' exact render={()=><Services number='5'/>}/>
  //       <Route path='/posts/:category/:topic' exact component={Posts}/>
  //       <Route path='/login' exact>
  //           <Redirect to={isLoggedIn ? '/dashboard' : '/'}/>
  //       </Route>
  //       <Route path='/dashboard' exact component={Dashboard}/>
  //       <Route component={Error}/> // works like anything
  //     </Switch>
  //   </div>
  // );

  // router 6 lecture
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} /> 
        <Route path="/hello/*" element={<Hello />}>
          <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/posts/*" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes> 
    </div>
  );
}

export default App;
