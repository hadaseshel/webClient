// list of friends
const hadaseshelFriends = [{username: "hailzanbar" ,nickname: 'hailosh', image: "hailfoto.jpeg", chat: []},
{username: "shira" ,nickname: 'shiroosh', image: null, chat: []}]

const hailzanbarFriends = [];

const shiraFriends = [];

const liaFriends = [];

const ortalFriends = [];

// the dictionery of user
const Users = {'hadaseshel': {username:'hadaseshel', password: '123456Ha', nickname: 'doosa', image: "hadasfoto.png", friends: hadaseshelFriends},
'hailzanbar': {username: 'hailzanbar',password: '123456Ha', nickname: 'hailosh', image: "hailfoto.jpeg", friends: hailzanbarFriends},
'shira':{username: 'shira', password: '123456Ha', nickname: 'shiroosh', image: null, friends: shiraFriends},
'lia': {username:'lia', password: '123456Ha', nickname: 'liloosh', image: null, friends: liaFriends},
'ortal': {username:'ortal', password: '123456Ha', nickname: 'ortalosh', image: null, friends: ortalFriends}
};

export default Users;