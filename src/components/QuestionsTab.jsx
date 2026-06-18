import { useState } from "react";
import FloatingHeart from "./FloatingHeart.jsx";

export default function QuestionsTab() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const saveAnswer = async (selectedAnswer) => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://6a338fc2c6ca2aee43865a57.mockapi.io/api/get-response/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer: selectedAnswer,
            createdAt: new Date().toISOString(),
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setAnswer(selectedAnswer);

        setMessage(
          selectedAnswer === "yes"
            ? "💖"
            : "💔"
        );

        console.log(data);
      }
    } catch (err) {
      setMessage("Failed to save");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="thank-you"
      style={{
        border: "2px solid red",
        marginBottom: "50px",
        padding: "40px",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      <FloatingHeart />

      <h2>💌 Date pe chalogi kya?</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#ff4d6d",
            color: "#fff",
            cursor: "pointer",
          }}
          disabled={loading}
          onClick={() => saveAnswer("yes")}
        >
          Yes ❤️
        </button>

        <button
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#444",
            color: "#fff",
            cursor: "pointer",
          }}
          disabled={loading}
          onClick={() => saveAnswer("no")}
        >
          No 💔
        </button>
      </div>

      {loading && <p>Saving...</p>}

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}

      {answer && (
        <h3 style={{ marginTop: "20px" }}>
          {answer === "yes"
            ? "Yayyy 💖 Date confirmed 😍"
            : "Koi baat nahi 😅"}
        </h3>
      )}
    </section>
  );
}