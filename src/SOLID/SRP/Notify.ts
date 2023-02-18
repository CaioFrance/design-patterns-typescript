import Client from "./Client";

export default class Notify {
  constructor(private readonly client: Client) {}

  sendEmail(): boolean {
    console.log(`Enviando email: ${this.client.email}`);
    return true;
  }
}
