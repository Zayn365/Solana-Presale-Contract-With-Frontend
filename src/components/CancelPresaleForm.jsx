import React, { useState } from "react";

const CancelPresaleForm = ({ onSubmit }) => {
  const [presaleInfoPublicKey, setPresaleInfoPublicKey] = useState("");
  const [authority, setAuthority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ presaleInfoPublicKey, authority });
  };

  return (
    <form
      className="space-y-4 p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold">Cancel Presale</h2>

      <input
        type="text"
        placeholder="Presale Info Public Key"
        value={presaleInfoPublicKey}
        onChange={(e) => setPresaleInfoPublicKey(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Authority"
        value={authority}
        onChange={(e) => setAuthority(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Cancel Presale
      </button>
    </form>
  );
};

export default CancelPresaleForm;
