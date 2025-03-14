import { Account } from "../components/Account";
import { Connect } from "../components/Connect";
import { Connected } from "../components/Connected";
import { MintNFT } from "../components/MintNFT";
import { NetworkSwitcher } from "../components/NetworkSwitcher";

const Page = () => {
  return (
    <>
      <h1>Marketplace</h1>

      <Connect />

      <Connected>

        <Account />
        <hr />
        <MintNFT />
        <hr />
        <NetworkSwitcher />
      </Connected>
    </>
  );
};

export default Page;