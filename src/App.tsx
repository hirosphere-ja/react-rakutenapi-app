import APITest1 from "./APITest1";

function App() {
  return (
    <div className="w-4/5 container mx-auto">
      <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around">
        <h1 className="text-3xl font-bold underline">APITest</h1>
        <p className="m-0 text-gray-400">APITestです</p>
      </div>
      <div>
        <APITest1 />
      </div>
    </div>
  );
}

export default App;
