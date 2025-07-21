import {Fade,Bounce} from 'react-awesome-reveal';
function Animationspack(){
    return(
        <div>
           
            <div style={{textAlign:'right'}}>
                <Fade direction='left' duration={15000}>
                <h1>FADEIN</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Fade>
            </div>
            <div style={{textAlign:'left'}}>
                <Fade direction='right' duration={15000}>
                <h1>FADEIN</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Fade>
            </div>
            
             <div style={{textAlign:'left'}}>
                <Fade direction='up' duration={15000}>
                <h1>FADEIN</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Fade>
            </div>

             <div style={{textAlign:'right'}}>
                <Fade direction='down' duration={15000}>
                <h1>FADEIN</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Fade>
            </div>

            <div style={{textAlign:'right'}}>
                <Bounce  duration={15000}>
                <h1>Bounce</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Bounce>
            </div>
            <div style={{textAlign:'center'}}>
                <Bounce  duration={15000}>
                <h1>Bounce</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Bounce>
            </div>
             <div style={{textAlign:'left'}}>
                <Bounce  duration={15000}>
                <h1>Bounce</h1>
                <img src="https://m.media-amazon.com/images/I/61Rx9tHudUL.jpg" alt="Placeholder" style={{height:'100px',width:'100px'}} />
                </Bounce>
            </div>
        </div>
    );
}
export default Animationspack;