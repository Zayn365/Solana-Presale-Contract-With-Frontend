import React, { useState, useEffect } from "react";
import { connectWallet } from "./utils/solana";
import CreatePresaleForm from "./components/CreatePresale";
import DepositTokenForm from "./components/DepositTokenForm";
import UpdateForm from "./components/UpdateForm";
import StartPresaleForm from "./components/StartPresaleForm";
import BuyTokenForm from "./components/BuyTokenForm";
import { ClaimTokenForm } from "./components/ClainTokenForm";
import { WithdrawSolForm } from "./components/WithdrawSol";
import { WithdrawTokenForm } from "./components/WidthdrawToken";

// import solImage from "../public/images/logos/solLogo.webp";
function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [activeTab, setActiveTab] = useState("create"); // Set initial active tab

  useEffect(() => {
    (async () => {
      const address = await connectWallet();
      setWalletAddress(address);
    })();
  }, []);

  const list = [
    {
      name: "create",
      component: <CreatePresaleForm />,
    },
    {
      name: "deposit",
      component: <DepositTokenForm />,
    },
    {
      name: "update",
      component: <UpdateForm />,
    },
    {
      name: "start",
      component: <StartPresaleForm />,
    },
    {
      name: "buy",
      component: <BuyTokenForm />,
    },
    {
      name: "claim",
      component: <ClaimTokenForm />,
    },
    {
      name: "Sol",
      component: <WithdrawSolForm />,
    },
    {
      name: "Token",
      component: <WithdrawTokenForm />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-1">
      <div className="bg-white rounded-lg shadow-lg p-1 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold items-center flex justify-center !text-slate-800 mb-4">
          <img
            // src={solImage}
            src="../images/logos/solLogo.webp"
            alt="Sol Logo"
            width={60}
            height={60}
            className="p-2"
          />{" "}
          Pre-sale Contract
        </h1>
      </div>
      {walletAddress ? (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold !text-gray-800 mb-4">
            Welcome,{" "}
            <span className="text-blue-600">
              {walletAddress.toString()?.slice(0, 5) +
                "..." +
                walletAddress.toString()?.slice(5, 10)}
            </span>
          </h1>
          {/* Tabs */}
          <div className="grid grid-cols-3 justify-center items-center space-x-4 mb-6">
            {list.map((val, key) => {
              return (
                <div className="my-2" key={key}>
                  <button
                    className={`flex-1 py-2 px-6 rounded-lg ${
                      activeTab === val.name
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => setActiveTab(val.name)}
                  >
                    {val.name.toUpperCase()}
                  </button>
                </div>
              );
            })}
          </div>
          {/* <div className="flex space-x-4 mb-6">
            <button
              className={`flex-1 py-2 rounded-lg ${
                activeTab === "create"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("create")}
            >
              Create
            </button>
            <button
              className={`flex-1 py-2 rounded-lg ${
                activeTab === "deposit"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("deposit")}
            >
              Deposit
            </button>
            <button
              className={`flex-1 py-2 rounded-lg ${
                activeTab === "update"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("update")}
            >
              Update
            </button>
          </div> */}
          {/* Render the active form based on the selected tab */}
          {list.map((val, key) => {
            if (activeTab === val.name) {
              return val.component;
            }
          })}
          <h3 className="text-bold m-0 mt-4 text-md text-center opacity-[0.8]">
            Made With 💕 By <a href="https://github.com/zayn365">Zayn Saeed</a>
          </h3>
          <h3 className="text-bold m-0 text-md text-center opacity-[0.8]">
            Contract Made On 🦀
          </h3>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-red-600">
          Please connect your wallet
        </h1>
      )}
    </div>
  );
}

export default App;
