import React from 'react';
import Left from '../components/Left';
import { Link } from 'react-router-dom'
import PersonalForm from '../components/PersonalForm';
const PersonalRegister = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <Left />
            <RightSide />
        </div>
    );
}

export default PersonalRegister;












const RightSide = () => {
    return (
        <div>
            <div className="flex justify-between h-[20%] py-[10%] mx-auto w-[90%]">
                <Link to='/'>
                    <div className='text-[#8692A6] font-bold text flex items-center'>
                        <img src='https://i.ibb.co/X82H2p3/Osasis-4.png' alt='back' className='w-[30px] h-[30px] mr-[10px]' /> Back
                    </div>
                </Link>
                <div>
                    <span className='text-[14px] text-[#bdbdbd] text'> STEP 01/03</span>
                    <p className='text font-bold text-[16px] text-[#8692ab] '>Personal Info.</p>
                </div>
            </div>
            <div className='mx-auto md:w-[90%]'>
                <h2 className='text-center text-[30px] text font-bold text-[#000] leading-[37px] mb-3'>Register Individual Account!</h2>
                <p className='text text-center text-[#8692ab] text-[18px] font-normal leading-[28px] '>For the purpose of industry regulation, your details are required.</p>
                <PersonalForm />
            </div>
        </div> 
    )
}