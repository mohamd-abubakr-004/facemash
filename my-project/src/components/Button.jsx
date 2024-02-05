import React from 'react'

const Button = ({ value, type = 'submit' }) => {
    return (
        <button
            type={type}
            className="block rounded-md bg-active text-text-color font-poppins px-5 py-2.5 text-sm font-medium hover:bg-blue-600"
        >
            {value}
        </button>
    )
}

export default Button
