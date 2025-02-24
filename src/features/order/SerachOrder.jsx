import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SerachOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-30 rounded-full bg-indigo-400 py-1 px-4 placeholder:text-center text-sm md:text-lg text-stone-100 transition-all duration-300 outline-none sm:focus:w-60 placeholder:text-gray-300 focus:ring-3 focus:ring-indigo-600 focus:outline-none sm:w-46"
        placeholder="Searach Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SerachOrder;
