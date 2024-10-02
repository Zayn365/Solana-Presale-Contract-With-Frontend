import React, { useState } from "react";
import { buyToken } from "../utils/solana";

const BuyTokenForm = ({}) => {
  const [presaleInfoPublicKey, setPresaleInfoPublicKey] = useState("");
  const [presaleAuthority, setPresaleAuthority] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [presaleVault, setPresaleVault] = useState("");
  const [buyer, setBuyer] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [associatedTokenProgram, setassociatedTokenProgram] = useState("");
  const [tokenProgramId, settokenProgramId] = useState("");
  const [rentAccount, setrentAccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    buyToken({
      presaleInfoPublicKey,
      presaleAuthority,
      userInfo,
      presaleVault,
      buyer,
      tokenAmount,
      amount,
      associatedTokenProgram,
      tokenProgramId,
      rentAccount,
    });
  };

  return (
    <form
      className="space-y-4 p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold">Buy Token</h2>

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
        placeholder="Presale Authority"
        value={presaleAuthority}
        onChange={(e) => setPresaleAuthority(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Associated Token Program Id"
        value={associatedTokenProgram}
        onChange={(e) => setassociatedTokenProgram(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Token Program ID"
        value={tokenProgramId}
        onChange={(e) => settokenProgramId(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Rent Account"
        value={rentAccount}
        onChange={(e) => setrentAccount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="User Info"
        value={userInfo}
        onChange={(e) => setUserInfo(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Presale Vault"
        value={presaleVault}
        onChange={(e) => setPresaleVault(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Buyer"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Token Amount"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Buy Token
      </button>
    </form>
  );
};

export default BuyTokenForm;
