

function ConnectionLine({ fromX, fromY, toX, toY, connectionRadius }) {


    return (
        <>
            <path
                fill="none"
                stroke="#79d594"
                strokeWidth={1.5}
                className="animated"
                d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
            />
            <circle
                cx={toX}
                cy={toY}
                fill="#fff"
                r={3}
                stroke='#79d594'
                strokeWidth={1.5}
            />
        </>
    );
}

export default ConnectionLine;
