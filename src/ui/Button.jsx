import { useNavigate } from "react-router-dom";

function Button({ children, to, type }) {
  const navigate = useNavigate();


  const styles = {
    primary: "py-2 px-4 sm:py-4 sm:px-6 text-lg text-sm hover:bg-violet-500 hover:shadow-blue-500 hover:ring-blue-500 focus:ring-violet-600 bg-violet-600",
    delete: "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:bg-rose-500 hover:shadow-red-500 hover:ring-indigo-500 focus:ring-red-500 bg-rose-600",
    clear: "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:bg-yellow-400 hover:text-gray-800 hover:shadow-yellow-400 hover:ring-orange-400 focus:ring-violet-600 bg-gray-500",
    small: "py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm mx-8 hover:bg-violet-500 hover:shadow-blue-500 hover:ring-blue-500 focus:ring-violet-600 bg-violet-600",
    
  };
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
