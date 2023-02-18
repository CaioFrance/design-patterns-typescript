import BikeTranport from "./transport/BikeTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/transport";

export default (tranportType: string) => {
  let transport: Transport;

  switch (tranportType) {
    case "uber":
      transport = new CarTransport();

      console.log(transport.startTransport());
      break;
    case "log":
      transport = new MotorcycleTransport();

      console.log(transport.startTransport());
      break;
    case "bike":
      transport = new BikeTranport();

      console.log(transport.startTransport());
  }
};
