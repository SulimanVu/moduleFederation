import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "@/theme/useTheme";
import Counter from "@/components/Counter";

const Root = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={"...loading"}>
        <Link to={"/"}> main</Link>
        <Link to={"/about"}> about</Link>
        <Counter />
        <button onClick={() => toggleTheme()}>toggle</button>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
