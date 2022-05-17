// import logo from './logo.svg';
// import './App.css';
import Contact from './components/button';
import Links from './components/links';
import styles from './app.module.css'
import Logo from "./components/logo";




function App() {
  return (
    <div className = {styles.main}>
        <Logo></Logo>
        <Links></Links>
        <Contact></Contact>
    </div>
  );
}

export default App;
