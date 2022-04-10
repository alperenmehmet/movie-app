import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,  Routes} from 'react-router-dom'
import { MovieList } from './components/MovieList'
import SingleMovie  from './pages/SingleMovie'


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:id" element={<SingleMovie/>}/>
      </Routes>
    </>
  )
}

export default App
