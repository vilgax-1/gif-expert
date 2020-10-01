import React, { useState } from 'react';
import Addcategory from './components/addCategory';
import Gifgrid from './components/GifGrid';

export const GiftExpertApp = () =>{
    
    const [categories, setCategories] = useState(['One Punch']);
    
    return (
        <>
            <h2>GiftExpertApp</h2>
            <Addcategory setCategories={ setCategories }/>
            
            <hr/>
            <ol>
                { 
                    categories.map((o) => (
                        <Gifgrid 
                            key={o}
                            category={o}
                        />
                    ))
                }
            </ol>
        </>
    )
}