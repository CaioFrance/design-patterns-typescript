import DIP from "./DIP";
import ISP from "./ISP";
import LSP from "./LSP";
import OCP from "./OCP";
import SRP from "./SRP";

export default () => {
  // SRP test
  SRP();

  // OCP test
  OCP();

  // LSP test
  LSP();

  // ISP test
  ISP();

  // DIP test
  DIP();
};
