import React from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className="profile-container-about">
                    <h1 className="profile-name animated pulse">Praveen Kumar Palai</h1>
                    <h3 className="profile-about animated hue infinite linear">Software Engineer | Tech Enthusiast | Artist</h3>
                    <h4 className="profile-info">You can find my <a href="https://medium.com/@praveenkumarpalai" rel="noopener noreferrer" target="_blank"><span className="medium-blogs">blogs</span> on medium.</a></h4>
                    <div className="profile-social-links-container animated lightSpeedIn">
                        <a href="https://github.com/PraveenKumarPalai" rel="noopener noreferrer" target="_blank">
                            <div className='profile-link-box-start'>
                                <img src={github} className='profile-links' alt='github pic'></img>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/praveenkumarpalai/" rel="noopener noreferrer" target="_blank">
                            <div className='profile-link-box'>
                                <img src={linkedin} className='profile-links' alt='linkedin pic'></img>
                            </div>
                        </a>
                        <a href="https://twitter.com/PraveenPalai" rel="noopener noreferrer" target="_blank">
                            <div className='profile-link-box'>
                                <img src={twitter} className='profile-links' alt='twitter pic'></img>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/PraveenKumarPalai" rel="noopener noreferrer" target="_blank">
                            <div className='profile-link-box'>
                                <img src={facebook} className='profile-links' alt='fcebook pic'></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
            a{
                color: grey;
            }
            a:hover{
                text-decoration: none;
                color: grey;
            }
            .profile{
                display: flex;
                width: 100%;
                overflow: hidden;
                padding: 20px;
            }
            .profile-name {
                color: #f35626;
                font-size: 4rem;
                background-image: linear-gradient(92deg, blue 0%, green 75%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Shadows Into Light';
                animation-duration: 2s;
                animation-delay: 1s;
            }
            .profile-about {
                color: grey;
                font-family: 'Shadows Into Light';
            }
            .profile-info {
                color: grey;
                font-family: 'Shadows Into Light';
            }
            .medium-blogs {
                color: darkgreen;
            }
            .profile-link-box{
                float: left;
                padding: 11px;
            }
            .profile-link-box-start{
                float: left;
                padding: 11px;
            }
            .profile-container{
                box-shadow: 0 10px 25px -4px black;
                width: 45%;
                overflow: hidden;
            }
            .profile-container-about{
               margin: 0 auto;
               margin-top: 200px;
            }
            .profile-pic{
                width: 100%;
            }
            .profile-social-links-container{
                width: fit-content;
                margin: 0 auto;
            }
            .profile-links{
                padding: 0 5px;
                height: 27px;
                line-height: 2.5rem;
            }
            .profile-link-work{
                float: left;
                padding-left: 50px;
            }
            .profile-link-education{
                float: right;
                padding-right: 50px;
            }
            .profile-details {
                width: 100%;
                display: inline-block;
            }
            .tech-stack{
                padding: 40px 0;
            }
            .tech-stack-tiltle{
                margin-bottom: 25px;
                padding-top: 20px;
            }

            @media only screen and (max-width: 768px) {
                .profile{
                    display: block;
                }
                .profile-container{
                    width: 100%;
                }
                .profile-link-work {
                    width: 50%;
                    float: none;
                }
                .profile-link-education{
                    width: 50%;
                    float: none;
                }
                .profile-link-box-start{
                    // float: none;
                    padding: 11px;
                }
                .profile-link-box{
                    padding: 11px;
                }
                .profile-name {
                    font-size: 3em;
                }
                .profile-details {
                    display: flex;
                    width: 100%;
                }
              }

              @media only screen and (max-width: 545px) {
                .profile-name {
                    font-size: 2.2em !important;
                }
              }
        `}</style>
        </>
    )
}

export default Profile;