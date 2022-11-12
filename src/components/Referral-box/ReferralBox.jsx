import React from 'react'
import "./ReferralBox.css"

const ReferralBox = () => {
  return (
    <div className='ref-container'>
        <div className='ref-heading'>Your Referral Code</div>
        <input className='ref-input' type="text" placeholder='EDCH54' value={'E D C H 5 4'} name="" id="" />
    </div>
  )
}

export { ReferralBox }