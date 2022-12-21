import React, {component} from 'react';
import '../Uploads/uploads.css';
import {useState} from 'react';

function ImageUpload(){
  const [data] = useState();
  console.log(data)
    return(
        <div className="main">
          <div className="uploadimage">
            <label htmlFor="imgs">檔案上傳</label>
          </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc"/>
        </div>
    );
}
export default ImageUpload;

