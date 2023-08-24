/**
 * Button-komponentti
 * 
 * @param {string} props.label - Button text
 * @param {string} props.class - Button className
 * @param {function} props.onClick - Button action
 */

const Button = (props) => {
    return (
        <button 
            className={`btn ${props.class}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;