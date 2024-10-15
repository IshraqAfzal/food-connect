import "../admin.css"

function CreateEvent(){

    const userName = ""

    return (
        <form id="admin-container">
            <h4>Fill in the information below to create a new event or resource</h4>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="type"/>
            <input type="text" placeholder="date"/>
            <input type="text" placeholder="time"/>
            <input type="text" placeholder="address"/>
            <input type="text" placeholder="district"/>
            <button>Submit</button>
        </form>
    )
}

export default CreateEvent