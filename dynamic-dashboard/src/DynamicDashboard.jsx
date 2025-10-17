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

    // iterate through task list, return "emoji" "task name"
    const renderTaskList = myTasks.map((task) => 
        // turn text green if task is complete
        <li style={task.isCompleted ? {color: "green"} : {}}> 
            {emojiIfCompleted(task)} {task.name}
        </li>
    );

    // returns length of array with completed tasks in it
    const countCompletedTasks = myTasks.filter(task => task.isCompleted).length;

    // returns length of array with incompleted tasks in it 
    const countIncompleteTasks = myTasks.filter(task => !task.isCompleted).length;

    // return statement
    return (
        // wrap in div so JSX elements have just one parent
        <div>
            <h1>{renderUserGreeting}</h1>
            <h2>{subscriptionMsg}</h2>
            <ul>{renderTaskList}</ul>
            <h3>Tasks Completed: {countCompletedTasks}</h3>
            <h3>Tasks Incomplete: {countIncompleteTasks}</h3>
        </div>
    );
}

export default DynamicDashboard;