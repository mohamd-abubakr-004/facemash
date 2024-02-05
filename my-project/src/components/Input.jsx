import React, { forwardRef } from 'react'

const Input = ({ type, placeholder, label, ...props }, ref) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={label}
                >
                    {label}
                </label>
                <input
                    className="shadow appearance-none h-[3.25rem] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={label}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                    ref={ref}
                />
            </div>

        </>
    )
}


export default forwardRef(Input)
