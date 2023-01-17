import React, { useEffect, useState } from "react";
import "./App.css";
import AfterLoginBody from "./components/AfterLoginBody";
import NavBar from "./components/NavBar";
import LoginBody from "./components/LoginBody";
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
      const contractAddress = "";
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
        } else {
          alert("Please install metamask !!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  let { isLogin, setIsLogin } = useState("false");
  isLogin = "true";
  return (
    <div className="App">
      <NavBar />
      {isLogin === "false" ? <LoginBody /> : <AfterLoginBody />}
    </div>
  );
}
export default App;
