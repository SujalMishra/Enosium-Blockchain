import './App.css';
import {useEffect,useState} from "react";
import abi from "./contract/file.json";


function App() {
 
  const [account,setAccount] = useState("None")
  const [state,setState] = useState({
   provider:null,
   signer:null,
   contract:null,
  })
 
  useEffect(()=>{
   const connectWallet = async() =>{
      const contractAddress = "";
      const contractABI = abi.abi;
      try {
       const {ethereum} = window;
 
       if(ethereum){
         const account = await ethereum.request({method:"eth_requestAccounts",});
 
         window.ethereum.on("chainChanged", () => {
           window.location.reload();
         });
 
         window.ethereum.on("accountsChanged", () => {
           window.location.reload();
         });
       
       const provider = new ethers.providers.Web3Provider(ethereum);
       const signer = provider.getSigner();
       const contract = new ethers.Contract(contractAddress,contractABI,signer);
       setAccount(account)
        setState({provider,signer,contract});
       }else{
         alert("Please install metamask !!");
       }
      } catch (error) {
       console.log(error);
      }
   }
   connectWallet();
  },[]);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
