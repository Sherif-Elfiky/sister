import "dotenv/config";
import { sendEmail } from "./smtp.js";

(async () => {
  sendEmail();
})();
