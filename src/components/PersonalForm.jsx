import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase';

export default function PersonalForm() {
    // const [personalInfo, setPersonalInfo] = useState();
    const [showPassoword, setShowPassword] = useState(false);
    const [signInWithGoogle, goolgeUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (error || googleError || updateError) {
        alert(error?.message || googleError?.message || updateError?.message);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const personalInfo = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        await createUserWithEmailAndPassword(personalInfo.email, personalInfo.password);
        await updateProfile({
            displayName: personalInfo.fullName
        });

    }

    useEffect(() => {
        if (user || goolgeUser) {
            navigate(`/register/residency-info`);
        }
    }, [user, goolgeUser]);


    return (
        <div class=" md:w-[80%] mx-auto ">
            <form class="card-body mb-0 text" onSubmit={handleSubmitForm}>
                <div class="form-control">
                    <label for='full-name' class="label">
                        <span class="label-text">Your full Name* </span>
                    </label>
                    <input type="text" name='fullName' id='full-name' placeholder="Invictus Innocent" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label" for='email'>
                        <span class="label-text" placeholder='' id='email'>Email Address*</span>
                    </label>
                    <input type="text" name='email' placeholder="Enter email address" class="input input-bordered" />
                </div>
                <div class="form-control relative mb-0">
                    <label class="label">
                        <span class="label-text" for='password'>Create Password</span>
                    </label>
                    <input type={showPassoword ? "text" : "password"} name='password' id='password' placeholder="*******" class="input input-bordered" />
                    <span className='absolute right-[20px] bottom-[10px] text font-bold text-[#8692ab] cursor-pointer' onClick={() => setShowPassword(!showPassoword)}>{showPassoword ? "Hide" : "Show"}</span>
                </div>
                <div class="form-control mt-6 ">
                    <button class={`btn btn-primary ${(loading || updating) && 'loading'}`} type='submit'>Register Account</button>
                </div>
                <div class="divider">OR</div>
            </form>
            <button class={` ${googleLoading && "loading"} rounded-md  btn  border-none outline-none cursor-pointer hover:bg-blue-900 hover:text-white w-full block bg-white py-2 px-4 shadow-md text text-black flex justify-center gap-2`} onClick={() => signInWithGoogle()}><img src="https://img.icons8.com/color/344/google-logo.png" className='w-[30px] h-[30px]' alt='google' />Register with Google</button>
        </div>
    )
}
