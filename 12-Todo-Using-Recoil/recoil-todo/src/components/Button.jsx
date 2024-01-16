import React from 'react'

const Button = ({handleSubmit}) => {
  return (
    <button type="submit" onClick={handleSubmit}>
        Add
      </button>
  )
}

export default Button