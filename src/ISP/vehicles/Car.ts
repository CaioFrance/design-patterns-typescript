import IVehicle from "./IVehicle";
import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar, IVehicle {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Ligando os motores");
  }

  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Carro: ${color}. Ano: ${year}. Engine: ${engine}. Seats: ${seats}`
    );

    this.startVehicle();
  }
}
