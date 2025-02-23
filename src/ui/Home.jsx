import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" text-center ">
      <h1 className="mb-8 px-10 text-xl font-semibold sm:my-12 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-violet-900 dark:text-amber-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
