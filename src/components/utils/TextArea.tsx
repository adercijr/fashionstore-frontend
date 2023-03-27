type TextAreaType = {
    disabled?: boolean
    className?: string
}

const TextArea = ({ disabled = false, className, ...props }: TextAreaType) => (
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

export default TextArea
