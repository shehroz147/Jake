import Link from 'react-router/lib/Link';
import React, { PropTypes } from 'react';
import { FileUpload } from 'redux-file-upload';
// import Dropzone from 'react-dropzone';

const Uploader = (props) => {
  const { handleUpload } = props;

  return (
    <div className="">
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="o-heading-sub">Uploader</h1>
        </div>
        <div className="c-panel__content">
          <FileUpload
            url="/uploader"
            dropzoneId="fileUpload"
          >
            {/* <p>
              <input className="c-form-input" type="text" placeholder="Report Title" />
            </p>
            <p>
              <input className="" type="file" name="upload" />
            </p> */}
            <button>
              Click or Drag here to Upload
            </button>
          </FileUpload>
          <p>
            <button
              className="c-button"
              type="submit"
            >
                Upload
              </button>
          </p>

          <h1>Preview</h1>
          {/* <img src={file.preview} /> */}

          <p>
            <Link to="dashboard">Back</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Uploader.propTypes = {
  handleUpload: PropTypes.func.isRequired,
};

export default Uploader;
