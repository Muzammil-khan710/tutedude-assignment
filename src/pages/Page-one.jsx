import { Content, Title, Dashboard, Navbar, ReferralBox } from '../components'
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