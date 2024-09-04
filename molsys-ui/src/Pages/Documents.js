import React, { useState } from 'react';
import axios from 'axios';

const Document = () => {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState('');
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://backend-java:8080/api/pdf/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully. File ID: ' + response.data);
    } catch (error) {
      alert('Failed to upload file.');
    }
  };

  const handleFileDownload = async () => {
    if (!fileId) {
      alert('Please enter a file ID');
      return;
    }

    try {
      const response = await axios.get(`http://backend-java:8080/api/pdf/get/${fileId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `file_${fileId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      alert('File not found.');
    }
  };

  return (
    <div className='mt-5 pt-5'>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      <h2>File Download</h2>
      <input
        type="text"
        placeholder="Enter File ID"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
      />
      <button onClick={handleFileDownload}>Download</button>
    </div>
  );
};

export default Document;
