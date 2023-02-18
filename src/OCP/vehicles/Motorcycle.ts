import IVehicleMotorcycle from "./IVehicleMotorcycle";
import Vehicle from "./Vehicle";

export default class Motorcycle extends Vehicle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    super();
    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: number): void {
    console.log("Criando um carro");
  }

  startVehicle(): void {
    console.log("Ligando o carro");
  }
}
