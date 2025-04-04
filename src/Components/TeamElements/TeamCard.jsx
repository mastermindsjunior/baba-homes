import React from 'react';

const TeamCard = ({ data }) => {
    const { img, tag, name } = data
    return (
        <div className="item">
            <div className="team_construction">
                <figure className="team_construction_inner">
                    <a href="/team">
                        <img src={img} alt="{name}" loading="lazy" />
                    </a>
                    <div className="team-box__info">
                        <a href="/team" className="name h5">{name}</a>
                        <p className="position">{tag}</p>
                    </div>
                </figure>
                <div className="team_hover_content">
                    <ul className="speakers-social-lists-simple">
                        <li>
                            <a href="/https://www.facebook.com/" className="fa fa-facebook-square"></a>
                        </li>
                        <li>
                            <a href="/https://twitter.com/" className="fa fa-twitter"></a>
                        </li>
                        <li>
                            <a href="/https://linkedin.com/" className="fa fa-linkedin"></a>
                        </li>
                        <li>
                            <a href="/https://linkedin.com/" className="fa fa-linkedin"></a>
                        </li>
                        <li>
                            <a href="/https://linkedin.com/" className="fa fa-linkedin"></a>
                        </li>
                    </ul>
                    <h2 className="speaker-title-simple">
                        <a href="/team">{name}</a>
                    </h2>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;