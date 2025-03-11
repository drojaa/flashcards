import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home'
import Footer from './Footer';
import CreateFlashcard from './CreateFlashcard';
import "./App.css";

const Root = () => {
  return (
    <>
      <div id="main-container">
      <Nav/>
      <Header/>
      <main id="content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Create" element={<CreateFlashcard/>} />
      </Routes>
      </main>
      <Footer/>

      </div>
     
     
    </>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

export default function App() {
  return (

    <RouterProvider router={router}/>
  )
}

