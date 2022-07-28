import React from 'react'
import { useNavigate } from 'react-router-dom';

function BankVerificationForm() {

    const navigate = useNavigate();
    const handleBankVerification = (e) => {
        e.preventDefault();
        const bankInfo  = {
            bankVerify : e.target.bankNerification.value
        }

        const previousInfo = JSON.parse(localStorage.getItem("userInfo"));
        const newInfo = {...previousInfo, ...bankInfo};
        localStorage.setItem('userInfo', JSON.stringify(newInfo));

        navigate('/success');
    }

    return (
        <div class=" lg:w-[90%] mx-auto ">
            <form class="card-body mb-0 text" onSubmit={handleBankVerification}>
                <div class="form-control">
                    <label class="label" for='bankVerificaition'>
                        <span class="label-text" placeholder='' id='bankVerificaition'>Bank verification number (BVN)</span>
                    </label>
                    <input type="text" required name='bankNerification' placeholder="98348393939" class="input input-bordered" />
                </div>
              
                <div class="form-control mt-6 ">
                    <button class='btn bg-[#1565D8] border-none hover:bg-blue-700' type='submit'>Save & Continue </button>
                </div>
            </form>
            <div className='flex justify-center gap-[15px]'>
                <img src="https://i.ibb.co/hXNPhW0/Untitled-design.png" alt="lock" className='w-[20px] h-[20px]' />
                <p className='text-[12px] text-[#8692A6] text '>Your Info is safely secured</p>
            </div>
        </div>
    )
}

export default BankVerificationForm