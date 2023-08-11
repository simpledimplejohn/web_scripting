const inputString = `Another Alert
Customer alert
Errors
More-Strange--* text ##
Still Another Alert
WEIrd 12345 "*THIS STUFF*" in here`;

const nameArray = inputString.split('\n').map(name => name.trim());

console.log(nameArray);alertlist = ''


['Another Alert', 'Customer alert', 'Errors', 'More-Strange--* text ##', 'Still Another Alert', 'WEIrd 12345 "*THIS STUFF*" in here']