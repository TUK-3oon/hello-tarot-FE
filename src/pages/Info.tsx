// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useCardMove } from "@/hooks/useCardMove";

// export const Info = () => {
//     const cards = Array(3).fill(1);

//     useEffect(() => {
//         const getSelectedCard = async () => {
//             try {
//                 const res = await axios.get("/card/front/all");
//                 console.log(res.data)
//                 // setCards(res.data)
//             } catch (error) {
//                 console.error("getSelectedCard error", error);
//             }
//         };
//         getSelectedCard();
//     }, []);
//     console.log(cards)
//     const { rotationAngles, overlayStyles, handleMouseMove, handleMouseLeave } = useCardMove(cards);

//     return (
//         <div className='w-full h-4/5 flex flex-row justify-center relative'>
//             {/* {cards.map((card, index) => (
//                     <div key={index} className='flex-1 flex justify-center items-center relative'>
//                         <div className='w-4/5 h-4/5 mx-auto relative cursor-default bg-cover bg-no-repeat bg-center'
//                             onMouseMove={(e) => handleMouseMove(index, e)}
//                             onMouseLeave={() => handleMouseLeave(index)}
//                             onClick={() => setSelectedCardModal(true)}
//                             style={{
//                                 transform: `perspective(1000px) rotateY(${rotationAngles[index].y}deg) rotateX(${rotationAngles[index].x}deg)`,
//                                 backgroundImage: `url(${card})`,
//                             }}>
//                             <div className='absolute inset-0 w-full h-full'
//                                 style={{
//                                     background: `radial-gradient(circle at ${overlayStyles[index].backgroundPosition}, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
//                                     opacity: overlayStyles[index].opacity,
//                                     filter: overlayStyles[index].filter,
//                                 }}
//                             ></div>
//                         </div>
//                     </div>
//                 ))} */}
//         </div>
//     )
// }
