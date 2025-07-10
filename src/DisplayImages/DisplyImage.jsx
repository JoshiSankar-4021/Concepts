import three from '../assets/images/three.png';
function DisplayImage() {
    var imgsrc= "https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg";
    return (
        <div>
            <h1>Display Image</h1>
            <p>Static</p>
            {/* Placeholder image URL */}
            <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
            <p>This is a placeholder image displayed using the DisplayImage component.</p>
            <p>Dynamic</p>
            {/* Placeholder image URL */}
            <img src={imgsrc} alt="Placeholder" style={{height:'100px',width:'100px'}} />
            <p>Dynamic through project file</p>
            {/* Placeholder image URL */}
            <img src={three} alt="Placeholder" style={{height:'100px',width:'100px'}} />
        </div>
    );
}
export default DisplayImage;