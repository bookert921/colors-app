import React from 'react';
import { Link } from 'react-router-dom';



const Pagination = ({ paginate, pageNumbers }) => {
    return (
        <div className="pagination-container">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(page => (
                        <li key={page} className="page-item">
                            <Link onClick={() => paginate(page)} to="/" className="page-link">
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    );
};

export default Pagination;
