import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Gifgriditem from './GifGridItem';

const Gifgrid = ({category}) => {
    const { data, loading } = useFetchGifs(category);
    
    return (
        <div>
            <h3>{ category }</h3> 
                {loading && <p>Loading</p>}
                <div className="card-grid">
                    {
                        data.map(img => (
                            <Gifgriditem 
                                key={img.id}    
                                {...img} 
                            />
                        ))
                    }
                </div>
        </div>
    )
}

export default Gifgrid
