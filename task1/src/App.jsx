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
      <div>
        <div className="">
          <h1>TODO LIST</h1>
        </div>
        <div className="flex gap-5">
          <div className="">
            <input
              type="text"
              className="outline-1 inline-block"
              value={Todo}
              onChange={(e) => SetTodo(e.target.value)}
            />
          </div>
          <div className="bg-amber-500 ml-[20px]">
            <input type="submit" className="" onClick={set} />
          </div>
        </div>
        <div className="">
          {NewInput.map(({ id, todo }) => {
            return (
              <>
                <div className="flex items-center gap-3 mt-[20px]">
                  <h1 key={id}>{todo}</h1>
                  <MdDelete onClick={() => DeleteShow(id)} />
                  <h1 onClick={() => Edit(id)}>edit</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
