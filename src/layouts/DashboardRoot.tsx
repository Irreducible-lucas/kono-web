import { Outlet } from "react-router-dom";
import { SideNav, NavBar } from "../components";

const DashboardRoot = () => {
  return (
    <main className="bg-lightgrey h-screen grid md:grid-cols-[250px_1fr] overflow-hidden">
      <aside className="hidden md:block overflow-y-auto">
        <SideNav />
      </aside>
      <section className="overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardRoot;
