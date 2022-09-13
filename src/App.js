import logo from './logo.svg';
import './App.css';
import Hoc from './component/Hoc';
import ProductList from './component/ProductList'
function App() {
  return (
    <div className="App">
    <h1>Higher-Order Components</h1>
    <strong>Higher-order components in React were inspired by higher-order functions in JavaScript. A HOC is an advanced technique for reusing logic in React components. It is a pattern created out of React’s compositional nature.</strong>

    <p>The purpose of a HOC is to enhance a component (usually a dumb component) with extra functionality. A HOC allows for reusability since in real-life applications there is a need to re-use the same functionalities in various similar kinds of components. A very common functionality is toggling.</p>

       <Hoc />
       <ProductList />
    </div>
   
  );
}

export default App;
