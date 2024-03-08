interface ICard {
    id: number;
    avatar: string;
    name: string;
    description: string;
}

const Card = ({ id, avatar, name, description }: ICard) => {
    return (
        <>
            <div className="relative m-2 cursor-pointer group overflow-hidden text-gray-50 h-80 w-72 rounded-2xl hover:duration-700 duration-700 outline outline-slate-800">
                <div
                    className="bg-slate-200 w-72 h-72  rounded-t-2xl bg-cover bg-center "
                    style={{
                        backgroundImage: `url(${avatar})`,
                    }}
                ></div>
                <div className="pt-3 absolute bg-gray-50 -bottom-[4.5rem] w-72 p-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-gray-800 font-bold text-xs uppercase">
                        {name}
                    </span>

                    <p className="text-neutral-800 text-sm">{description}</p>
                </div>
            </div>
        </>
    );
};

export default Card;

// export default function Card({data:any}) {

//     return (
// <>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
//         {data.map((item: any) => (
//             <div key={item.id}>
//                 <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-80 w-72 rounded-2xl hover:duration-700 duration-700 outline outline-slate-800">
//                     <div
//                         className="bg-slate-200 w-72 h-72  rounded-t-2xl bg-cover bg-center "
//                         style={{
//                             backgroundImage: `url(${item.sprites.other['official-artwork'].front_default})`,
//                         }}
//                     ></div>
//                     <div className="pt-3 absolute bg-gray-50 -bottom-[4.5rem] w-72 p-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500">
//                         <span className="text-gray-800 font-bold text-xs uppercase">
//                             {item.name}
//                         </span>

//                         <p className="text-neutral-800 text-sm">
//                             {item.flavorText}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
// </>
//     );
// }
