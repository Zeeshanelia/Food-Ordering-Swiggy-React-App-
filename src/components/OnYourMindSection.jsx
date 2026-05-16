import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { TbStar } from "react-icons/tb";
import { TopRestourent } from "./TopRestourent";

export const OnYourMindSection = () => {
    const [sliding, setSliding] = useState(0);

    const [slider, setSlider] = useState([
        {
            thumbnail: '/img/On Your Mind/2.jpg',
            price: '40% off above Rs: 500',
            title: 'Pizza',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Italian: Pizza Pasta Lasagna'
        },
        {
            thumbnail: '/img/On Your Mind/3.jpg',
            price: '40% off above Rs: 300',
            title: 'Tandori Roti',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Pakistani, Afgani, Many More..'
        },
        {
            thumbnail: '/img/On Your Mind/4.jpg',
            price: '40% off above Rs: 300', title: 'Tea Bread',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Spanish: Paella Tapas Churros'
        },
        {
            thumbnail: '/img/On Your Mind/5.jpg',
            price: '40% off above Rs: 300', title: 'Coffe With Beans',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/6.jpg',
            price: '40% off above Rs: 300', title: 'Omlet Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Mexican, Tacos, Enchiladas, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/15.jpg',
            price: '40% off above Rs: 300',
            title: 'Tikka Malai Botti',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Japanese, Sushi, Ramen'
        },
        {
            thumbnail: '/img/On Your Mind/10.jpg',
            price: '40% off above Rs: 300',
            title: 'Straberry Shake',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/11.jpg',
            price: '40% off above Rs: 300',
            title: 'Veg & Non Veg',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/16.jpg',
            price: '40% off above Rs: 300',
            title: 'Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/22.jpg',
            price: '40% off above Rs: 300',
            title: 'Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        },
        {
            thumbnail: '/img/On Your Mind/26.jpeg',
            price: '40% off above Rs: 300',
            title: 'Burger',
            rating: <><TbStar className="bg-green-400 rounded-full text-white mt-1" />   4.1 25-30 mins</>,
            more: 'Chines, Asians, Tibetan, Desserts Rohini'
        }
    ]);


    const canMoveNext = sliding + 3 < slider.length;
    const canMovePrev = sliding > 0;


    const nextClick = () => {
        if (!canMoveNext) return;
        setSliding(sliding + 3); // Move next by 3 items
    };

    const prevClick = () => {
        if (!canMovePrev) return;
        setSliding(sliding - 3); // Move previous by 3 items
    };

    // // Move to the next slide (show 3 items)
    // const nextClick = () => {
    //     if (sliding + 3 >= slider.length)
    //         return;
    //     setSliding(sliding + 3); // Move next by 3 items
    // };

    // // Move to the previous slide (show 3 items)
    // const prevClick = () => {
    //     if (sliding === 0) return;
    //     setSliding(sliding - 3); // Move previous by 3 items
    // };

    // Check if we can move next or previous


    return (
        <div className="mx-auto max-w-[66rem] my-7">
            <div className="flex justify-between">
                <div className="font-bold text-xl ml-[.2rem]">
                    Top restaurant chains in Delhi</div>
                <div className="flex">
                    <div
                        onClick={prevClick}
                        className={`w-8 h-8 rounded-full ${canMovePrev ? 'bg-gray-400' : 'bg-gray-200'} mx-1 flex items-center justify-center cursor-pointer`} >
                        <FaArrowLeft />
                    </div>

                    <div
                        onClick={nextClick}
                        className={`w-8 h-8 rounded-full ${canMoveNext ? 'bg-gray-400' : 'bg-gray-200'} mx-1 flex items-center justify-center cursor-pointer`}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>


            <div className="flex overflow-hidden gap-2 my-2">
                {slider.slice(sliding, sliding + 15).map((item, index) => (
                    <div
                        style={{
                            transform: `translateX(${sliding * -100}%)`,
                            transition: "transform 0.3s ease",
                        }}
                        key={index} className="shrink-0">
                        <TopRestourent {...item} />
                    </div>
                ))}
            </div>


            // Displaying the slider items



        </div >
    );
};










