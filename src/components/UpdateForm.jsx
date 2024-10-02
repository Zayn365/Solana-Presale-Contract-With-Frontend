import { useState } from "react";
import React from "react";
import { updatePresale } from "../utils/solana";

const UpdateForm = ({ authority }) => {
  const [presaleInfoPublicKey, setPresaleInfoPublicKey] = useState("");
  //   const [authority, setAuthority] = useState("");
  const [maxTokenAmountPerAddress, setMaxTokenAmountPerAddress] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [softcapAmount, setSoftcapAmount] = useState("");
  const [hardcapAmount, setHardcapAmount] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePresale({
      presaleInfoPublicKey,
      authority,
      maxTokenAmountPerAddress,
      pricePerToken,
      softcapAmount,
      hardcapAmount,
      startTime,
      endTime,
    });
  };

  return (
    <form
      className="space-y-4 p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold">Update Presale</h2>

      <input
        type="text"
        placeholder="Presale Info Public Key"
        value={presaleInfoPublicKey}
        onChange={(e) => setPresaleInfoPublicKey(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      {/* <input
        type="text"
        placeholder="Authority"
        value={authority}
        onChange={(e) => setAuthority(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      /> */}
      <input
        type="number"
        placeholder="Max Tokens Per Address"
        value={maxTokenAmountPerAddress}
        onChange={(e) => setMaxTokenAmountPerAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Price Per Token"
        value={pricePerToken}
        onChange={(e) => setPricePerToken(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Softcap Amount"
        value={softcapAmount}
        onChange={(e) => setSoftcapAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Hardcap Amount"
        value={hardcapAmount}
        onChange={(e) => setHardcapAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="datetime-local"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="datetime-local"
        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Update Presale
      </button>
    </form>
  );
};

export default UpdateForm;
