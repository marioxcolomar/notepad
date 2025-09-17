import type { Route } from "./+types/home";
import { Home } from "../components/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notepad App" },
    { name: "description", content: "Built with React Router!" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
