import React from 'react';
import PropTypes from 'prop-types';

function RecursiveComponent({components}) {
  const componentsData = [...components];

  return componentsData.length > 0 ? (
    <div className='App-box'>
      {componentsData.shift()({
        children: <RecursiveComponent components={componentsData} />
      })}
    </div>
  ): null;
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default RecursiveComponent;
