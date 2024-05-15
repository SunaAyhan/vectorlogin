import React from 'react';

function WelcomePage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '90vh',
            backgroundColor: 'white' // Açık gri arka plan rengi,

        }}>
            <img src='../../public/logo.jpeg' />
            <h1 style={{
                fontSize: '2rem', // Büyük yazı tipi boyutu
                color: '#a1cc38', // Mavi yazı rengi
                textAlign: 'center'
            }}>
                Welcome to Vector Resourcing Career Site
            </h1>
            <p style={{
                fontSize: '1rem', // Büyük yazı tipi boyutu
                color: '#4d4d4d ', // Mavi yazı rengi
                textAlign: 'center'
            }} >Let's keep in touch!</p>
        </div>
    );
}

export default WelcomePage;
