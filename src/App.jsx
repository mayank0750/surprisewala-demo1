import react, {useState} from "react"
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WishCard from "./components/WishCard.jsx"; 
import Gallery from "./components/Gallery.jsx"; 
import QuestionsTab from "./components/QuestionsTab.jsx";
import ThankYouBanner from "./components/ThankYouBanner.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "9421733654") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Welcome Oggi</h2>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              background: "#ff4d6d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <WishCard />
      <Gallery />
      <QuestionsTab />
      <ThankYouBanner />
      <Footer />
    </>
  );
}

export default App;
