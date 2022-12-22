import React, { component } from "react";
import "../Uploads/uploads.css";
import { useState } from "react";
import "../App.css";

function ImageUpload() {
  const [VLAU, setVLAU] = useState("");
  const [conasfoa, setconasfoa] = useState("");
  const [inputValue, setInputValue] = useState("");

  const Maikaload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVLAU(reader.result);
    };
    let files = event.target.value;

    if (files.length === 0) return;

    const [file] = event.target.files;
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        setconasfoa(reader.result);
      },
      false
    );

    if (file) {
      // console.log(typeof file);
      reader.readAsText(file);
    }

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    setconasfoa(reader.result);
  };
  console.log(VLAU);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="file"
          onChange={Maikaload}
          style={{ marginBottom: 20 }}
        ></input>
        <textarea cols="30" rows="20" value={conasfoa}></textarea>
      </div>
    </div>
  );
}

export default ImageUpload;