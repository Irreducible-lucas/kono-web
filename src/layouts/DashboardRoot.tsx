import { Outlet } from "react-router-dom";

const DashboardRoot = () => {
  return (
    <main className="bg-lightgrey h-screen grid md:grid-cols-[250px_1fr] overflow-hidden">
      <section className="overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardRoot;
