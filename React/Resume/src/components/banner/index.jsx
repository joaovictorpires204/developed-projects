import '../banner/banner.css'
import profilePhoto from '../../assets/images/photo.svg'

const Banner = () => {

    return (
        <div className='banner-container'>
            <img className='profile' src={profilePhoto} alt="photo" />
            <div className="text">
            <div className="banner-title">João Victor Pires de Andrade</div>
            <div className="banner-text">Web Developer | FullStack</div>
            </div>
        </div>
    )
}

export default Banner