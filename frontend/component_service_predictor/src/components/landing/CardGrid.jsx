"use client";
import { cn } from "../../lib/utils";

const cardData = [
  {
    title: "Card 1",
    description: "This card shows background gifs on hover.",
    bgImage:
      "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    title: "Card 2",
    description: "Another card with a cool hover effect.",
    bgImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWx3c2Z5b2Ixem11Z29hNDhiYTdwbm8wcW5mYXYzbHkydHc2ZWppYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGpP4lxGGgK5CBW/giphy.gif",
  },
  {
    title: "Card 3",
    description: "Hover over to see a nice gif.",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJncjE3NzNjOWxnb3l6MmhnYWU0ZXRuMjI2NWltdG5hdms3b3llaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsXmDBAOi2WT2CQ/giphy.gif",
  },
];

export function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div key={index} className="max-w-xs w-full mx-auto">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "transition-all duration-500"
            )}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${card.hoverGif})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50">
                {card.title}
              </h1>
              <p className="font-normal text-base text-gray-50 my-4">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
