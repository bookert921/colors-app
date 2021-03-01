import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ colorsPerPage, allColors, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allColors / colorsPerPage); i++) {
        pageNumbers.push(i);
    };

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
        </div>
    );
};

export default Pagination;
