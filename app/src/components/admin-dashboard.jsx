import "../admin.css";

function AdminDashboard() {
    const userName = "ADMIN";
    const weeklyMeals = 1200;
    const monthlyMeals = 11500;
    const yearlyMeals = 92500;

    return (
        <div id="container">
            <div id="heading">Welcome {userName}</div>
            <div id="line-3">Manage and plan your food distribution with ease using AI</div>
            <div className="stat-line">
                <span>{weeklyMeals}</span> meals distributed this week
            </div>
            <div className="stat-line">
                <span>{monthlyMeals}</span> meals distributed this month
            </div>
            <div className="stat-line">
                <span>{yearlyMeals}</span> meals distributed this year
            </div>
        </div>
    );
}

export default AdminDashboard;
