import React from 'react'

function Drawer(props) {
  const { removeItemFromCart } = props.totalFriend;
  // console.dir(removeItemFromCart);
  return (
    <div className="drawer drawer-end z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button ">
          <i className='text-4xl mr-4 cursor-pointer relative bx bx-user'></i>
          <p className={`absolute bg-red-700 ring-1 top-[-13px] px-[7px] right-[12px] rounded-full ${props.totalFriend.myFriend.length > 0 ? "block" : "hidden"}`}>{props.totalFriend.myFriend.length}</p>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-cyan-300 text-base-content">
          {/* Sidebar content here */}

          {
            props.totalFriend.myFriend.map((show, index) => {
              return (
                <div key={index}>
                  <li className='flex justify-between my-4 overflow-y-auto items-center text-left'>
                    <div className='flex gap-8'>
                      <div className="avatar">
                        <div className="w-14 rounded-full">
                          <img src={show.image} />
                        </div>
                      </div>
                      <p className='text-xl font-semibold'>{show.first_name + " " + show.last_name}</p>
                    </div>
                    <div>
                      <button onClick={() => removeItemFromCart(index)} className=' btn-error btn'>remove</button>
                    </div>
                  </li>
                  <div className='divider cursor-none'></div>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Drawer