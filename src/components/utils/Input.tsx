interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    disabled?: boolean
}

const Input = ({ disabled = false, className, ...props }: InputProps) => (
    <input
        disabled={disabled}
        className={`${className}  
            rounded-md
            shadow-sm
            border-gray-300
            w-full
            p-2
            border-2
            `}
        {...props}
    />
)

export default Input
