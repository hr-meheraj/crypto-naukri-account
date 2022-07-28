import React from 'react'
import { } from 'react-pdf'
function Success() {
    const getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const {fullName, email, phoneNumber, address, country, bankVerify} = getUserInfo;

    return (
        <div className="flex success justify-center items-center bg-[#1565D8] h-screen w-full text-white">
            <div className='text-center'>
                <h2 className='text-[24px] font-bold md:text-[48px] text text-center'>Thanks for your Submission</h2>
                <p className='text-[12px] md:text-[14px] text text-center'>Download your information in PDF.</p>
                <label for="my-modal-4" class="btn text mt-[20px] modal-button">See your Information</label>
                <>
                    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                    <label for="my-modal-4" class="modal cursor-pointer">
                        <label class="modal-box relative text-black text" for="">
                            <div className='flex justify-center'>
                            <img src='https://img.icons8.com/color/2x/circled-user-male-skin-type-4--v2.gif' alt='avatr' className='w-[100px] h-[100px] rounded-full'/>
                            </div>
                            <hr/><br/>
                           <h2 className='text-xl mb-2 flex gap-3 items-center justify-center'>FullName : {fullName} {" "} <img src='https://img.icons8.com/cute-clipart/344/approval.png' alt='verify' className='w-[30px] h-[30px]'/>  </h2>
                           <h2 className='text-xl mb-2'>Email : {email}</h2>
                           <h2 className='text-xl mb-2'>Country : {country}</h2>
                           <h2 className='text-xl mb-2'>Address : {address}</h2>
                           <h2 className='text-xl mb-2'>Phone : {phoneNumber}</h2>
                           <h2 className='text-xl mb-3'>Bank Verify No. : {bankVerify}</h2>

                        </label>
                    </label></>
            </div>
        </div>
    )
}

export default Success