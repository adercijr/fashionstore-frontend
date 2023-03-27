type LabelType = {
    className?: string
    children: string | number
}

const Label = ({ className, children, ...props }: LabelType) => (
    <label
        className={`${className} block font-medium text-md text-gray-700`}
        {...props}
    >
        {children}
    </label>
)

export default Label
