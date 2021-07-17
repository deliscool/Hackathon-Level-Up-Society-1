function Header() {

    const logoStyle = {
        
        fontFamily: "Inter",
        fontWeight: "800",
        fontSize: "50px",
        lineHeight: "80px",
        letterSpacing: "-.04em",
        color: "#E8EDFB",
    }

    return (
        <div>
            <h1 style={logoStyle}>DigiHealth</h1>
        </div>
    )
}

export default Header