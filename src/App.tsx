import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home'
import CreateFlashcard from './CreateFlashcard';

const Root = () => {
  return (
    <>
       <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Create" element={<CreateFlashcard/>} />
      </Routes>
    
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

