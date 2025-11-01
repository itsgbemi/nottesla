export default function OffersSection({ offers }) {
return (

<section className="offers-section"> <div className="container"> <div className="offers-grid"> {offers.map((offer, index) => ( <div key={index} className="offer-card"> <h3 className="offer-heading">{offer.heading}</h3> <p className="offer-text">{offer.text}</p> <button className="offer-btn">{offer.buttonText}</button> </div> ))} </div> </div> </section> ); }
