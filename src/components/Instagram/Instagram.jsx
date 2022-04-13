import InstagramIco from '../Icons/Instagram/Instagram';
import './instagram.css';
const Instagram = () => {
    return (
        <div className='container bg-transparent d-flex justify-content-center'>
            <div className='instagramContainer'>
                <a className="instagramLink h-100 d-flex justify-content-center align-items-center" href="https://www.instagram.com/dlugaro/" target="_blank" rel="noopener noreferrer" >
                    < InstagramIco className="svg_instagram" />
                    Instagram
                </a >
            </div>
        </div>
    )

}
export default Instagram