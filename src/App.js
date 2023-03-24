import logo from './logo.svg';
import './App.css';
import { Postjson } from './Postjson';
import { Commentsjson } from './Commentsjson';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Albumjson } from './Albumjson';
import { Photosjson } from './Photosjson';
import { Todosjson } from './Todosjson';
import { Usersjson } from './Usersjson';
import PostTableJson from './PostTableJson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/posttable"> PostTable </Link>
        <Link to="/posts"> Posts </Link>
        <Link to="/comments"> Comments </Link>
        <Link to="/albums"> Albums </Link>
        <Link to="/photos"> Photos </Link>
        <Link to="/todos"> ToDos </Link>
        <Link to="/users"> Users </Link>
      </nav>
      <Routes>
        <Route element={<Postjson/>} path="/posts"></Route>
        <Route element={<Commentsjson/>} path="/comments"></Route>
        <Route element={<Albumjson/>} path="/albums"></Route>
        <Route element={<Photosjson/>} path="/photos"></Route>
        <Route element={<Todosjson/>} path="/todos"></Route>
        <Route element={<Usersjson/>} path="/users"></Route>
        <Route element={<PostTableJson/>} path="/posttable"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
