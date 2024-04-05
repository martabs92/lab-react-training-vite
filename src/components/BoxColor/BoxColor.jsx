import "./BoxColor.css";

function BoxColor({ r, g, b }) {
    return (
        <div className="border" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <h6> rgb({r}, {g}, {b}) </h6>
        </div>
    )

}


export default BoxColor;