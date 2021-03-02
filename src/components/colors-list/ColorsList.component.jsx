import React, { useEffect, useContext } from 'react';
// import ColorCard from '../color-card/ColorCard.component';
import ColorsDB from '../../apis/ColorsDB';
import { ColorsContext } from '../../context/ColorsContext';

import './ColorsList.styles.css';

const ColorsList = (props) => {
    const { colors, setColors } = useContext(ColorsContext);


    /* LOADER */
    // if (loading) {
    //     return (
    //         <div className="d-flex justify-content-center">
    //             <div
    //                 className="spinner-border"
    //                 role="status">
    //                 <span className="visually-hidden">
    //                     Loading...
    //                 </span>
    //             </div>
    //         </div>
    //     )
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ColorsDB
                const colors = await response.data.colors
                setColors(colors);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, []);



    // const paginationView = [];
    // const allCards = [];

    // const showSwatches = (searchField) => {
    //     if (searchField !== null) {
    //         colors.forEach(color => {
    //             const { id, color_name, hex_value } = color;
    //             if (color_name.toLowerCase().indexOf(searchField.toLowerCase()) === -1) {
    //                 return;
    //             }
    //             allCards.push(<ColorCard key={id} hex={hex_value} color={color_name} />)
    //         })
    //     }
    // }

    // colorsList.forEach(color => {
    //     const { id, color_name, hex_value } = color;
    //     paginationView.push(<ColorCard key={id} hex={hex_value} color={color_name} />);
    // })

    // showSwatches(searchField);

    return (
        <div className="color-list">
            hi
            {/* {searchField ? allCards : paginationView} */}
        </div>
    );
};

export default ColorsList;
