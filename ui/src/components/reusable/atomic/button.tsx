import React from 'react';
import { classed } from '@tw-classed/react';

export const Button = classed.button(
    'inline-flex items-center rounded-md border border-transparent font-medium text-white shadow-sm ',
    {
        variants: {
            color: {
                primary: 'bg-indigo-600 hover:bg-indigo-700',
                secondary: 'bg-gray-600 hover:bg-gray-700',
            },
            size: {
                sm: 'text-sm px-3 py-1',
                md: 'text-base px-4 py-2',
                lg: 'text-lg px-6 py-3',
            },
        },
        defaultVariants: {
            color: 'primary',
            size: 'md',
        },
    },
);
