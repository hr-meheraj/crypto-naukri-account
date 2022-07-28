import React from 'react'

function ResidencyForm() {
    return (
        <div class=" md:w-[80%] mx-auto ">
        <form class="card-body mb-0 text">
            <div class="form-control">
                <label for='phone' class="label">
                    <span class="label-text">Phone Number</span>
                </label>
                <input type="text" name='phone' id='phone' placeholder="+123 - 938439898" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label" for='address'>
                    <span class="label-text"  placeholder='' id='address'>Your Address</span>
                </label>
                <input type="text" name='address' placeholder="Please enter address" class="input input-bordered" />
            </div>
            <div class="form-control  mb-0">
                <label class="label">
                    <span class="label-text" for='country'>Country of Residence</span>
                </label>
                <input type='text' name='' id='country'  class="input input-bordered" />
            </div>
            <div class="form-control mt-6 ">
                <button class='btn btn-primary' type='submit'>Save & Continue </button>
            </div>
        </form>
    </div>
    )
}

export default ResidencyForm