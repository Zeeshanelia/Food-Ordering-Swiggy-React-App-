# Swiggy Food Order ReactApp


Point Be Noted :

bg-white class actual as it apply in opendrawer function, 
and bg-white-900 additional properties will not works there    
     
     <div
          className="w-[500px] bg-white h-full  duration-600 ease-in-out"
         style={{ left: toggle ? "0%" : "-100%"}}>
      </div>

------------------------------------------------------------------------



2nd ligic of slider of Food Manu list

       const itemsToShow = 3; // Number of items you want to display at once
        const nextClick = () => {
        // Ensure we don't go out of bounds
         if (sliding + itemsToShow >= slider.length) return;
         setSliding(sliding - itemsToShow);
         };

       const prevClick = () => {
        // Ensure we don't go below 0
        if (sliding === 0) return;
        setSliding(sliding + itemsToShow);
        };

   ---------------------------------------------------




3rd ligic of slider of Food Manu list 

      const nextClick = () => {
       // Calculate the furthest allowed sliding position (to leave 8 items)
       const maxSliding = Math.min(-(slider.length - 8), 0); // Never exceed 0
       const newSliding = Math.max(sliding - 3, maxSliding);
       setSliding(newSliding);
       };

      const prevClick = () => {
      // Never go above 0 (initial position)
      const newSliding = Math.min(sliding + 3, 0);
      setSliding(newSliding);
      };

   --------------------------------------


  this is 2 ways of data spread to next component , so u can use any 1 


              {slider.slice(sliding, sliding + 5).map((item, index) => (
                 <div key={index} className="shrink-0">

                    <TopRestourent  {...item}
                     thumbnail={item.thumbnail}
                     price={item.price}
                     title={item.title}
                     rating={item.rating}
                     more={item.more} />

                 </div>
              ))}

















        con't working swiggy Api:

      ('/api/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      
 setSlider(data?.data?.cards[0]?.card?.card?.imageGrididCards?.info)










