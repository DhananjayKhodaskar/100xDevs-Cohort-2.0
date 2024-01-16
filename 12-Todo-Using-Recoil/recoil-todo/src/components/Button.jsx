import React from 'react'

const Button = ({handleSubmit}) => {
  return (
    <button type="submit" onClick={handleSubmit}>
        Click me
      </button>
  )
}

export default Button