import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const Body = () => {
  const [sliding, setSliding] = useState(0);

  const slider = [
    { title: "Daal", Thumbnail: "/img/daal.jpg" },
    { title: "Rice", Thumbnail: "/img/rice.jpg" },
    { title: "Pizza", Thumbnail: "/img/pizza.jpeg" },
    { title: "Allo Bhujia", Thumbnail: "/img/allo-bhujia.jpg" },
    { title: "Burger", Thumbnail: "/img/burger.jpeg" },
    { title: "Chaomian", Thumbnail: "/img/chaomian.jpeg" },
    { title: "Fish", Thumbnail: "/img/fish.jpeg" },
    { title: "Mutton", Thumbnail: "/img/mutton.jpeg" },
    { title: "Nodles", Thumbnail: "/img/nodles.jpeg" },
    { title: "Pasta", Thumbnail: "/img/pasta.jpg" },
    { title: "Salads", Thumbnail: "/img/salads.jpeg" },
    { title: "Sweet", Thumbnail: "/img/sweet.jpeg" },
    { title: "Tikka Boti", Thumbnail: "/img/tikka.jpg" },
    { title: "Daleem Roti", Thumbnail: "/img/26.jpeg" },
    { title: "Malai Boti", Thumbnail: "/img/15.jpg" },

  ];

  const itemsToMove = 3;
  const itemWidth = 120; // px (image + gap approx)

  const maxSlide = Math.max(0, slider.length - itemsToMove);

  const canMoveNext = sliding < maxSlide;
  const canMovePrev = sliding > 0;

  const nextClick = () => {
    if (!canMoveNext) return;
    setSliding((prev) => Math.min(prev + itemsToMove, maxSlide));
  };

  const prevClick = () => {
    if (!canMovePrev) return;
    setSliding((prev) => Math.max(prev - itemsToMove, 0));
  };

  return (
    <div className="mx-auto max-w-[66rem] my-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">What's on your mind?</div>

        <div className="flex">
          <div
            onClick={prevClick}
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer ${
              canMovePrev ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <FaArrowLeft />
          </div>

          <div
            onClick={nextClick}
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer
                ${ canMoveNext ? "bg-gray-400" : "bg-gray-200"}`}>  <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden my-4">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${sliding * itemWidth}px)`,
          }}
        >
          {slider.map((item, index) => (
            <div key={index} className="min-w-[100px] text-center">
              <img
                src={item.Thumbnail}
                alt={item.title}
                className="w-[80px] h-[80px] mx-auto rounded-full object-cover"
              />
              <div className="mt-2 font-medium text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};