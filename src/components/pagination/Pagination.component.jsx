import React from 'react'

const Pagination = ({ colorsPerPage, allColors, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allColors / colorsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container justify-content-center align-center">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(page => (
                        <li key={page} className="page-item">
                            <a onClick={() => paginate(page)} href="!#" className="page-link">
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
