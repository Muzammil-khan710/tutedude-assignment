import React from 'react'
import "./Content.css"
import ppl from "../../assets/ppl.png"
import rs from "../../assets/rs.png"
import off from "../../assets/off.png"
import tag from "../../assets/tag.png"
import wallet from "../../assets/wallet.png"

const Content = () => {
  return (
    <div className='content-main'> 
        <div className='content-title'>How does it work ?</div>
        <div className='content-container'>
            <div className='content-el'>
                <img className='content-el-img' src={ppl} alt="" />
                <div>
                    <div>Invite your Friends</div>
                    <div>Share the link tutedude.com with your friends</div>
                </div>
            </div>
            <div className='content-el'>
                <img className='content-el-img' src={tag} alt="" />
                <div>
                    <div>Friend purchases any course</div>
                    <div>Using your REFERRAL CODE in the payments page</div>
                </div>
            </div>
            <div className='content-el'>
                <img className='content-el-img' src={rs} alt="" />
                <div>
                    <div>You get ₹ 200 as referral money</div>
                    <div>On total purchase the friend makes, into your wallet</div>
                </div>
            </div>
            <div className='content-el'>
                <img className='content-el-img' src={off} alt="" />
                <div>
                    <div>Your Friend gets ₹ 200 Off </div>
                    <div>On his overall fee on successful purchase using your referral code </div>
                </div>
            </div>
            <div className='content-el'>
                <img className='content-el-img' src={wallet} alt="" />
                <div>
                    <div>Transfer money from wallets</div>
                    <div>When the wallet balance reaches ₹200 or more, you can withdraw it</div>
                </div>
            </div>
        </div>
        <div className='content-heading'>Friends Who Enrolled</div>
        <div className='content-heading'>Terms & Conditions</div>
    </div>
  )
}

export { Content }