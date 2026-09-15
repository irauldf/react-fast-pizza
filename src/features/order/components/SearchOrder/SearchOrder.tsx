import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";

export function SearchOrder() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!term) return;

    navigate(`/order/${term}`);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder-stone-400 transition-all duration-300 focus:ring focus:ring-yellow-500/50 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
