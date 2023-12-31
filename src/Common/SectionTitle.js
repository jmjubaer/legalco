import { merriweather } from '@/Utils/Font';
import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <h2 className={`${merriweather.className} text-5xl text-center`}>{title}</h2>
    );
};

export default SectionTitle;