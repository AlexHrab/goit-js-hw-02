function checkForSpam(message) {
    message = message.toUpperCase();
    let a = "spam";
    let b = "sale";
    a = a.toUpperCase();
    b = b.toUpperCase();
    return message.includes(!a || b) || message.includes(a || !b);
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true