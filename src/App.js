import React from 'react';
import './App.css';
import 'bootstrap'
import PostsList from './features/posts/postsList';
import AddPostForm from './features/posts/addPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
