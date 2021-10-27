function Person(prop){
let vote = prop.age >= 18? "Go Vote!" : "Go Study!";
let hobbies = prop.hobbies.map(h =><li>{h}</li>);
    return(
    <div>
        <p>Learn some information about this person:</p>
        <ul>
            <li>Name: {prop.name.slice(0,6)} </li>
            <li>Age: {prop.age} </li>
        <ul>
        Hobbies{hobbies}
        </ul>
        </ul>
        <h3>{vote}</h3>

    </div>
    );
}