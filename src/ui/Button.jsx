import { useNavigate } from "react-router-dom";

function Button({children, to}) {
    const navigate = useNavigate();

    return (
      <button
        className="button"
        onClick={() => navigate(to)}
      >
        {children}
      </button>
    );
}

export default Button
