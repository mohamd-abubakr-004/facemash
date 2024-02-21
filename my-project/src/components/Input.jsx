import React, { forwardRef } from 'react'

const Input = ({ type, placeholder, label, width, ...props }, ref) => {
    return (
        <>
            <div className="pt-10 relative w-full mb-3 text-center flex justify-center flex-col items-center gap-4 " data-te-input-wrapper-init="">
                <label
                    htmlFor={label}
                    className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-poppins text-center cursor-pointer"
                >
                    {label}
                </label>
                <input
                    type={type}
                    id={label}
                    ref={ref}
                    placeholder={placeholder}
                    {...props}
                    className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 w-[70%] font-poppins"
                />
            </div>
        </>
    )
}


export default forwardRef(Input)
