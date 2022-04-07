import { Row, Container, Image } from "react-bootstrap"
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions ";
import ModalMobile from "./Modal/ModalMobile";
import OffcanvasDesktop from "./Offcanvas/OffcanvasDesktop";
import isleft from "../../helpers/positionHelpers";
import './gallery.css'

const Gallery = () => {

    const { width } = useWindowDimensions();
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [placement, setPlacement] = useState(false);
    const [id, setId] = useState(0);

    const setVariables = (idx) => {
        if (isMobile()) {
            setModalShow(true);
        } else {
            setShow(true);
            setPlacement(isleft(idx));
        }
        setId(idx);
    }
    const isMobile = () => {
        return width < 900
    }
    return (
        <Container fluid={!isMobile()} >
            {isMobile() ?
                (<ModalMobile
                    idx={id}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                )
                :
                (<OffcanvasDesktop
                    onHideOffCanvas={() => setShow(false)}
                    offCanvas={show} placement={placement}
                    idx={id}
                />
                )
            }
            <Row xs={4} md={4} className={`g-2`} style={!isMobile() ? { padding: '0 6rem' } : {}}>
                {Array.from({ length: 28 }).map((_, idx) => {
                    return (

                        <Image
                            style={!isMobile() ? { padding: 8, margin: 0 } : {}}
                            alt={`img${idx + 1}`}
                            onClick={() => { setVariables(idx) }}
                            key={idx + 1}
                            src={`./assets/img/${idx + 1}.jpg`} />

                    )
                })}
            </Row>
        </Container >
    )
}

export default Gallery