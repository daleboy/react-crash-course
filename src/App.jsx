import "./App.css";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalVisibleHandler() {
    setModalIsVisible(false);
  }
  function showModalVisibleHandler(){
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalVisibleHandler} />
      <main>
        <PostList IsPosting={modalIsVisible} onStopPosting={hideModalVisibleHandler}/>
      </main>
    </>
  );
}

export default App;
