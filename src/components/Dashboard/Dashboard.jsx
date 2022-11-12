import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='dashboard-container'>
            <div>
                <div className='dc-heading'>Referral Earning</div>
                <div className='dc-value'>₹2,500</div>
            </div>
            <div>
                <div className='dc-heading'>Total Referrals</div>
                <div className='dc-value'>7</div>
            </div>
            <div>
                <div className='dc-heading'>Wallet Balance</div>
                <div className='dc-value'>₹500</div>
            </div>
        </div>
            <button className='w-btn'>Withdraw Balance</button>
    </div>
  )
}

export { Dashboard }