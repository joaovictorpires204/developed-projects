import '../header/header.css'
import emailIcon from '../../assets/images/email.svg'
import linkIcon from '../../assets/images/link.svg'
import phoneIcon from '../../assets/images/phone.svg'
import HeaderContact from './header-contact'

const Header = () => {
    return (
        <div className="header">
            <HeaderContact icon={emailIcon} text="joaovictor@gmail.com"/>
            <HeaderContact icon={linkIcon} text="www.joaovictor.com.br"/>
            <HeaderContact icon={phoneIcon} text="(37)99841-3841"/>
        </div>
    )
}

export default Header