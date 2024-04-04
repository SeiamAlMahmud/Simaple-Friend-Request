import React from 'react'

function Cart(props) {
    const { first_name, last_name, country, image, gender, city, email, phone, id } = props.profile;
    
    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl rounded-none my-4 mx-4 md:mx-16">
                <figure className='image-full'> <img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{first_name + " " + last_name}</h2>
                    <p><span className='font-semibold'>Gender: </span>{gender}</p>
                    <p><span className='font-semibold'>E-mail: </span>{email}</p>
                    <p><span className='font-semibold'>City: </span>{city}</p>
                    <p><span className='font-semibold'>Country: </span>{country}</p>
                    <p><span className='font-semibold'>Phone: </span>+1 {phone}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() =>  props.addFriendHandle(props.profile)} className="bg-[#4056A1] btn text-white btn-primary">
                            <i className='bx bx-user-plus bx-md'></i> Add Friend </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Cart