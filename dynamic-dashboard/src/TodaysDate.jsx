const TodaysDate = () => {
    let todaysDate = new Date().toLocaleDateString();

    return <h2>{todaysDate}</h2>;
}

export default Date;