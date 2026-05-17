import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { TbStar } from "react-icons/tb";
import { RestourentCard } from "./RestourentCard";

export const TopRestourent = () => {

    const [sliding, setSliding] = useState(0);

    const slider = [
        {
            thumbnail: '/img/On Your Mind/2.jpg',
            price: '40% off above Rs: 500', title: 'Pizza',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Italian: Pizza Pasta Lasagna'
        },

        {
            thumbnail: '/img/On Your Mind/3.jpg',
            price: '40% off above Rs: 300', title: 'Tandori Roti',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Pakistani, Afgani, Many More..'
        },
        {
            thumbnail: '/img/On Your Mind/4.jpg',
            price: '40% off above Rs: 300', title: 'Tea Bread',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Spanish: Paella Tapas Churros'
        },
        {
            thumbnail: '/img/On Your Mind/5.jpg',
            price: '40% off above Rs: 300',
            title: 'Coffe With Beans', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/6.jpg',
            price: '40% off above Rs: 300', title: 'Omlet Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Mexican, Tacos, Enchiladas, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/15.jpg',
            price: '40% off above Rs: 300', title: 'Tikka Malai Botti',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Japanese, Sushi, Ramen'
        },
        { thumbnail: '/img/On Your Mind/10.jpg', price: '40% off above Rs: 300', title: 'Straberry Shake', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/11.jpg', price: '40% off above Rs: 300', title: 'Veg & Non Veg', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/16.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        { thumbnail: '/img/On Your Mind/22.jpg', price: '40% off above Rs: 300', title: 'Burger', rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>, more: 'Chines, Asians, Tibetan, Desserts Rohini' },
        {
            thumbnail: '/img/On Your Mind/26.jpeg',
            price: '40% off above Rs: 300', title: 'Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" /> 4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        }

    ];

    const CARD_WIDTH = 16;

    const canMoveNext = sliding < slider.length - 3;
    const canMovePrev = sliding > 0;

    const nextClick = () => {
        if (canMoveNext) setSliding(prev => prev + 2);
    };

    const prevClick = () => {
        if (canMovePrev) setSliding(prev => prev - 2);
    };

    return (
        <div className="mx-auto max-w-[66rem] my-7">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">
                    Top restaurant chains
                </h2>

                <div className="flex gap-2">

                    <button
                        onClick={prevClick}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${canMovePrev ? "bg-gray-400" : "bg-gray-200"
                            }`}
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={nextClick}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${canMoveNext ? "bg-gray-400" : "bg-gray-200"
                            }`}
                    >
                        <FaArrowRight />
                    </button>

                </div>
            </div>

            {/* SLIDER */}
            <div className="overflow-hidden mt-4">

  <div
    className="flex gap-4 transition-transform duration-300"
    style={{
      transform: `translateX(-${sliding * 16}rem)`
    }}
  >

    {slider.map((item, index) => (
      <RestourentCard key={index} {...item} />
    ))}

  </div>

</div>

        </div>
    );
};