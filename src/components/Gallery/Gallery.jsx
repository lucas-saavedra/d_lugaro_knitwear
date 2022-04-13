import { Row, Container, Image } from "react-bootstrap"
import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ModalMobile from "./Modal/ModalMobile";
import OffcanvasDesktop from "./Offcanvas/OffcanvasDesktop";
import { isleft, shuffleArray } from "../../helpers/";

const Gallery = () => {
    const { width } = useWindowDimensions();
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [placement, setPlacement] = useState(false);
    const [id, setId] = useState(0);
    const [array, setArray] = useState([]);
    useEffect(() => {
        let arrayGen = Array(28).keys();
        setArray(shuffleArray([...arrayGen]))
        return () => {
        };
    }, []);
    const setVariables = (idx, x) => {
        if (isMobile()) {
            setModalShow(true);
        } else {
            setShow(true);
            setPlacement(isleft(idx));
        }
        setId(x);
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
                {
                    array.map((x, idx) => {
                        return (

                            <Image
                                style={!isMobile() ? { padding: 8, margin: 0 } : {}}
                                alt={`img${Number(x) + 1}`}
                                onClick={() => { setVariables(idx, Number(x)) }}
                                key={Number(x) + 1}
                                src={`./assets/img/${Number(x) + 1}.jpg`} />

                        )
                    })}
            </Row>
        </Container >
    )
}

export default Gallery