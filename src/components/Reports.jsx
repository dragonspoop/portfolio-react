import { Link } from 'react-router-dom';
import reports from '../data/reportsList.js'
import ReportsCard from './ReportsCard';
export const Reports = () => {
  return (
    <section id='ctf' className="section">
      <div className="container">
        <h2>CTF-Writeups</h2>
        <p className="sub">Some Writeups written by me on the ctf's i did .</p>
        <div className="grid grid-3">
            {reports.slice(0,3).map(p => <ReportsCard key={p.id} {...p} />)}
        </div>
      <Link 
      className='btn sub mt-10 absolute right-40'
       to={`/report`}> See more +
      </Link>
      </div>
    </section>
  );
};
