import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//Context APIs
import { AuthProvider } from "./hooks/useAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <App />
    </AuthProvider>
);
