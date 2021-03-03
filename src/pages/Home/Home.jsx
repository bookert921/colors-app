import React, { useContext, useState } from 'react';
import { ColorsContext } from '../../context/ColorsContext';

import ColorsList from '../../components/colors-list/ColorsList.component';
import Pagination from '../../components/pagination/Pagination.component';

import './Home.styles.css';

const Home = () => {
    const { colors, setColors } = useContext(ColorsContext);
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumbers = [];

    const allColors = colors.length;
    const colorsPerPage = 12;

    for (let i = 1; i <= Math.ceil(allColors / colorsPerPage); i++) {
        pageNumbers.push(i);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="list-view">
            <ColorsList colors={colors} setColors={setColors} currentPage={currentPage} />
            <Pagination paginate={paginate} pageNumbers={pageNumbers} />
        </div>
    )
}

export default Home
