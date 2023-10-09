import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './styles.css';

export default function Form({ handleSubmit, handleInputChange, novaTarefa = '' }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" onChange={handleInputChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: 'Valor padrão',
// };

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
