import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { Postjson } from './Postjson';
import { Commentsjson } from './Commentsjson';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Albumjson } from './Albumjson';
import { Photosjson } from './Photosjson';
import { Todosjson } from './Todosjson';
import { Usersjson } from './Usersjson';
import PostTableJson from './PostTableJson';
import { AlbumContext, CommentContext, PhotoContext, PostContext, TodoContext, UserContext } from './AddContext';

function App() {
  const album = useState([]);
  const photo = useState([]);
  const todo = useState([]);
  const comment = useState([]);
  const post = useState([]);
  const user = useState([]); 
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
        <Route element={<PostContext.Provider value={post}><Postjson/></PostContext.Provider>} path="/posts"></Route>
        <Route element={<CommentContext.Provider value={comment}><Commentsjson/></CommentContext.Provider>} path="/comments"></Route>
        <Route element={<AlbumContext.Provider value={album}><Albumjson/></AlbumContext.Provider>} path="/albums"></Route>
        <Route element={<PhotoContext.Provider value={photo}><Photosjson/></PhotoContext.Provider>} path="/photos"></Route>
        <Route element={<TodoContext.Provider value={todo}><Todosjson/></TodoContext.Provider>} path="/todos"></Route>
        <Route element={<UserContext.Provider value={user}> <Usersjson/> </UserContext.Provider>} path="/users"></Route>
        <Route element={<PostTableJson/>} path="/posttable"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
