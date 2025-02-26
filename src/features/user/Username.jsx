import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="hidden px-4 text-sm font-semibold md:block md:text-lg">
      {username}
    </div>
  );
}

export default Username;
