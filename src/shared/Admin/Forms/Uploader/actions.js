import { CALL_API } from '../../../utils/apiUrl';
import { uploadSchema } from '../../../../server/models/Uploads';
import * as UploadTypes from './constants';

export const getUploads = () => ({
  [CALL_API]: {
    endpoint: 'uploads',
    schema: [uploadSchema],
    types: [
      UploadTypes.UPLOAD_LOADING,
      UploadTypes.UPLOAD_LOADING_SUCCESS,
      UploadTypes.UPLOAD_LOADING_FAILURE,
    ],
  },
});

export const getUpload = uploadId => ({
  [CALL_API]: {
    endpoint: `uploads/${uploadId}`,
    schema: uploadSchema,
    types: [
      UploadTypes.UPLOAD_LOADING,
      UploadTypes.UPLOAD_LOADING_SUCCESS,
      UploadTypes.UPLOAD_LOADING_FAILURE,
    ],
  },
});
