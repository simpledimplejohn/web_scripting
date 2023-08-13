const inputString = `Action Alert
Another Alert
Customer alert
Errors
More-Strange--* text ##
Still Another Alert
TEST
TEST ALERT
TEST ALERT ALERT
WEIrd 12345 "*THIS STUFF*" in here`;

const nameArray = inputString.split('\n').map(name => name.trim());

console.log(nameArray);

