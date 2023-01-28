import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import BlogEdit from './BlogEdit';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'; 
import NotFound from './NotFound';
function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <div className="content">
            <Switch >
                <Route exact path="/"><Home /></Route>
                <Route exact path="/newblog"><NewBlog /></Route>
                <Route exact path="/blogs/:id"><BlogDetails /></Route>
                <Route exact path="/blogedit/:id"><BlogEdit /></Route>
                <Route exact path="*"><NotFound /></Route>
            </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
