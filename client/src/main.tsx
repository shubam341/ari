import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
 <Auth0Provider
  domain="dev-m32bsyrlz1dwlkrs.us.auth0.com"
  clientId="zQK4jnVs62Lx8rw8g2kloqMTlyCs38dQ"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://myapp-api", // MUST match .env
  }}
>
  <App />
</Auth0Provider>

);
