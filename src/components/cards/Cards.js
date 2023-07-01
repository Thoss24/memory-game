import classes from './Cards.module.css';

const Cards = (props) => {

    const passIdHandler = () => {
        props.checkId({
            id: props.id,
            name: props.name
        }) 
    };

    return (
        <div onClick={passIdHandler} className={classes.card}>{props.name}</div>
    )
};

export default Cards;