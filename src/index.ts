import Client from "./SRP/Client";
import Notify from "./SRP/Notify";

const client = new Client();
client.email = "email@test";

const notify = new Notify(client);

notify.sendEmail();
