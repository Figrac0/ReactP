// import PropTypes from "prop-types";

function Button({
    size = "medium",
    variant = "primary",
    fullWidth = false,
    isDisabled = false,
    onClick,
    children,
}) {
    return (
        <button
            className={`button ${variant} ${size} ${
                isDisabled ? "disabled" : ""
            } ${fullWidth ? "full-width" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     children: PropTypes.string.isRequired,
//     icon: PropTypes.string,
//     size: PropTypes.string,
//     variant: PropTypes.string,
//     fullWidth: PropTypes.boolean,
//     isDisabled: PropTypes.boolean,
//     onClick: PropTypes.func,
// };

export default Button;
