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
    <div className="min-h-screen px-6 py-10">
      <Link to="/report" className="btn">
        ← Back to all reports
      </Link>
      <article
        className="prose prose-invert max-w-350 mx-auto mt-8
  bg-neutral-800 border border-neutral-800 rounded-2xl p-5
  transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]"
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
