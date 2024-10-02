import {
  PublicKey,
  SystemProgram,
  Connection,
  clusterApiUrl,
} from "@solana/web3.js";
import { AnchorProvider, Program } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import idl from "./idl.json";
import { Buffer } from "buffer";
import { toast } from "sonner";
window.Buffer = Buffer;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const presaleProgramId = new PublicKey(
  "3Xn3uRdKBYbr8RTH3h7R1qDuUAYkdCsynFDpThi9BfP4"
);

// Initialize provider after connection is defined
const provider = new AnchorProvider(connection, window.solana, {});

// Initialize program with the provider and IDL
const program = new Program(idl, presaleProgramId, provider);
const presaleInfoPubkey = new PublicKey(
  "4axqzGngUCF1wf9Qkhjge7j64TXCDrRK4shtYek8xFQb"
);
var globalWallet;
// Connect wallet function
export async function connectWallet() {
  if (window.solana) {
    try {
      const response = await window.solana.connect();
      console.log("Connected to wallet: ", response.publicKey.toString());
      globalWallet = response.publicKey.toString();
      return response.publicKey.toString();
    } catch (err) {
      console.error("Failed to connect wallet: ", err);
      return null;
    }
  } else {
    alert("Solana wallet not found! Please install a wallet like Phantom.");
    return null;
  }
}

// Create presale function
// Create presale function
export async function createPresale(
  tokenMintAddress,
  softcapAmount,
  hardcapAmount,
  maxTokenAmountPerAddress,
  pricePerToken,
  startTime,
  endTime,
  authority
) {
  // const softcapBN = new anchor.BN(softcapAmount); 
  console.log(authority);
  try {
    console.log("1");
    // Ensure the addresses are PublicKey instances
    const tokenMintPubkey = new PublicKey(tokenMintAddress);
    const authorityPubkey = new PublicKey(authority ? authority : globalWallet);
    console.log("2");
    // Convert amounts to anchor.BN if needed
    const softcapBN = new anchor.BN(softcapAmount);
    const hardcapBN = new anchor.BN(hardcapAmount);
    const maxTokenBN = new anchor.BN(maxTokenAmountPerAddress);
    const priceBN = new anchor.BN(pricePerToken);
    console.log("3");
    // Convert startTime and endTime to anchor.BN
    const startTimeBN = new anchor.BN(startTime);
    const endTimeBN = new anchor.BN(endTime);
    console.log("4");
    console.log(
      tokenMintAddress,
      softcapBN.toString(),
      hardcapBN.toString(),
      maxTokenBN.toString(),
      priceBN.toString(),
      startTimeBN.toString(),
      endTimeBN.toString(),
      authority,
      "Whats this"
    );
    console.log("5");
    // Create presale transaction using Anchor
    const transaction = await program.methods
      .createPresale(
        tokenMintPubkey,
        softcapBN,
        hardcapBN,
        maxTokenBN,
        priceBN,
        startTimeBN,
        endTimeBN
      )
      .accounts({
        presaleInfo: presaleInfoPubkey,
        authority: authorityPubkey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
      console.log("6");
    toast.success(`Transaction successful: ${transaction}`);
    console.log("Transaction successful: ", transaction);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
}

// updatePresale presale function
export const updatePresale = async (
  presaleInfoPublicKey,
  authority,
  maxTokenAmountPerAddress,
  pricePerToken,
  softcapAmount,
  hardcapAmount,
  startTime,
  endTime
) => {
  try {
    const transaction = await program.methods
      .updatePresale(
        maxTokenAmountPerAddress,
        pricePerToken,
        softcapAmount,
        hardcapAmount,
        startTime,
        endTime
      )
      .accounts({
        presaleInfo: presaleInfoPublicKey,
        authority: authority,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("Transaction signature", transaction);

    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// depositToken presale function
export const depositToken = async (
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
  rentAccount
) => {
  try {
    const transaction = await program.methods
      .depositToken(amount)
      .accounts({
        mintAccount: mintAccount,
        fromAssociatedTokenAccount: fromAssociatedTokenAccount,
        fromAuthority: fromAuthority,
        toAssociatedTokenAccount: toAssociatedTokenAccount,
        presaleVault: presaleVault,
        presaleInfo: presaleInfoPublicKey,
        admin: admin,
        rent: rentAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: tokenProgramId,
        associatedTokenProgram: associatedTokenProgram,
      })
      .rpc();

    console.log("Deposit Transaction signature", transaction);
    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// startPresale presale function
export const startPresale = async (
  presaleInfoPublicKey,
  authority,
  startTime,
  endTime
) => {
  try {
    const transaction = await program.methods
      .startPresale(startTime, endTime)
      .accounts({
        presaleInfo: presaleInfoPublicKey,
        authority: authority,
      })
      .rpc();

    console.log("Start Presale Transaction signature", transaction);
    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// buyToken presale function
export const buyToken = async (
  presaleInfoPublicKey,
  presaleAuthority,
  userInfo,
  presaleVault,
  buyer,
  tokenAmount,
  quoteAmount,
  associatedTokenProgram,
  tokenProgramId,
  rentAccount
) => {
  try {
    const transaction = await program.methods
      .buyToken(tokenAmount, quoteAmount)
      .accounts({
        presaleInfo: presaleInfoPublicKey,
        presaleAuthority: presaleAuthority,
        userInfo: userInfo,
        presaleVault: presaleVault,
        buyer: buyer,
        rent: rentAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: tokenProgramId,
        associatedTokenProgram: associatedTokenProgram,
      })
      .rpc();

    console.log("Buy Token Transaction signature", transaction);

    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// claimToken presale function
export const claimToken = async (
  presaleTokenMintAccount,
  buyerPresaleTokenAssociatedTokenAccount,
  presalePresaleTokenAssociatedTokenAccount,
  userInfo,
  presaleInfoPublicKey,
  presaleAuthority,
  buyer,
  bump,
  associatedTokenProgram,
  tokenProgramId,
  rentAccount
) => {
  try {
    const transaction = await program.methods
      .claimToken(bump)
      .accounts({
        presaleTokenMintAccount: presaleTokenMintAccount,
        buyerPresaleTokenAssociatedTokenAccount:
          buyerPresaleTokenAssociatedTokenAccount,
        presalePresaleTokenAssociatedTokenAccount:
          presalePresaleTokenAssociatedTokenAccount,
        userInfo: userInfo,
        presaleInfo: presaleInfoPublicKey,
        presaleAuthority: presaleAuthority,
        buyer: buyer,
        rent: rentAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: tokenProgramId,
        associatedTokenProgram: associatedTokenProgram,
      })
      .rpc();

    console.log("Claim Token Transaction signature", transaction);

    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// withdrawSol presale function
export const withdrawSol = async (
  presaleInfoPublicKey,
  presaleVault,
  admin,
  amount,
  bump
) => {
  try {
    const transaction = await program.methods
      .withdrawSol(amount, bump)
      .accounts({
        presaleInfo: presaleInfoPublicKey,
        presaleVault: presaleVault,
        admin: admin,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    console.log("Withdraw SOL Transaction signature", transaction);
    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
// withdrawToken presale function
export const withdrawToken = async (
  mintAccount,
  adminAssociatedTokenAccount,
  presaleAssociatedTokenAccount,
  presaleTokenMintAccount,
  presaleInfoPublicKey,
  adminAuthority,
  amount,
  bump,
  associatedTokenProgram,
  tokenProgramId,
  rentAccount
) => {
  try {
    const transaction = await program.methods
      .withdrawToken(amount, bump)
      .accounts({
        mintAccount: mintAccount,
        adminAssociatedTokenAccount: adminAssociatedTokenAccount,
        presaleAssociatedTokenAccount: presaleAssociatedTokenAccount,
        presaleTokenMintAccount: presaleTokenMintAccount,
        presaleInfo: presaleInfoPublicKey,
        adminAuthority: adminAuthority,
        rent: rentAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: tokenProgramId,
        associatedTokenProgram: associatedTokenProgram,
      })
      .rpc();

    console.log("Withdraw Token Transaction signature", transaction);
    toast.success(`Transaction successful: ${transaction}`);
  } catch (e) {
    toast.error(`Error during presale creation: ${e.message}`);
    console.error("Error during presale creation:", e);
  }
};
