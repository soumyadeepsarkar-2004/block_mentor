import React, { useState } from "react";
import { getContract } from "../utils/contract";

const BookSession = () => {
    const [tutor, setTutor] = useState("");
    const [student, setStudent] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const bookSession = async () => {
        try {
            const contract = await getContract();

            if (!contract) {
                console.error("Contract not found!");
                alert("Error: Contract not found.");
                return;
            }

            console.log("Contract Loaded:", contract);
            console.log("Available Functions:", Object.keys(contract));

            if (typeof contract.bookSession !== "function") {
                console.error("Error: bookSession function not found in contract!");
                alert("Error: bookSession function is missing in contract.");
                return;
            }

            const parsedTime = Math.round(parseFloat(time) * 100);
            const parsedPrice = Math.round(parseFloat(price) * 100);

            const tx = await contract.bookSession(tutor, student, parsedTime, parsedPrice);
            await tx.wait();

            alert("Session booked successfully!");
        } catch (error) {
            console.error("Booking failed:", error);
            alert(`Booking failed: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Book a Session</h2>
            <input placeholder="Tutor Name" onChange={(e) => setTutor(e.target.value)} />
            <input placeholder="Student Name" onChange={(e) => setStudent(e.target.value)} />
            <input placeholder="Time (hours or minutes)" type="number" step="0.01" onChange={(e) => setTime(e.target.value)} />
            <input placeholder="Price (EDU)" type="number" step="0.01" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={bookSession}>Book</button>
        </div>
    );
};

export default BookSession;
