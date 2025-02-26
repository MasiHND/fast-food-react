import { useNavigate } from "react-router-dom";

function Button({ children, to, type, onClick }) {
  const navigate = useNavigate();

  const styles = {
    primary:
      "py-2 px-4 sm:py-4 sm:px-6 text-lg text-sm hover:shadow-blue-500 hover:ring-blue-500 focus:ring-violet-600 bg-violet-600",
    delete:
      "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:shadow-red-500 hover:ring-indigo-500 focus:ring-red-500 bg-rose-600",
    clear:
      "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:text-gray-800 hover:shadow-yellow-400 hover:ring-orange-400 focus:ring-violet-600 bg-gray-500",
    small:
      "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:shadow-blue-500 hover:ring-blue-500 focus:ring-violet-600 bg-violet-600",
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`button ${type ? styles[type] : styles.primary}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`button ${type ? styles[type] : styles.primary}`}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

export default Button;
