function perfectFriend(names) {
  for (let name of names) {
    if (name.length == 5) {
      return name;
    }
  }
}

let myFriends = ["ayesha", "rini", "pinky", "babul", "imtiazur"];
const friendHasFiveLetters = perfectFriend(myFriends);
console.log(friendHasFiveLetters);
