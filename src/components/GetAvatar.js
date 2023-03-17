import React from 'react';
import PropTypes from 'prop-types';

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  return (
    <div>
      <label className="btn get-avatar__label">
        {props.btnText}
        <input
          type="file"
          ref={myFileField}
          className="get-avatar__upload-field"
          onChange={uploadImage}
        />
      </label>
    </div>
  );
}
GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func,
};
export default GetAvatar;
