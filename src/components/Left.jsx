import React from 'react'
import iconsImg from '../assets/icons.png'
function Left() {
    return (
        <div className="left h-screen p-[10%]">
            <img className='w-[170px] ' src='https://i.ibb.co/z5zRw9q/Osasis-6.png' />
            <div className='h-[90%] flex md:mt-[80px] flex-col'>
                <div>
                    <span className='text-[100px] text-[#00DAF7] font-Gayathri'> “</span>
                    <p className='font-[400] text-[18px] text mt-[-100px] text-[#fff] md:text-[20px] leading-[38px]'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                    <br />
                    <p className='text text-[20px] text-[#fff] flex gap-[10px] items-center'>Vincent Obi
                        <img src='https://img.icons8.com/color/344/verified-account.png' className='h-[30px] w-[30px]' /></p>
                    <div className='flex justify-end'>
                        <img src={iconsImg} className='w-[70px] mt-[20px]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Left