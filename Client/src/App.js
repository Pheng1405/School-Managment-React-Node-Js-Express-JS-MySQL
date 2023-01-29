import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './screen/Homepage';
import Error from './screen/Error';
import Student from './screen/Student';
import AddStudent from './screen/AddStudent';
import EditStudent from './screen/EditStudent';
import 'bootstrap';
import Test from './screen/Test';
const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/student' element={<Student/>}></Route>
          <Route path='/add-student' element={<AddStudent/>}></Route>
          <Route path='/edit-student/:id' element={<EditStudent/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
