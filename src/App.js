import './App.css';
import { FileUpload } from 'primereact/fileupload';

const uploadURL = "https://primefaces.org/fakeimageupload";

const onUpload = () => {
  //Doesn't even get this far
}

function App() {
  return (
    <div className="App">
      <FileUpload name="images"
          url={uploadURL}
          onUpload={onUpload}
          accept="image/*"
          chooseLabel="Upload Pictures"
          emptyTemplate={<p className="p-m-0">Drag and drop images to here to upload.</p>}
      />
    </div>
  );
}

export default App;
