import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoTextInput = ({ onSave, placeholder }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      setValue('');
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    onSave(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TodoTextInput.defaultProps = {
  placeholder: '',
};

export default TodoTextInput;
