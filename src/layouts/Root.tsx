import { Outlet, ScrollRestoration } from "react-router-dom";

const Root = () => {
  return (
    <main className="bg-lightgrey h-screen">
      <ScrollRestoration />
      <Outlet />
    </main>
  );
};

export default Root;
