const DynamicDashboard = () => {

    // instruction 1. dynamic greeting
    let userName = "Noah";
    const renderUserGreeting = `Hello, ${userName}`;

    // instruction 2. conditional content
    let isPremium = true;
    const subscriptionMsg = (isPremium ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!");

    // instruction 3. render a task lisk
    let myTasks = [
        {"name": "Wash dishes", "isCompleted": true},
        {"name": "Do laundry", "isCompleted": true},
        {"name": "Study React", "isCompleted": false}
    ];
    const checkEmoji = "\u2705"; // ✅
    const xEmoji = "\u274c"; // ❌

    const emojiIfCompleted = (task) => task.isCompleted? checkEmoji : xEmoji;

    const renderTaskList = myTasks.map((task) => 
        <li>{emojiIfCompleted(task)} {task.name}</li>
    );

    // return statement
    return (
        // wrap in div so JSX elements have just one parent
        <div>
            <h1>{renderUserGreeting}</h1>
            <h2>{subscriptionMsg}</h2>
            <ul>{renderTaskList}</ul>
        </div>
    );
}

export default DynamicDashboard;