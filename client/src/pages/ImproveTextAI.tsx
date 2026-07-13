import { useState } from "react";
import { generateAI } from "../services/ai.service";

const ImproveTextAI = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function improveText() {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const res = await generateAI("improve", {
        text,
      });

      setResult(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to improve text.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-4">
            AI Text Improver
          </h2>

          <textarea
            rows={8}
            className="form-control mb-4"
            placeholder="Write your text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={improveText}
          >
            {loading
              ? "Improving..."
              : "✨ Improve"}
          </button>

          {result && (
            <>
              <hr />

              <h4>Improved Text</h4>

              <textarea
                rows={10}
                className="form-control"
                value={result}
                readOnly
              />

              <button
                className="btn btn-success mt-3"
                onClick={() =>
                  navigator.clipboard.writeText(result)
                }
              >
                Copy
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default ImproveTextAI;