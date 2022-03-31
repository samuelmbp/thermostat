let counter = 0;

const increment = () => {
  console.log((counter += 1));
};

// setInterval(increment, 1000);

const users = ['Sam', 'Ellie', 'Bernie'];

// Callback | Provide a function as an argument to another function.
const addUser = (user, callback) => {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 200);
};

const getUser = () => {
  setTimeout(() => {
    console.log(users);
  }, 100);
};

addUser('Simon', getUser);
