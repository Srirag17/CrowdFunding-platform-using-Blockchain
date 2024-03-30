import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8DbDed8F24a4B19AC419209F788961292bbDFB7f"
);

export default instance;
