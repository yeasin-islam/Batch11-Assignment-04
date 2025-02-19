//Problem 1
function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return "Invalid";
    }
    if (money === 0) {
        return 0;
    }
    let cashoutCharge = (money * 1.75) / 100;
    return cashoutCharge;
}
//Problem 2
function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    if (email[0] === '-' || email[0] === '.' || email.indexOf(" ") !== -1) {
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        return false;
    }
    let atIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".", atIndex);

    if (atIndex === -1 || dotIndex === -1) {
        return false;
    }
    if (email.indexOf("@", atIndex + 1) !== -1) {
        return false;
    }
    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}
//Problem 3
function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    var countMango = 0;
    var countBanana = 0;

    for (var i = 0; i < votes.length; i++) {
        if (typeof votes[i] === "string") {
            var clearVote = votes[i].trim();

            if (clearVote === "mango") {
                countMango++;
            } else if (clearVote === "banana") {
                countBanana++;
            }
        }
    }
    if (countMango > countBanana) {
        return "Mango";
    } else if (countBanana > countMango) {
        return "Banana";
    } else {
        return "Draw";
    }
}
//Problem 4
function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object" ||
        f1 === null || f2 === null) {
        return "Invalid";
    }
    if (!f1.name || !f2.name || !f1.roll || !f2.roll || !f1.bestFriend || !f2.bestFriend) {
        return "Invalid";
    }
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}
//Problem 5
function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        totalSeconds += times[i];
    }

    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return { hour: hours, minute: minutes, second: seconds};
}