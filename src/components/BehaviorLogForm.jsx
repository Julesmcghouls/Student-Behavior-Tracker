import { useState } from "react";

function BehaviorLogForm() {
    const [behvaior, setBehavior] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(behvaior);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={behvaior}
                onChange={(event) => setBehavior(event.target.value)}
            />
            <button type="submit">Log Behavior</button>
        </form>
    );
}

export default BehaviorLogForm;
