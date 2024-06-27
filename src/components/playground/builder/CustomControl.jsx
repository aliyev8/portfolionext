import {useReactFlow, useStore} from "reactflow";


export default function CustomControl() {

    const transformSelector = (state) => state.transform;

    const transform = useStore(transformSelector);

    const {  zoomIn, zoomOut } = useReactFlow();


    return <div className="absolute  left-16 bottom-8 bg-white flex items-center gap-4 px-6 py-3 rounded-lg z-10
    max-sm:left-4
    ">
        <button
            onClick={() => zoomOut({ duration: 800 })}
            className="control_bar__zoom_out"
        >
            <img src="/images/playground/builder/zoomOut.svg" alt="zoom-out"/>
        </button>
        <span className="control_bar__current_zoom">
        {Math.floor(transform[2].toFixed(2) * 111 - 11)} %
      </span>
        <button
            onClick={() => zoomIn({ duration: 800 })}
            className="control_bar__zoom_in"
        >
            <img src="/images/playground/builder/zoomIn.svg" alt="zoom-in"/>
        </button>
    </div>
}