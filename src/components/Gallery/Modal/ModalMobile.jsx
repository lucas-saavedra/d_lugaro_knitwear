import { Image, Modal } from "react-bootstrap";
import useWindowDimensions from "../../../hooks/useWindowDimensions ";
import BackArrow from '../../Icons/BackArrow'
import './modal.css'
const ModalMobile = (props) => {
    const { width } = useWindowDimensions()
    return (
        < Modal
            dialogClassName="m-0 mx-auto h-100"
            contentClassName='border-0  h-100 text-white bg-transparent'
            className="bg-transparent text-dark"
            {...props}
            key={props.idx}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Image key={props.idx} style={{

                padding: `${width < 400 ? "1em 0em 0 0em" : "3em 1em"}`,
               
                marginLeft: '2em',
                marginRight: '2em',
                maxHeight: `${width < 400 ? '90%' : '80%'} `,
            }} src={`./assets/img/${props.idx + 1}.jpg`} />
            <div className='mobile_back_arrow' >
                <BackArrow
                    isleft={true}
                    modal={props.onHide}
                    style={{
                        height: '10%',
                    }} />
            </div>
        </Modal >
    )
}

export default ModalMobile