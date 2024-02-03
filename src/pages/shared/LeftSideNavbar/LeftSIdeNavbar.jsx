import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSIdeNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>Left Side: {categories.length}</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className='block' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSIdeNavbar;