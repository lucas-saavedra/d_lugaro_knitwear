import { Image, Modal } from "react-bootstrap";
import useWindowDimensions from "../../../hooks/useWindowDimensions ";
import BackArrow from '../../Icons/BackArrow'
import './modal.css'
const ModalMobile = (props) => {
    const { width } = useWindowDimensions()
    return (
        < Modal dialogClassName="m-0 mx-auto " className="bg-transparent text-dark"
            {...props}
            key={props.idx}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Body className="mx-0 px-0 text-center" style={{
                height: '80vh',
                widht: '100%',
            }}>
                <Image key={props.idx} style={{
                    padding: `${width < 400 ? "0" : "3em 1em"}`,
                    maxWidth: '100%',
                    height: '90%',
                }} src={`./assets/img/${props.idx + 1}.jpg`} />
                <div className='mobile_back_arrow' >
                    <BackArrow
                        isleft={true}
                        modal={props.onHide}
                        style={{
                            height: '10%',
                        }} />
                </div>
            </Modal.Body>

        </Modal >
    )
}

export default ModalMobile