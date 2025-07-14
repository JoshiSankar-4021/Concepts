import React from 'react';

function Box() {
    const labelStyle = {
        display: 'flex',
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'green',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        cursor: 'pointer'
    };

    const inputStyling = {
        display: 'block',
        width: '150px',
        height: '25px',
        border: '2px solid black',
        borderRadius: '5px',
        margin: '5px',
        padding: '2px'
    };

    const [formData, setFormData] = React.useState({
        mail: '',
        password: ''
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logged Data', formData);
        setFormData({ mail: '', password: '' });
    };

    return (
        <div>
            <div style={{
                width: '300px',
                height: '200px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                margin: '100px',
                padding: '10px'
            }}>
                <form>
                    <label style={labelStyle}>user mail</label>
                    <input
                        type='email'
                        name='mail'
                        value={formData.mail}
                        onChange={handleChanges}
                        placeholder="enter mail"
                        style={inputStyling}
                    />
                    <label style={labelStyle}>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChanges}
                        placeholder="password"
                        style={inputStyling}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{
                            width: '20%',
                            height: '25px',
                            border: '2px solid black',
                            borderRadius: '5px',
                            backgroundColor: '#f26624',
                            color: '#fff',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Box;
