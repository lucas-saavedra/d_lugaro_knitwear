import { Image, Offcanvas } from "react-bootstrap";
import BackArrow from '../../Icons/BackArrow'
import './offcanvas.css'
const OffcanvasDesktop = (props) => {
    
    return (
        <Offcanvas
            key={`${props.idx}offcanvas`}
            show={props.offCanvas}
            placement={props.placement ? 'end' : 'start'}
            onHide={props.onHideOffCanvas}
            className="offcanvas_background bg-transparent text-dark"
            style={{ width: '50vw' }}
        >
            <Offcanvas.Body className="text-center p-0" style={{ width: '50vw' }} >
                <div className='desktop_back_arrow' style={{
                    display: 'flex',
                    justifyContent: `${props.placement ? 'start' : 'end'}`,
                    alignItems: 'center',
                    padding: '2em 2em 0 2em',
                    height: '10%',
                }}>
                    <BackArrow isleft={props.placement} canvas={props.onHideOffCanvas} />
                </div>
                <Image key={`${props.idx + 1}offcanvas`} style={{
                    maxWidth: '100%',
                    maxHeight: '90%',
                    paddingBottom: '3em',
                    paddingLeft: '1em',
                    paddingRight: '1em',
                    paddingTop: '1em',
                }} src={`./assets/img/${props.idx + 1}.jpg`} />
            </Offcanvas.Body>
        </Offcanvas >
    )
}

export default OffcanvasDesktop