import React, { useState } from "react";

const GATE_TYPES = ["AND", "OR", "NOT"];

const App = () => {
  const [gate, setGate] = useState("AND");
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const handleSend = async () => {
    let url = `http://192.168.43.154/${gate.toLowerCase()}?`;

    if (gate === "NOT") {
      url += `A=${inputA ? 1 : 0}`;
    } else {
      url += `A=${inputA ? 1 : 0}&B=${inputB ? 1 : 0}`;
    }

    try {
      const res = await fetch(url);
      const text = await res.text();
      alert(`ESP32 Response: ${text}`);
    } catch (err) {
      alert("Failed to connect to ESP32");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl mb-4">Logic Gate Controller</h1>

      <select
        value={gate}
        onChange={(e) => setGate(e.target.value)}
        className="mb-4 text-black p-2 rounded"
      >
        {GATE_TYPES.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <div className="flex gap-4 mb-4">
        <button
          className={`p-4 rounded bg-${inputA ? "green" : "gray"}-600`}
          onClick={() => setInputA(!inputA)}
        >
          A: {inputA ? "1" : "0"}
        </button>

        {gate !== "NOT" && (
          <button
            className={`p-4 rounded bg-${inputB ? "green" : "gray"}-600`}
            onClick={() => setInputB(!inputB)}
          >
            B: {inputB ? "1" : "0"}
          </button>
        )}
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded"
        onClick={handleSend}
      >
        Send to ESP32
      </button>
    </div>
  );
};

export default App;
