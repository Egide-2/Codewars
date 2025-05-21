import banyaga from "./assets/banyaga.jpg" 
function Card(){
return(
    <div className="card">
        <img src={banyaga} alt="banyaga "></img>
        <h2> Egide Billy</h2>
        <p>I'm student </p>
    </div>
);
}
export default Card