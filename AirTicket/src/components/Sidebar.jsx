import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="d-flex flex-column align-items-center justify-content-between h-100">
            <div className="w-100">
                <h5 className='py-3 text-center'>Flight Tickets</h5>
                <nav className="navigation-links">
                    <ul>
                        <li className='active'><a href="#">Home</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>

            </div>
            
        </div>
    </div>
  )
}

export default Sidebar