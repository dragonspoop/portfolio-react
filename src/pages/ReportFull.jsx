import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function ReportsFull() {
  const { id } = useParams("");
  const [content, setContent] = useState("Loading...");
  useEffect(() => {
    let cancelled = false;
    async function fetchReport() {
      setContent("Loading...");
      try {
        const res = await import(`../reports/${id}.md?raw`);
        const text = res.default;
        if (!cancelled) setContent(text);
      } catch (err) {
        if (!cancelled) setContent("Failed to load report.");
        console.error(err);
      }
    }

    if (id) fetchReport();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      {/* Header with back button */}
      <div
        style={{
          padding: "24px 20px",
          borderBottom: "1px solid rgba(120, 140, 160, 0.2)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Link
            to="/report"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(200, 210, 220, 0.85)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "8px 12px",
              borderRadius: 4,
              border: "1px solid rgba(120, 140, 160, 0.35)",
              backgroundColor: "rgba(40, 50, 60, 0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(60, 70, 80, 0.5)";
              e.target.style.borderColor = "rgba(120, 140, 160, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(40, 50, 60, 0.4)";
              e.target.style.borderColor = "rgba(120, 140, 160, 0.35)";
            }}
          >
            ← Back to Writeups
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "40px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <article
          style={{
            backgroundColor: "rgba(8, 10, 12, 0.7)",
            border: "1px solid rgba(120, 140, 160, 0.25)",
            borderRadius: 8,
            padding: "40px",
            lineHeight: 1.8,
            color: "var(--text)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "rgba(120, 140, 160, 0.45)";
            e.target.style.boxShadow = "0 0 18px rgba(120, 140, 160, 0.18)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "rgba(120, 140, 160, 0.25)";
            e.target.style.boxShadow = "none";
          }}
          className="markdown-content"
        >
          <style>{`
            .markdown-content {
              word-wrap: break-word;
              overflow-wrap: break-word;
              word-break: break-word;
            }
            .markdown-content h1 {
              font-size: 32px;
              font-weight: 700;
              margin-bottom: 24px;
              color: rgba(210, 220, 230, 0.95);
              border-bottom: 2px solid rgba(120, 140, 160, 0.4);
              padding-bottom: 16px;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content h2 {
              font-size: 24px;
              font-weight: 600;
              margin-top: 32px;
              margin-bottom: 16px;
              color: rgba(190, 205, 220, 0.9);
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content h3 {
              font-size: 18px;
              font-weight: 600;
              margin-top: 24px;
              margin-bottom: 12px;
              color: rgba(180, 195, 210, 0.85);
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content p {
              margin-bottom: 16px;
              font-size: 15px;
              line-height: 1.8;
              color: var(--text);
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content ul, .markdown-content ol {
              margin: 16px 0 16px 24px;
              font-size: 15px;
            }
            .markdown-content li {
              margin-bottom: 8px;
              line-height: 1.6;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content code {
              background-color: rgba(80, 95, 110, 0.25);
              color: rgba(210, 220, 230, 0.95);
              padding: 2px 6px;
              border-radius: 3px;
              font-family: 'Monaco', 'Courier New', monospace;
              font-size: 13px;
              word-wrap: break-word;
              overflow-wrap: break-word;
              word-break: break-all;
            }
            .markdown-content pre {
              background-color: rgba(8, 10, 12, 0.75);
              border: 1px solid rgba(120, 140, 160, 0.25);
              border-radius: 6px;
              padding: 16px;
              overflow-x: auto;
              margin: 16px 0;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: pre-wrap;
            }
            .markdown-content pre code {
              background: none;
              color: rgba(190, 205, 220, 0.9);
              padding: 0;
              border-radius: 0;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: pre-wrap;
              word-break: break-word;
            }
            .markdown-content blockquote {
              border-left: 3px solid rgba(120, 140, 160, 0.45);
              padding-left: 16px;
              margin: 16px 0;
              color: var(--muted);
              font-style: italic;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content a {
              color: rgba(190, 205, 220, 0.9);
              text-decoration: none;
              border-bottom: 1px solid rgba(120, 140, 160, 0.6);
              transition: all 0.2s ease;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .markdown-content a:hover {
              color: rgba(220, 230, 240, 1);
              border-bottom-color: rgba(190, 205, 220, 0.9);
            }
          `}</style>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
