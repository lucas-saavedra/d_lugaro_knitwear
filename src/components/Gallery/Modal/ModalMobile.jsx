import { Image, Modal } from "react-bootstrap";
import BackArrow from '../../Icons/BackArrow'
import './modal.css'
const ModalMobile = (props) => {
    return (
        < Modal dialogClassName="m-0 mx-auto" className="bg-transparent text-dark"
            {...props}
            key={props.idx}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Image key={props.idx} style={{ padding: '3em 2em' }} src={`./assets/img/${props.idx + 1}.jpg`} />
            <div className='mobile_back_arrow'>
                <BackArrow isleft={true} modal={props.onHide} />
            </div>

        </Modal >
    )
}

export default ModalMobile