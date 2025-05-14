import { useState } from "react";
import { MdDelete } from "react-icons/md";
const App = () => {
  const [Todo, SetTodo] = useState("");
  const [NewInput, SetNewInput] = useState([]);
  const set = () => {
    SetNewInput((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: Todo,
      },
    ]);
    SetTodo("");
  };
  const DeleteShow = (id) => {
    SetNewInput((SetNewInput) => SetNewInput.filter((item) => item.id !== id));
  };
  const Edit = (id) => {
    const neww = NewInput.map((item) => {
      if (item.id === id) {
        const mesaj = prompt("mesaji deyis", item.todo);
        return { ...item, todo: mesaj };
      }
      return item;
    });

    SetNewInput(neww);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">📝 TODO LIST</h1>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={Todo}
              onChange={(e) => SetTodo(e.target.value)}
              placeholder="Yazını daxil et..."
            />
            <input
              type="submit"
              value="Əlavə et"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer transition duration-200"
              onClick={set}
            />
          </div>

          <div className="space-y-3">
            {NewInput.map(({ id, todo }) => (
              <div
                key={id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <h1 className="text-gray-700 font-medium">{todo}</h1>
                <div className="flex items-center gap-2 text-lg">
                  <button
                    onClick={() => Edit(id)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => DeleteShow(id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
