import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // use BrowserRouter instead of createBrowserRouter
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import CreateFlashcard from './CreateFlashcard';
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import "./App.css";

const Root = () => {
  return (
    <>
      <div id="main-container">
        <Nav />
        <Header />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<CreateFlashcard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Root />
        </Router>
      </PersistGate>
    </Provider>
  );
}
