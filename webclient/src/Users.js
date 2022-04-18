//list of chat
// video, audio , image, text
const hadasCatWitHail=[{type:"text",message: "hey, how are you???", own: "me", time:"12:00"},{type:"text" ,message: "I am good, how are you?", own: "not me", time:"12:05"}];
const hailChatWithHadas=[{type:"text",message: "hey, how are you?", own: "not me", time:"12:00"},{type:"text", message: "I am good, how are you?", own: "me", time:"12:05"}];
const HadasChatWithshira=[{type:"text",message: "hey, how are you???", own: "not me", time:"12:40"},{type:"text",message: "I am fine, how are you?", own: "me" ,time:"12:45"}];
const shiraChatWithHadas=[{type:"text",message: "hey, how are you???", own: "me", time:"12:40"},{type:"text",message: "I am fine, how are you?", own: "not me" ,time:"12:45"}];

// list of friends
const hadaseshelFriends = [{username: "hailzanbar" ,nickname: 'hailosh', image: "hailfoto.jpeg", chat: hadasCatWitHail},
{username: "shira" ,nickname: 'shiroosh', image: null, chat: HadasChatWithshira}]

const hailzanbarFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: hailChatWithHadas}];

const shiraFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: shiraChatWithHadas}];

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