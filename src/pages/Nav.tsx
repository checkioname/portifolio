export function Nav() {
  return (
    <div className="fixed h-full w-1/12 bg-indigo-300 border border-indigo-900">
    <div className="h-5/6 flex flex-col items-center justify-between">
      <button className="flex bg-indigo-900 h-16 w-full items-center justify-center">
        <p className="text-indigo-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-500">CONTATO</p>
      </button>
      <div className="text-center">
        <h1 className="">Developed by</h1>
        <h1>Myself</h1>
      </div>
    </div>
  </div>
  );
}
