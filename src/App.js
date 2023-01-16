import './App.css';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
     <Provider store={store}>
      <Header/>
     <SignIn />
     <Footer/> 
     </Provider>
    </>
  );
}

export default App;
