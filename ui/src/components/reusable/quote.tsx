import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

interface Quote {
    id: number;
    quote: string;
    author: string;
}

interface Props {
    quoteId: Quote['id'];
}

const quotes: Quote[] = [
    {
        id: 1,
        quote: `We may assume the superiority ceteris paribus
        [all things being equal] of the demonstration
        which derives from fewer postulates or
        hypotheses.`,
        author: 'Aristotle',
    },
    {
        id: 2,
        quote: `Rule I: We are to admit no more causes of
        natural things than such as are both true and
        sufficient to explain their appearances.`,
        author: 'Sir Isaac Newton',
    },
    {
        id: 3,
        quote: `If a thing can be done adequately by means of one,
        it is superfluous to do it by means of several; for
        we observe that nature does not employ two
        instruments where one suffices.`,
        author: 'Thomas Aquinas',
    },
    {
        id: 4,
        quote: `You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.`,
        author: 'Friedrich Nietzsche',
    },
    {
        id: 5,
        quote: `Beauty of style and harmony and grace and good rhythm depend on Simplicity.`,
        author: 'Plato',
    },
    {
        id: 6,
        quote: `Man is born free, and he is everywhere in chains. Those who think themselves the masters of others are indeed greater slaves than they.`,
        author: 'Jean-Jacques Rousseau',
    },
];

export const FancyQuote = ({ quoteId }: Props) => {
    const quote = quotes.find((quote) => quote.id === quoteId);

    if (!quote) return null;

    return (
        <div className='my-6 pt-12 px-4 mx-auto sm:px-6 md:flex md:flex-col md:pt-16 md:px-30 md:max-w-screen-md lg:px-40 opacity-30 hover:opacity-60 hover:scale-110 transition-all transform ease-in-out duration-[3000ms]'>
            <blockquote className='md:flex md:flex-grow md:flex-col pointer-events-none'>
                <div className='relative text-lg text-neutral-200 md:flex-grow'>
                    <RiDoubleQuotesL className='absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-teal-500 opacity-50' />
                    <p className='relative italic'>{quote.quote}</p>
                </div>
                <footer className='mt-8'>
                    <div className='flex flex-row-reverse sm:flex-row'>
                        <div className='mr-10 sm:ml-10'>
                            <div className='text-neutral-200'>
                                {quote.author}
                            </div>
                        </div>
                    </div>
                </footer>
            </blockquote>
        </div>
    );
};
