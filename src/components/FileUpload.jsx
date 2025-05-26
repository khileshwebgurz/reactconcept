import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file); // must match `upload.single('file')`

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploaded(res.data.path);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("uploaded file is >>>", uploaded);
  return (
    <div>
      <h2>File Upload with Multer</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploaded && (
        <div>
          <h4>Uploaded File:</h4>
          <img
            src={`http://localhost:3000${uploaded}`}
            alt="Uploaded"
            width="200"
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
