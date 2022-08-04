
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import { Provider } from 'react-redux';
import { pricestore } from './reduxtest/PriceStore';


function App() {
  return (
   <>
   <Provider store={pricestore}>
   <Home/>
   <About/>
   </Provider>
   </>
  );
}

export default App;
