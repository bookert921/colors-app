import React from 'react';
import ColorsList from '../../components/colors-list/ColorsList.component';
import Pagination from '../../components/pagination/Pagination.component';


const ColorsListView = ({ currentColors, loading, searchColors, paginate, colors, colorsPerPage }) => {
    return (
        <div className="list-view">
            <ColorsList
                colors={colors}
                colorsList={currentColors}
                loading={loading}
                searchField={searchColors} />
            <Pagination
                colorsPerPage={colorsPerPage}
                allColors={colors.length}
                paginate={paginate} />
        </div>
    );
};

export default ColorsListView;
