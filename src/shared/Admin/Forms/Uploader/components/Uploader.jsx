import Link from 'react-router/lib/Link';
import React, { PropTypes } from 'react';
// import Dropzone from 'react-dropzone';

const Uploader = (props) => {
  const { handleUpload } = props;

  return (
    <div className="c-panel">
      <h1 className="o-heading-sub u-text-center">Uploader</h1>
      <form
        action="/uploader"
        encType="multipart/form-data"
        onSubmit={handleUpload}
        method="post"
      >
        <p>
          <input type="text" />
        </p>
        <p>
          <input type="file" name="upload" />
        </p>
        <p>
          <button
            type="submit"
          >
            Upload
          </button>
        </p>
      </form>

      <h1>Preview</h1>
      {/* <img src={file.preview} /> */}

      <p>
        <Link to="admin">Back</Link>
      </p>

    </div>
  );
};

Uploader.propTypes = {
  handleUpload: PropTypes.func.isRequired,
};

export default Uploader;
