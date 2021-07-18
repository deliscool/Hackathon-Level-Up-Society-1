const SwagCard = props => {

    const swagStyles = {
        display: "grid",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        boxShadow: "0px 13px 37px rgba(0, 0, 0, 0.21)",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)"
    }

    return (
        <div>
            <div style={swagStyles}>
                <img src={props.itemImg} alt={props.index} style={{ width: "100%", height: "75px", gridRow: "2/3", gridColumn: "2/3" }}></img>
                <h3 style={{ gridRow: "4/5", paddingLeft: "1em" }}>{props.desc}</h3>
                <img src={props.coin} alt={props.index} style={{ width: "46.75px", height: "44px", gridRow: "4/5", gridColumn: "3/4" }}></img>
                <h3 style={{ gridRow: "4/5", gridColumn: "3/4", paddingLeft: "1em", fontWeight: 300 }}>{props.price}</h3>
            </div>

        </div>
    )
}

export default SwagCard