import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import MyComponent from '../../psiogimpact/src/components/chatbot/chatbot'
import About from './components/about/about';
import Responsive from './components/profile/profilecarousel';
// //import Carousel from './components/profile/carousel';

function App() {
  
  return (
    <div className="App">
      <>
        <Menu />
        {/* <About /> */}
        <MyComponent />
        <Responsive/>
 
      </>
    </div>
  );
}

export default App;
