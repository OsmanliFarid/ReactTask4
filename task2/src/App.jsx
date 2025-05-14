import { useState } from "react";

const App = () => {
  const [Value, SetValue] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
        <div className="mb-4">
          <input
            type="text"
            readOnly
            className="w-full text-right text-2xl font-mono border border-gray-300 rounded-lg p-2 focus:outline-none"
            value={Value}
          />
        </div>

        <div className="grid grid-cols-4 gap-3">
          <input
            type="button"
            value="C"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue("")}
          />
          <input
            type="button"
            value="/"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="*"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="DE"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value.slice(0, -1))}
          />

          <input
            type="button"
            value="7"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="8"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="9"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="-"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />

          <input
            type="button"
            value="4"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="5"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="6"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="+"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />

          <input
            type="button"
            value="1"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="2"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="3"
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="="
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(eval(Value))}
          />

          <input
            type="button"
            value="0"
            className="col-span-2 bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
          <input
            type="button"
            value="."
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold rounded-xl py-2"
            onClick={(e) => SetValue(Value + e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
