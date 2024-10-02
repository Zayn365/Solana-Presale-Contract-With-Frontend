# Presale Contract and Frontend

This repository contains a Solana-based **presale contract** and a **frontend** for users to participate in a token presale. The project is divided into two main parts:

1. **Presale Contract**: The smart contract logic, located in the `palm-presale-contract` folder, handles all presale-related operations.
2. **Frontend**: A React-based frontend that allows users to interact with the presale contract to claim tokens, withdraw funds, and manage presale-related functions.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Presale Contract Overview](#presale-contract-overview)
3. [Frontend Overview](#frontend-overview)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Project Structure

root │ ├── palm-presale-contract/ │ ├── Anchor.toml │ ├── Cargo.toml │ ├── src/ │ │ └── lib.rs │ └── migrations/ │ └── deploy.ts │ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ │ ├── ClaimTokenForm.js │ │ │ ├── WithdrawSolForm.js │ │ │ └── WithdrawTokenForm.js │ │ └── pages/ │ │ ├── index.js │ ├── public/ │ └── package.json │ └── README.md

### 1. **Presale Contract (`palm-presale-contract/`)**

This folder contains the smart contract logic for handling the presale of tokens on the Solana blockchain. It is built using the Anchor framework and written in Rust.

### 2. **Frontend (`frontend/`)**

The frontend is a React.js project designed to allow users to interact with the presale contract. Users can claim tokens, withdraw SOL, and withdraw tokens after the presale is complete.

---

## Presale Contract Overview

### **Contract Summary**

The **presale contract** enables the creation and management of token presales on the Solana blockchain. Key features include:

- **Token Sale Management**: The contract allows a presale authority to define token presale parameters.
- **Token Claims**: Users can claim their presale tokens once the sale is complete.
- **Withdrawals**: The contract allows the presale authority to withdraw both SOL and presale tokens at the end of the sale.

### **Key Functions**

1. **claimToken**:

   - Allows users to claim the presale tokens they are entitled to.
   - Parameters: `presaleTokenMintAccount`, `buyerPresaleTokenAssociatedTokenAccount`, `presalePresaleTokenAssociatedTokenAccount`, etc.

2. **withdrawSol**:

   - Admin function to withdraw SOL accumulated during the presale.
   - Parameters: `presaleInfoPublicKey`, `presaleVault`, `admin`, `amount`, `bump`.

3. **withdrawToken**:
   - Admin function to withdraw unsold tokens from the presale.
   - Parameters: `mintAccount`, `adminAssociatedTokenAccount`, `presaleAssociatedTokenAccount`, etc.

### **Deployment**

To deploy the contract, run the following commands inside the `palm-presale-contract/` folder:

```bash
anchor build
anchor deploy

## Frontend Overview

The frontend enables interaction with the presale contract. It provides a user-friendly interface for claiming tokens, viewing the presale status, and withdrawing funds.

### Frontend Features:

- **Claim Token Form**: Allows users to claim their purchased tokens after the presale is complete.
- **Withdraw SOL**: Admin function to withdraw the accumulated SOL from the presale vault.
- **Withdraw Token**: Admin function to withdraw the remaining unsold tokens from the contract.

The frontend is built using React.js, with Tailwind CSS for responsive design, and interacts with the contract via Solana's Web3.js and Anchor's APIs.

---

### Forms and Components

- **ClaimTokenForm**:
  A responsive form that accepts presale-related inputs and interacts with the `claimToken` function from the contract.

- **WithdrawSolForm**:
  A form for the admin to withdraw SOL from the presale vault.

- **WithdrawTokenForm**:
  A form for the admin to withdraw unsold tokens from the presale.

---

## Frontend Overview

The frontend enables interaction with the presale contract. It provides a user-friendly interface for claiming tokens, viewing the presale status, and withdrawing funds.

### Frontend Features:

- **Claim Token Form**: Allows users to claim their purchased tokens after the presale is complete.
- **Withdraw SOL**: Admin function to withdraw the accumulated SOL from the presale vault.
- **Withdraw Token**: Admin function to withdraw the remaining unsold tokens from the contract.

The frontend is built using React.js, with Tailwind CSS for responsive design, and interacts with the contract via Solana's Web3.js and Anchor's APIs.

---

### Forms and Components

- **ClaimTokenForm**:
  A responsive form that accepts presale-related inputs and interacts with the `claimToken` function from the contract.

- **WithdrawSolForm**:
  A form for the admin to withdraw SOL from the presale vault.

- **WithdrawTokenForm**:
  A form for the admin to withdraw unsold tokens from the presale.

---
#Contributor

[Takhi77](https://github.com/Takhi77)
```
