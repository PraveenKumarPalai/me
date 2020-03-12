import React from 'react';
import img from '../assets/images/404.png';

const Error = (props) => {
    setTimeout(() => {
        props.history.push('/');
    }, 2000);
    return (
        <>
        <div className="error-page">
            <div className="error-text">
            <img src={img} alt="404"></img>
            <div className="error-img"></div>
            <h1>404 Page not found..</h1>
            <h3>Redirecting..</h3>
            </div>
        </div>
        <style jsx>{`
            .error-page{
                width: 100%;
            }
            .error-text{
                box-shadow: 0 8px 6px -6px black;
                text-align: center;
                padding: 10px;
                width: 45%;
                vertical-align: center;
                margin: 0 auto;
                margin-top: 150px;
            }
            .error-img{
                background-image: ${img}
            }
            `}</style>
        </>
    );
}

export default Error;