function Padding(){
    return(
        <div>
            <h1>Padding Inline</h1>
            <p style={{
                border: '1px solid black',
                paddingTop: '30px',
                paddingBottom: '50px',
                paddingRight: '70px',
                paddingLeft: '9px',
            }}>
                This paragraph has padding applied inline using the paddingInline property.
            </p>
        </div>
    );
}
export default Padding;

