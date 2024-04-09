//=> should return a value string
const saturdayFun = (activity = 'roller-skate') => 
`This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') => 
`This Monday, I will ${activity}.`;

const wrapAdjective = (style = '*') => (adjective = 'dedicated') => 
`You are ${style}${adjective}${style}!`;
const bold = wrapAdjective('**');

//output examples of functions with different input values and output strings 
console.log(saturdayFun()); 
console.log(mondayWork());
console.log(bold()); 
console.log(bold('programmer'));
