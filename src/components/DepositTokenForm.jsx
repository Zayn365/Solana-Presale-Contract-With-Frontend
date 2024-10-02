import React from "react";
import { useState } from "react";

import { depositToken } from "../utils/solana";

const DepositTokenForm = () => {
  const [mintAccount, setMintAccount] = useState("");
  const [fromAssociatedTokenAccount, setFromAssociatedTokenAccount] =
    useState("");
  const [fromAuthority, setFromAuthority] = useState("");
  const [toAssociatedTokenAccount, setToAssociatedTokenAccount] = useState("");
  const [presaleVault, setPresaleVault] = useState("");
  const [presaleInfoPublicKey, setPresaleInfoPublicKey] = useState("");
  const [admin, setAdmin] = useState("");
  const [amount, setAmount] = useState("");
  const [associatedTokenProgram, setassociatedTokenProgram] = useState("");
  const [tokenProgramId, settokenProgramId] = useState("");
  const [rentAccount, setrentAccount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    depositToken({
      mintAccount,
      fromAssociatedTokenAccount,
      fromAuthority,
      toAssociatedTokenAccount,
      presaleVault,
      presaleInfoPublicKey,
      admin,
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
      <h2 className="text-2xl font-bold">Deposit Token</h2>

      <input
        type="text"
        placeholder="Mint Account"
        value={mintAccount}
        onChange={(e) => setMintAccount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="From Associated Token Account"
        value={fromAssociatedTokenAccount}
        onChange={(e) => setFromAssociatedTokenAccount(e.target.value)}
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
        placeholder="From Authority"
        value={fromAuthority}
        onChange={(e) => setFromAuthority(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="To Associated Token Account"
        value={toAssociatedTokenAccount}
        onChange={(e) => setToAssociatedTokenAccount(e.target.value)}
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
        placeholder="Presale Info Public Key"
        value={presaleInfoPublicKey}
        onChange={(e) => setPresaleInfoPublicKey(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Admin"
        value={admin}
        onChange={(e) => setAdmin(e.target.value)}
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
        Deposit Token
      </button>
    </form>
  );
};

export default DepositTokenForm;
