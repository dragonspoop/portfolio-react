import { Link } from "react-router-dom";

export default function ReportsCard({
  title,
  id,
  description,
  tags,
}){
  return(
    <div className="card hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-800 px-2 py-1 text-xs rounded-md">
            {tag}
          </span>
        ))}
      </div>
      {
        <Link to={`/report/${id}`}
        className="btn sub"
        >
        Read Full Reports →
        </Link>
      }
      </div>
  );
}