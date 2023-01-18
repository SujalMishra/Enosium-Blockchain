import React, { useEffect, useState } from "react";
import "./App.css";
import AfterLoginBody from "./components/AfterLoginBody";
import NavBar from "./components/NavBar";
import BeforeLoginBody from "./components/BeforeLoginBody";
import "bootstrap/dist/css/bootstrap.min.css";
import abi from "./contract/invoice.json";
import { ethers } from "ethers";
function App() {
  const [account, setAccount] = useState("None");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = abi.contractAddress;
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
          console.log(state);
          console.log(account);
        } else {
          alert("Please install metamask !!");
        }
      } catch (error) {
        console.log(error);
      }
      
    };
    connectWallet();
  }, []);
  // connectWallet();
  return (
    <div className="App">
      <NavBar />
     
      {account ==="None" ? <BeforeLoginBody /> : <AfterLoginBody />}
    </div>
  );
}
export default App;
