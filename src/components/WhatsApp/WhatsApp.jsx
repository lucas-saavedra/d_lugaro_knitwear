import WhatsAppIco from '../Icons/WhatsApp/WhatsApp';
import './whatsApp.css'
const WhatsApp = () => {
    return (
        <>
            <div className='sticky' >
                <a
                    href="https://api.whatsapp.com/send?phone=51949137476&text=D%27Lugaro%2C%20I%20need%20advice%20on..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className='container_whatsapp'>
                    <WhatsAppIco className="svg_whatsapp" />
                    <div className="link">
                        Whatsapp
                    </div >
                </a>
            </div>
        </>
    )

}
export default WhatsApp
