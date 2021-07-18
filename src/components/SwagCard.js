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
            <img src={props.itemImg} alt={props.index} style={{width: "100%", height: "75px", gridRow: "2/3", gridColumn: "2/3"}}></img>
                <p style={{gridRow: "4/5"}}>{props.desc}</p>
                <img src={props.coin} alt={props.index} style={{width: "46.75px", height: "44px", gridRow: "4/5", gridColumn: "3/4"}}></img>
                <p style={{gridRow: "4/5", gridColumn: "3/4", paddingLeft: "1em"}}>{props.price}</p>
        </div>
       
    </div>
)
}

export default SwagCard