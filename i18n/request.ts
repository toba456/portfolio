import { getRequestConfig } from "next-intl/server";

// Locale switching is disabled for now — English only. See messages/es.json
// if it needs to come back.
export default getRequestConfig(async () => {
  return {
    locale: "en",
    messages: (await import("../messages/en.json")).default,
  };
});
