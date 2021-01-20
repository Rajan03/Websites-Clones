import React, { useState } from "react";
import "./css/CreateNote.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    //khali useState bnai title nd content store kregi bs
    title: "",
    content: "",
  });
  const InputEvent = (e) => {
    const { value, name } = e.target; // input value collect kri
    setNote((prevData) => {
      /*use state ki value ko update kr re h jb value input ho rhi h... 
      toh ye value fetch ho k console mein dekhi ja skti h*/
      return {
        ...prevData,
        /* jis input feild mein value input ho ri h uska name collect krke 
        or value nikla k prev Data mein usko change kr rha h baki same rhigi value*/ [name]: value,
      };
    });
  };
  const addEvent = () => {
    /*jb click hoga sara data app.js mein bhejna h toh props liya jiska naam diya passnote 
    passnote mein function calllgi app.js mein jo ki data ko vhi fetch kregi */
    props.passNote(note); //note ka data passnote ko bhej diya
    setNote({
      // data bhejne k baad create note ko empty krdiya
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="container" id="main">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="title" // hr input ka alg naam h.... ye identify krwayega konse input mein value type ho ri h
              value={note.title} //nyi nyi aarhi value ko store krega ye
              onChange={InputEvent}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows=""
              column=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write a Note..."
            ></textarea>
          </div>
          <div className="plus-sign" onClick={addEvent}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
