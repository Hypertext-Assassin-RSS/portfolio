import About from "./components/about";
import Header from "./components/header";
import Info from "./components/info";
import Qualification from "./components/qualification";
import Skill from "./components/skill";

export default function Home() {
  return (
    <>
      <Header />
      <Info />
      <About />
      <Skill />
      <Qualification />
    </>
  );
}
