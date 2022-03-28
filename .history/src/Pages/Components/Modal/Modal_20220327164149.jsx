export default function Modal(props){
    return<>
    <div className={`modalWrapper ${props.isOpened ? "open" : "close"}`} style={...props.style}>

    <div className="modalBody">
        <div className="modalClose" onClick={props}>

        </div>
    </div>
    </div>
    
    </>
}