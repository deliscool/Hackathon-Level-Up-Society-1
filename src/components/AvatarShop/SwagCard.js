const SwagCard = props => {

    const swagStyles = {
        display: "grid",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        boxShadow: "0px 13px 37px rgba(0, 0, 0, 0.21)",
        gridTemplateColumns: "repeat(5, minmax(50px, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)"
    }

    return (
        <div>
            <div style={swagStyles}>
                <img src={props.itemImg} alt={props.index} style={{ width: "100%", height: "75px", gridRow: "2/3", gridColumn: "2/5" }}></img>
                <h3 style={{ gridRow: "4/5", alignSelf: "center", marginLeft: "10px", fontSize: "32px" }}>{props.desc}</h3>
                <img src={props.coin} alt={props.index} style={{ width: "46.75px", height: "44px", gridRow: "4/5", gridColumn: "4/6", alignSelf: "center", marginTop: "10px" }}></img>
                <h3 style={{ gridRow: "4/5", gridColumn: "5/6", fontWeight: 300, fontSize: "30px", alignSelf: "center", marginRight: "10px", marginTop: "10px"}}>{props.price}</h3>
            </div>

        </div>
    )
}

export default SwagCard