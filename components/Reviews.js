import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';

export default function Reviews({ comments }) {

    return (
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-4xl font-light text-center mb-7'>What Our Customer Says</h1>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                }}
            >
                {
                    comments.slice(0, 21).map(comment =>
                        <SwiperSlide key={comment.id}>
                            <div className='bg-gray-100 text-black rounded-lg gap-10  flex flex-col p-5 items-center text-justify h-96'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image src="https://placeimg.com/192/192/people" alt="Picture of the commenter" height={100} width={100} />
                                    </div>
                                </div>
                                <p>{comment.name}</p>
                                <p>{comment.body}</p>

                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}