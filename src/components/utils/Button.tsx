interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    type?: 'submit' | 'reset' | 'button'
    styled?: 'default' | 'custom'
}

const Button = ({
    type = 'submit',
    className,
    styled = 'default',
    children,
    ...props
}: ButtonProps) => (
    <button
        {...props}
        type={type}
        className={`${className} ${
            styled === 'default' &&
            ' bg-gray-800 border hover:bg-gray-700  active:bg-gray-900 focus:border-gray-900 text-white ring-gray-300'
        }
         inline-flex  justify-center items-center px-4 py-2 border-transparent rounded-md 
         font-semibold text-xs  uppercase tracking-widest 
          focus:outline-none  focus:ring
            disabled:opacity-25 transition ease-in-out duration-150`}
    >
        {children}
    </button>
)

export default Button
