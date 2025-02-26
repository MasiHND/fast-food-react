import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector(state=> state.user.username)
  
  return (
    <div className="text-center uppercase">
      <h1 className="font-Chewy mb-8 cursor-default px-10 text-xl font-light sm:my-12 md:text-3xl">
        The best pizza. 🍕
        <br />
        <span className="cursor-default text-violet-900 dark:text-amber-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? <CreateUser /> : <Button to="/menu">Let's Order {username} 😋</Button>}
    </div>
  );
}

export default Home;
