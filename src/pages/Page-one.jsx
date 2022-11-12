import { Content } from '../components/Content/Content'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { Navbar } from '../components/Navbar/Navbar'
import { ReferralBox } from '../components/Referral-box/ReferralBox'
import { Title } from '../components/Title/Title'
import "./pages.css"

const PageOne = () => {
    return(
        <>
            <Navbar />
            <Title Title={"UI/UX"} Option={"Refer & Earn"}/>
            <div className='page-container'>
                <Dashboard/>
                <ReferralBox/>
                <Content/>
            </div>
        </>
    )
}

export { PageOne }