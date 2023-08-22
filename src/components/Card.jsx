// const cou = "Country";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
// const p = "Sit eos kasd dolor lorem clita diam ut, sanctus sed voluptua est dolor tempor sanctus erat, eirmod magna sed invidunt."

function Card(propse){
    const {titleName,desc} = propse;
    return <div className='card'>
            <h3 className='card-title'>{titleName}</h3>
            <p className='card-desc'>{desc}</p>
            <p className='card-footer'>{dateName + "/" + monthName + "/" + yearName}</p>
            </div>
}

export default Card;