
// console.log(new Date().toLocaleTimeString());




// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + currentDate.toLocaleDateString('en-GB', { weekday: 'long' }) + ', ' + currentDate.toLocaleTimeString('en-GB');
// console.log(formattedDate);


const currentDate = new Date();
const formattedTime = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + currentDate.toLocaleDateString('en-GB', { weekday: 'long' }) + ' ' + currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
console.log(formattedTime); // Output: "3:30:00 PM"
