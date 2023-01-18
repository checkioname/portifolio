import { Nav } from "./pages/Nav";
import react from "./assets/react.png";
import python from "./assets/python.png";
import js from "./assets/index.png";
import java from "./assets/java.png";
import html from "./assets/html.png";
import linux from "./assets/linux.png";
import shell from "./assets/shell.png";
import css from "./assets/css.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";




export function Home() {
  return (
    <div className="text-indigo-900">
      <div className="float-right w-11/12 h-screen bg-indigo-300">
        <div className="flex flex-col h-screen mt-20">
          <div className="w-4/6 text-center">
            <h1 className="text-7xl font-black">LUCAS GARGALHONE</h1>
          </div>
          <main className="flex justify-center border border-indigo-900 p-2 m-8">
            <div className="flex flex-col w-11/12 justify-around">
              <ul className="flex w-full justify-between items-center z-0">
                <li className="text-center duration-300 hover:transform-none ">
                  <h1 className="text-5xl font-black">IT STUDENT</h1>
                </li>
                <li className="text-center ">
                  <h1 className="text-5xl font-black">2025 CLASS</h1>
                  <h1 className="text-3xl font-thin drop-shadow-xl">
                    MACKENZIE PRESBYTERIAN UNIVERSITY
                  </h1>
                </li>
              </ul>
              <section className="my-12">
                <ul className="flex items-center justify-between group">
                  <li className="text-center invisible group-hover:visible group-hover:animate-fade-in-up ">
                    <div className="grid grid-rows-2 grid-flow-col gap-8">
                      <img src={python} className="h-16 " />
                      <img src={js} className="h-16 " />
                      <img src={shell} className="h-16 " />
                      <img src={java} className="w-20 " />
                    </div>
                  </li>
                  <li className="text-center scale-75 translate-x-4 skew-y-3 duration-1000 group-hover:transform-none ">
                    <h1 className="text-6xl font-black">PROGRAMMING</h1>
                    <h1 className="text-6xl font-thin drop-shadow-xl">
                      LANGUAGES
                    </h1>
                  </li>
                </ul>
              </section>
              <section className="my-12">
                <ul className="flex items-center justify-between group">
                  <li className="text-center scale-75 translate-x-4 skew-y-3 duration-1000 group-hover:transform-none ">
                    <h1 className="text-6xl font-black">MY OTHER</h1>
                    <h1 className="text-6xl font-thin drop-shadow-xl">
                      SKILLS
                    </h1>
                  </li>
                  <li className="text-center invisible group-hover:visible group-hover:animate-fade-in-up ">
                    <div className="grid grid-rows-2 grid-flow-col gap-8">
                      <img src={react} className="h-16 " />
                      <img src={linux} className="h-16 " />
                      <img src={git} className="h-16 " />
                      <img src={html} className="h-16 " />
                      <img src={css} className="h-16 " />
                      <img src={tailwind} className="h-14 " />
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </main>
          <section className="border border-indigo-900 p-6 m-8">
            <ul className="flex items-center justify-between group">
              <li className="text-center invisible group-hover:visible group-hover:animate-fade-in-up ">
                <div className="grid grid-rows-2 grid-flow-col gap-8">
                  <img src={python} className="h-16 " />
                  <img src={js} className="h-16 " />
                  <img src={html} className="h-16 col-span-2" />
                  <img src={java} className="w-20 " />
                  <img src={react} className="h-16 " />
                </div>
              </li>
              <li className="text-center scale-75 translate-x-4 skew-y-3 duration-1000">
                <h1 className="text-6xl font-black">WHAT I'VE</h1>
                <h1 className="text-6xl font-thin drop-shadow-xl">MADE</h1>
              </li>
            </ul>
          </section>
          <section className="border border-indigo-900 p-6 m-8">
            Hello there, my name is Lucas, i'm a 19 year old brazilian developer, i like basketball, coffee and programming
            I have a lot of interest in the open-source community, GNU and Free Software Movement
          </section>
        </div>
      </div>
    </div>
  );
}
/// hide n show div hover gorup element
///invisible group-hover:visible
