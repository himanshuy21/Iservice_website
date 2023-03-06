import { useState, useRef } from "react";
import "../DrapAnddrop/Drapdrop.css";
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server //s
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)} className="btn btn-primary">
            Cancel
          </button>
          <button onClick={handleUpload} className="btn btn-dark">
            Upload
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Drag and Drop Files to Upload</h2>

        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <h2>or</h2>
        <button
          onClick={() => inputRef.current.click()}
          className="btn btn-primary"
        >
          Select Files
        </button>
      </div>
    </>
  );
};

export default DragDropFiles;
