import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DeleteBook from "./components/DeleteBook";
import DisplayData from "./components/DisplayData";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Add Book</Link>
          <Link to="/DisplayBooksF1">Display Books</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={AddBook} />
          <Route path="/DisplayBooksF1" component={DisplayData} />
          <Route path="/edit/:id" component={BookUpdate} />
          <Route path="/Delete/:id" component={DeleteBook} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
