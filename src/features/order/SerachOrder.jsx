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
    <form onSubmit={handleSubmit} className=" ">
      <input
        className="text-center text-stone-200 bg-gray-800 border-gray-600 border-2 rounded-lg"
        placeholder="Searach Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SerachOrder;
