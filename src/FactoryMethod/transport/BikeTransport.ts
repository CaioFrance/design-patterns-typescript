import Transport from "./transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BikeTranport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike();
  }
}
