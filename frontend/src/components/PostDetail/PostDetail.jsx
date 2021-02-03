/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import './PostDetail.css';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

function PostDetail(props) {
  const { onClose } = props;
  return (
    <>
      <MuiDialogTitle disableTypography>
        asasasa
        {onClose ? (
          <span
            role="button"
            aria-label="close"
            onClick={onClose}
            className="material-icons"
          >
            close
          </span>

        ) : null}
      </MuiDialogTitle>
    </>
  );
}

export default PostDetail;
