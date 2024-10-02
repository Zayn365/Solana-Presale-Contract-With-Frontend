import { useState } from "react";
import { createPresale } from "../utils/solana";

const CreatePresaleForm = ({ authority }) => {
  console.log(authority);
  const [tokenMintAddress, setTokenMintAddress] = useState("");
  const [softcapAmount, setSoftcapAmount] = useState(0);
  const [hardcapAmount, setHardcapAmount] = useState(0);
  const [maxTokenAmount, setMaxTokenAmount] = useState(0);
  const [pricePerToken, setPricePerToken] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPresale(
      tokenMintAddress,
      softcapAmount,
      hardcapAmount,
      maxTokenAmount,
      pricePerToken,
      startTime,
      endTime,
      authority
    );
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hour = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minutes}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold text-center mb-4">Create Presale</h2>
      <input
        type="text"
        placeholder="Token Mint Address"
        onChange={(e) => setTokenMintAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Softcap Amount"
        onChange={(e) => setSoftcapAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Hardcap Amount"
        onChange={(e) => setHardcapAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Max Token Amount"
        onChange={(e) => setMaxTokenAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Price Per Token"
        onChange={(e) => setPricePerToken(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="date"
        onChange={(e) =>
          setStartTime(Math.floor(new Date(e.target.value).getTime() / 1000))
        }
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="date"
        onChange={(e) =>
          setEndTime(Math.floor(new Date(e.target.value).getTime() / 1000))
        }
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Create Presale
      </button>
    </form>
  );
};

export default CreatePresaleForm;
