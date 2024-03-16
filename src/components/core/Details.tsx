/* eslint-disable eqeqeq */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import MainLayout from '../../layouts/MainLayout';

function Details() {
  const slides = [
    'https://www.azquotes.com/picture-quotes/quote-the-idea-that-women-journalists-bring-a-different-taste-in-stories-or-sensibility-isnt-jill-abramson-121-29-55.jpg',
    'https://www.azquotes.com/picture-quotes/quote-by-giving-us-the-opinions-of-the-uneducated-journalism-keeps-us-in-touch-with-the-ignorance-oscar-wilde-31-45-37.jpg',
    'https://www.azquotes.com/picture-quotes/quote-what-passes-for-investigative-journalism-is-finding-somebody-with-their-pants-down-literally-robert-scheer-77-58-37.jpg',
    'https://cdn.quotesgram.com/img/9/52/2080077445-quote-if-one-reads-a-newspaper-only-for-information-one-does-not-learn-the-truth-not-even-the-truth-karl-kraus-330105.jpg',
    'https://www.azquotes.com/picture-quotes/quote-journalist-a-person-without-any-ideas-but-with-an-ability-to-express-them-a-writer-whose-karl-kraus-16-29-37.jpg',
  ];
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <MainLayout>
      <div className="overflow-hidden my-8 relative">
        <h3 className="text-center text-white  my-8 text-2xl">
          <span className="bg-black p-2">
            <span className="text-orange-200">*</span> Famlous Journalism Review{' '}
            <span className="text-orange-200">*</span>
          </span>
        </h3>
        <div
          className="flex w-1/2 opacity-100 transition ease-out duration-40"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img src={s} className="" />;
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={`circle${i}`}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i == current ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default Details;
