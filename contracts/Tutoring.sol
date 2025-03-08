// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Tutoring {
    struct Session {
        string tutor;
        string student;
        uint256 time;
        uint256 price;
        bool completed;
    }

    mapping(uint256 => Session) public sessions;
    uint256 public sessionCount;

    function bookSession(string memory tutor, string memory student, uint256 time, uint256 price) public {
        sessions[sessionCount] = Session(tutor, student, time, price, false);
        sessionCount++;
    }

    function completeSession(uint256 sessionId) public {
        sessions[sessionId].completed = true;
    }
}
