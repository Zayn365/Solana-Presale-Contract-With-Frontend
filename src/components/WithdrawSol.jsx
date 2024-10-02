import { useState } from "react";
import { withdrawSol } from "../utils/solana";

export const WithdrawSolForm = () => {
  const [formData, setFormData] = useState({
    presaleInfoPublicKey: "",
    presaleVault: "",
    admin: "",
    amount: "",
    bump: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    withdrawSol(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold">Withdraw SOL</h2>
      {Object.keys(formData).map((key) => (
        <div key={key} className="flex flex-col">
          {/* <label htmlFor={key} className="text-sm font-semibold text-gray-700">
            {key}
          </label> */}
          <input
            type="text"
            id={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Withdraw SOL
      </button>
    </form>
  );
};
