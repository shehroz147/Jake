import Link from 'react-router/lib/Link';
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'wolfshark';

const Uploader = (props) => {
  const { handleUpload } = props;

  return (
    <Container>
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="o-heading-sub">Uploader</h1>
        </div>
        <div className="c-panel__content">

            {/* <p>
              <input className="c-form-input" type="text" placeholder="Report Title" />
            </p>
            <p>
              <input className="" type="file" name="upload" />
            </p> */}
            <button>
              Click or Drag here to Upload
            </button>
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
    </Container>
  );
};

Uploader.propTypes = {
  handleUpload: PropTypes.func.isRequired,
};

export default Uploader;
