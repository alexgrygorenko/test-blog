import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import store from './store/store';
import Navbar from './components/presentational/layout/Navbar';
import Posts from './components/container/posts/Posts';
import Post from './components/container/post/Post';
import Alert from './components/container/Alert';
import Home from './components/presentational/pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/posts/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
