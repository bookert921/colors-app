import React from 'react';
import ColorsList from '../../components/colors-list/ColorsList.component';
import Header from '../../components/header/Header.component';
import SideBar from '../../components/sidebar/SideBar.component';
import ColorsListView from '../ColorDetails/ColorDetails';


import './Home.styles.css';

const Home = ({
    colors,
    currentPage,
    paginate,
    loading,
    searchColors,
    handleSearch }) => {

    // Colors View (Pagination Magic)
    // const colorsPerPage = 12;
    // const indexOfLastColorSet = currentPage * colorsPerPage;
    // const indexOfFirstColorSet = indexOfLastColorSet - colorsPerPage;
    // const currentColors = colors.slice(indexOfFirstColorSet, indexOfLastColorSet);
    return (
        <>
            <ColorsList />
            {/* <Header
                searchFunction={handleSearch}
                searchField={searchColors} />
            <main className="content-container">
                <SideBar />
                <div className="showpiece"></div>
                <ColorsListView
                    colors={colors}
                    searchColors={searchColors}
                    colorsPerPage={colorsPerPage}
                    paginate={paginate}
                    loading={loading}
                    currentColors={currentColors} />
            </main> */}
        </>
    )
}

export default Home
