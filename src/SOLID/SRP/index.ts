import Client from "./Client";
import Notify from "./Notify";

export default () => {
  const client = new Client();
  client.email = "email@test";

  const notify = new Notify(client);

  notify.sendEmail();
};
