

export const TopRestourent = (props) => {

    return (<>
        <div className="w-[15rem] shrink-0 ">
            <div className="h-[10rem] rounded overflow-hidden relative">
                <img className="object-cover w-full h-full" src={props.thumbnail} alt={props.title} />
                <div className="img-overlay absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 flex items-end text-medium font-bold tracking-tight">
                {props.price}
                </div>
            </div>

            {props.title}
            <div className="flex gap-2 font-medium">
                { props.rating}
            </div>
            <div>{props.more}</div>

        </div>
    </>);
};
