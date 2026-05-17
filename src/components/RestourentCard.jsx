export const RestourentCard = ({ thumbnail,  price,
  title,
  rating,
  more
}) => {
  return (
    <div className="w-[15rem] shrink-0">

      {/* IMAGE SECTION */}
      <div className="h-[10rem] rounded overflow-hidden relative bg-gray-100">

        {thumbnail ? (
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt={title || "restaurant image"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}

        {/* PRICE BADGE */}
        {price && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-semibold">
            {price}
          </div>
        )}

      </div>

      {/* TITLE */}
      {title && (
        <h3 className="font-semibold mt-2">
          {title}
        </h3>
      )}

      {/* RATING */}
      {rating && (
        <div className="flex gap-2 text-sm font-medium">
          {rating}
        </div>
      )}

      {/* DESCRIPTION */}
      {more && (
        <p className="text-gray-600 text-xs">
          {more}
        </p>
      )}

    </div>
  );
};