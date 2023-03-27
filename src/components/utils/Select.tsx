type SelectType = {
    disabled?: boolean
    className?: string
    options: string[]
}

const Select = ({ disabled = false, className, options }: SelectType) => (
    <select
        disabled={disabled}
        className={`${className}  
            rounded-md
            shadow-sm
            border-gray-300
            w-full
            p-2
            border-2
            `}
    >
        {options.map((opt) => {
            return (
                <option key={opt} value={'opt'}>
                    {opt}
                </option>
            )
        })}
    </select>
)

export default Select
