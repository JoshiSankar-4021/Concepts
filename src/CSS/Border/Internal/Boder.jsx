function Border() {
    return (
        <div>
            <style>{`
                .p1 {
                    border-width: 5px;
                    border-style: solid;
                    border-color: black;
                }
            `}</style>
            <h1>BORDER INTERNAL</h1>
            <p className="p1">
                This paragraph has Border applied internal using the padding property.
            </p>
        </div>
    );
}
export default Border;
