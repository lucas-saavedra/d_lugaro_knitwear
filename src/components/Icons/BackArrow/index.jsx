
import './backArrow.css'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const BackArrow = (props) => {

  return (
    <>
      {props.isleft ? (
        <ArrowLeft onClick={props.canvas ? props.canvas : props.modal} />
      ) : (
        <ArrowRight onClick={props.canvas} />
      )}
    </>

  )
};

export default BackArrow;