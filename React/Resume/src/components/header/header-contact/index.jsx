const HeaderContact = ({icon, text}) => {
    return(
        <div className="contact">
                <div className="box-icon">
                    <img className='ico' src={icon} alt="Email" />
                </div>
                <span className="">{text}</span>
            </div>
    )
}

export default HeaderContact