import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom';
function ResidencyForm() {
    const [countries, setCoutries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('')
    const getCountries = async () => {
        setLoading(true);
        const fetcher = await fetch('/countries.json');
        const response = await fetcher.json();
        setCoutries(response);
        setLoading(false);
    }
    const navigate = useNavigate();

    const handleresidencyForm = (e) => {
        e.preventDefault();
        const residencryInfo = {
            phoneNumber : e.target.phoneNumber.value,
            address : e.target.address.value,
            country : e.target.country.value
        }
        const previousInfo = JSON.parse(localStorage.getItem('userInfo'));
        const newInfo = {...previousInfo, ...residencryInfo};
        localStorage.setItem("userInfo", JSON.stringify(newInfo));

        navigate('/register/bank-verification')

    }
    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div class="lg:w-[90%] mx-auto ">
            <form class="card-body mb-0 text" onSubmit={handleresidencyForm}>
                <div class="form-control">
                    <label for='phone' class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <PhoneInput
                       required
                        placeholder="Enter phone number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        rules={{ required: true }}  />
                </div>
                <div class="form-control">
                    <label class="label" for='address'>
                        <span class="label-text" placeholder='' id='address'>Your Address</span>
                    </label>
                    <input type="text" required name='address' placeholder="Please enter address" class="input input-bordered" />
                </div>
                <div class="form-control  mb-0">
                    <label class="label">
                        <span class="label-text" for='country'>Country of Residence</span>
                    </label>
                    <select name='country' required class="select select-info block   w-full">
                        <option disabled selected>Select your residency country</option>
                        {
                            countries?.map((country, index) => {
                                return <option value={country.name} key={index}>{country.name}</option>
                            })
                        }
                    </select>
                    {/* <input type='text' name='' id='country' class="input input-bordered" /> */}
                </div>
                <div class="form-control mt-6 ">
                    <button class='btn bg-[#1565D8] border-none hover:bg-blue-700' type='submit'>Save & Continue </button>
                </div>
            </form>
            <div className='flex justify-center gap-[15px]'>
                <img src="https://i.ibb.co/hXNPhW0/Untitled-design.png" alt="lock" className='w-[20px] h-[20px]'/>
                <p className='text-[12px] text-[#8692A6] text '>Your Info is safely secured</p>
            </div>
        </div>
    )
}

export default ResidencyForm