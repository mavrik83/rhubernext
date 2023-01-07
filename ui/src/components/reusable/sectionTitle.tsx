import React from 'react';

interface Props {
    text: string;
}

export const SectionTitle = ({ text }: Props) => (
    <h2 className='text-3xl tracking-tight text-neutral-200 sm:text-4xl'>
        {text}
    </h2>
);
