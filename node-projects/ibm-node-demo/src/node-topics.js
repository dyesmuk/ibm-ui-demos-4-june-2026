
// node-topics.js 

// buggy.js
function getUserAge(user) {
  return user.profile.age   // user.profile might be undefined!
}

const user = { name: 'Rahul' }  // no profile!
console.log(getUserAge(user))