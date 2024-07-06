import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="h-screen flex justify-center border border-red-500 items-center">
      <input type="text" placeholder="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={input}
      onChange={e => setInput(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">Add</button>
    </div>
  );
}

export default App;
