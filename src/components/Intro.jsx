import React from 'react'
import { Link } from 'react-router-dom'
function Intro() {
    const cardData = [
        {
            img: 'https://i.ibb.co/r6DkhNR/Osasis-1.png',
            title: 'Individual',
            info: 'Personal account to manage all you activities.',
            link: '/register/personal-info'
        },

        {
            img: 'https://i.ibb.co/j60vsST/Osasis-2.png',
            title: 'Business',
            info: 'Own or belong to a company, this is for you.',
            link: '/register/personal-info'
        },

    ];

    return (
        <div>
            <div className='flex justify-end'>
                <p className='text h-[20%] text-[#8692A6] text-[18px] pt-[10%] pb-[10%] mr-[50px] md:mr-[100px]'>Already have an account? <Link to='/register/personal-info'><span className='cursor-pointer text-[#1565D8] font-bold'>Sign In</span></Link></p>
            </div>
            <div className='flex pl-[15%] flex-col  mx-auto  md:mt-[40px] '>
                <h2 className='text-[#000000] text-[30px] text font-bold leading-[36px] mb-3'>Join Us!</h2>
                <p className='text font-[400] text-[18px] leading-[28px] text-[#8692ab]'>To begin this journey, tell us what type of account you’d be opening.</p>
                <div className=' flex items-center w-[90%]  flex-col'>
                    {
                        cardData.map((e, i) => {
                            return (
                                <div className='relative transition-all border-2 border-transparent hover:border-blue-400 cursor-pointer rounded-[5px] shadow-md mt-[40px] w-full mx-auto flex gap-[10px] p-[20px] items-center' key={i}>
                                    <img src={e.img} alt={e.title} className='w-[65px] h-[65px]' />
                                    <div>
                                        <h2 className='text font-bold text-[18px] leading-[20px] mb-2 text-[#000]'> {e.title}</h2>
                                        <p className='text text-[#8692ab] text-[14px] font-normal'>{e.info}</p>
                                        <Link to={e.link}>
                                            <div className='absolute transition-all left-0 right-0 bottom-0 flex justify-end items-center mr-[20px] z-100 top-0 w-full opacity-0 hover:opacity-100 '>
                                                <img src="https://i.ibb.co/T2STScq/Osasis-3.png" alt='arrow' className='w-[50px] h-[50px] transition-all mr-[30px]' />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Intro