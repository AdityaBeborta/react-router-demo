import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import { Home } from "./components/Home";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        /** Now here we can also use Switch insted of Routes but if we use
        switch then we have to use that exact keyword so instead of that its
        better to go with Routes */
        <Route path="/about" Component={About} />
        /** Here we are using Component to render the things but instead of
        Component we can also use Render method ... if we want to pass some
        props then we can go for render () because render () will not create a
        new component it will return the same component but if we pass some
        props with Component then every time it will create a new one and will
        return it back ............... so the conclusion is if you want to send
        some props then we can go for render else component is fine */
        <Route path="/home" Component={Home} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
