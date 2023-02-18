import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: number): void {
    console.log("Criando um carro");
  }

  startVehicle(): void {
    console.log("Ligando o carro");
  }
}
