import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import reports from "../data/reportsList.js";
import ReportsCard from "../components/ReportsCard.jsx";

export default function ReportsPage() {
  return (
    <div className="min-h-screen px-6 py-10">
      <nav className="container">
        <h1 className="text-3xl font-bold mb-6">🕵️‍♂️ CTF Writeups</h1>
        <Link to={"/"}
        className="btn">🏚️ Back to Home</Link>
      </nav>
        <p className="text-gray-400 mb-8 max-w-2xl">
          A collection of my Capture The Flag reports — covering web, network,
          and privilege escalation challenges.
        </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((p) => (
          <ReportsCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
