import React from 'react'

const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ 
        ...style, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    onClick={onClick}
  />
  )
}

export default PreviousArrow
