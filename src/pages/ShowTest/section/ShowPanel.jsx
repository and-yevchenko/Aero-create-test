import { RotateCcw } from "lucide-react"
import { ControlPanel } from "../../../components/ui/ControlPanel/ControlPanel"


const ShowPanel = ({forms, ...props}) => {
    
    return (
        <ControlPanel title={"Show"}>
            {props.show && 
            <span className="control-panel__result">
                {props.sumResult()}/{forms.length} - {Math.round(props.sumResult() * 100 / forms.length)}%
            </span>}
            <div className="control-panel__buttons">
                <button onClick={props.handleShowResult} title="show result">result</button>
                <button onClick={() => document.location.reload()} title="reload"><RotateCcw /></button>
            </div>
        </ControlPanel>
    )
}

export default ShowPanel