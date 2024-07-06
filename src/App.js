import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    const trimmedInput = input.trim(); // trim(): xóa khoảng trắng đầu cuối
    const todoId = trimmedInput.replace(/\s/g, ""); // xóa khoảng trắng trong chuỗi

    if (todos.some((todo) => todo.id === todoId)) { // some(): tìm theo điều kiện
      toast.warn("Đã thêm công việc này trước đó rồi !!!");
      return;
    }

    setTodos((prev) => [...prev, { id: todoId, content: trimmedInput }]); // thêm object vào mảng
    setInput(""); // set lại input rỗng
  };

  const handleKeyDown = (event) => { // sự kiện nhấn phím Enter
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleDelete = (id) =>{ // sự kiện nhấm delete
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="h-screen gap-8 flex flex-col justify-center border border-red-500 items-center">
        <div>
          <input
            type="text"
            placeholder="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Todolist</h3>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="flex gap-8 items-center">
                <p className="font-bold my-2">{todo.content}</p>
                {/* do delete sử dụng tham số id cho nên phải sử dụng hàm callback, nếu không nó sẽ gọi liên tục */}
                <p className="text-red-500 cursor-pointer my-2" onClick={() => handleDelete(todo.id)}>x</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
