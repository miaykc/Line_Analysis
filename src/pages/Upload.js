import React, { component } from "react";
import { useState } from "react";
import "../App.css";

function Upload() {
  const [Value, setValue] = useState("");
  const [txt, setTxt] = useState("");
  const [inputValue, setInputValue] = useState("");

  const Txtload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setValue(reader.result);
    };
    let files = event.target.value;

    if (files.length === 0) return;

    const [file] = event.target.files;
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        setTxt(reader.result);
      },
      false
    );

    if (file) {
      // console.log(typeof file);
      reader.readAsText(file);
    }

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    setTxt(reader.result);
  };
  console.log(Value);
  return (
    <div>
      <h2>檔案上傳/File Upload</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label>
          <input
            type="file"
            onChange={Txtload}
            style={{ marginBottom: 20 }}
          ></input>
          選擇檔案📂
        </label>
        <textarea cols="30" rows="20" value={txt}></textarea>
      </div>
    </div>
  );
}

export default Upload;
