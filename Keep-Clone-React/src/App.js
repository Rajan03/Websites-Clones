import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import Note from "./components/note";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [addItem, setAdditem] = useState([]);
  const addNote = (note) => {
    /*addNote mein data aaya usko use state k empty array memin store krdiya
      fr usko map krege ek ek note bnane k liye*/
    // console.log("done");
    setAdditem((prevData) => {
      return [...prevData, note];
      // jb use state mein empty array h phle se toh yhs prev data , note ka array kyu bna re h
    });
  };
  const onDelete = (id) => {
    //ondelete fire hone pr konsa delete krna h ye id btayegi
    setAdditem((
      oldData //yha jis id pr delete hua h usko chhod k baki data dobara additem mein bhej dega
    ) =>
      oldData.filter((currentData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Navbar />
      /*jb passNote se data aaya toh vo addnote ko bheja*/
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        // yha use state k array ko map krdiya note bna diya
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </>
  );
}

export default App;
