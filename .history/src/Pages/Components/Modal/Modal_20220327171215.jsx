import "./Modal.scss";
import img from "../../../Images/modal.jpg"

export default function Modal(props){
    return<>
    <div className={`modalWrapper ${props.isOpened ? "open" : "close"}`} style={{...props.style}}>

    <div className="modalBody">
        <div className="modalClose" onClick={props.onModalClose}>X</div>
        <div className="ModalCard">
           <div>
               </div> <div>
                <img src={} alt="" />
            </div>
        </div>
    </div>
    </div>
    
    </>
}