import classes from './Cards.module.css';

const Cards = (props) => {

    const passIdHandler = () => {
        props.checkId({
            id: props.id,
            name: props.name
        }) 
    };

    return (
        <div onClick={passIdHandler} className={classes.card}>
            <img className={classes.image} src={props.img} alt="animal"/>
            <h2>{props.name}</h2>
        </div>
    )
};

export default Cards;