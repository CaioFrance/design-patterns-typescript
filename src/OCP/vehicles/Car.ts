import IVehicleCar from "./IVehicleCar";
import Vehicle from "./Vehicle";

export default class Car extends Vehicle implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    super();
    this.configure(color, year, engine, seats, doors);
  }

  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log("Criando um carro");
  }

  startVehicle(): void {
    console.log("Ligando o carro");
  }
}
