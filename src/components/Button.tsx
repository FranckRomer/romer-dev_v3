
const Button = ({ children, className, onClick }:any) => {
    return (
        <button
            className={`p-2 rounded-md  hover:scale-125 transition-all duration-300 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
