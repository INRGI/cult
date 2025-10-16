import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <GoogleOAuthProvider clientId='1042942150757-2q0dlbnb2ti5dhu68nf8bia7eusuj795.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
