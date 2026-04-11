import { useState } from "react";

// Couleurs
const C = {
  bg: "#F0F4FF",
  blue: "#3B82F6",
  card: "#FFFFFF",
};

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") {
      onLogin({ role: "admin" });
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: C.bg,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 10
    }}>
      <h2>Connexion Admin</h2>

      <input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: 10 }}
      />

      <button
        onClick={login}
        style={{
          background: C.blue,
          color: "#fff",
          padding: 10,
          border: "none",
          borderRadius: 6
        }}
      >
        Se connecter
      </button>
    </div>
  );
}

export default function App() {
  const [session, setSession] = useState(null);

  if (!session) {
    return <LoginScreen onLogin={setSession} />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Tableau de bord</h1>
      <p>Bienvenue 👋</p>
    </div>
  );
}