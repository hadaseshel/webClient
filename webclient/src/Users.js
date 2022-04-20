//list of chat
// video, audio , image, text
const hadasCatWitHail=[{type:"Text",message: "hey, how are you???", own: "me", time:"12:00"},{type:"Text" ,message: "I am good, how are you?", own: "not me", time:"12:05"}];
const hailChatWithHadas=[{type:"Text",message: "hey, how are you?", own: "not me", time:"12:00"},{type:"Text", message: "I am good, how are you?", own: "me", time:"12:05"}];
const HadasChatWithshira=[{type:"Text",message: "hey, how are you???", own: "not me", time:"12:40"},{type:"Text",message: "I am fine, how are you?", own: "me" ,time:"12:45"}];
const shiraChatWithHadas=[{type:"Text",message: "hey, how are you???", own: "me", time:"12:40"},{type:"Text",message: "I am fine, how are you?", own: "not me" ,time:"12:45"}];
const HadasChatWithOrtal = [{type:"Image",message: "hadasfoto.png", own: "me", time:"15:00"}];
const OrtalChatWithHadas = [{type:"Image",message: "hadasfoto.png", own: "not me", time:"15:00"}];
const HadasChatWithLia = [{type:"Video",message: "mydog.mp4", own: "not me", time:"15:00"}];
const LialChatWithHadas = [{type:"Video",message: "mydog.mp4", own: "me", time:"15:00"}];
const HadasChatWithSivan = [{type:"Audio",message: "myHav.wav", own: "me", time:"17:00"}];
const SivanChatWithHadas = [{type:"Audio",message: "myHav.wav", own: "not me", time:"17:00"}];


// list of friends
const hadaseshelFriends = [{username: "hailzanbar" ,nickname: 'hailosh', image: "hailfoto.jpeg", chat: hadasCatWitHail},
{username: "shira" ,nickname: 'shiroosh', image: "shirafoto.jpg", chat: HadasChatWithshira},
{username:'ortal', nickname: 'ortalosh', image: "ortalfoto.jpg", chat: HadasChatWithOrtal},
{username:'lia', nickname: 'liloosh', image: "liafoto.jpg" ,chat:HadasChatWithLia},
{username:'sivan', nickname: 'sivanosh', image: "sivanfoto.jpg",chat: HadasChatWithSivan}]

const hailzanbarFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: hailChatWithHadas}];

const shiraFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: shiraChatWithHadas}];

const liaFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: LialChatWithHadas}];

const ortalFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat: OrtalChatWithHadas}];

const sivanFriends = [{username:'hadaseshel', nickname: 'doosa', image: "hadasfoto.png", chat:SivanChatWithHadas}];

const ofirFriends = [];

// the dictionery of user
const Users = {'hadaseshel': {username:'hadaseshel', password: '123456Ha', nickname: 'doosa', image: "hadasfoto.png", friends: hadaseshelFriends},
'hailzanbar': {username: 'hailzanbar',password: '123456Ha', nickname: 'hailosh', image: "hailfoto.jpeg", friends: hailzanbarFriends},
'shira':{username: 'shira', password: '123456Ha', nickname: 'shiroosh', image: "shirafoto.jpg", friends: shiraFriends},
'lia': {username:'lia', password: '123456Ha', nickname: 'liloosh', image: "liafoto.jpg", friends: liaFriends},
'ortal': {username:'ortal', password: '123456Ha', nickname: 'ortalosh', image: "ortalfoto.jpg", friends: ortalFriends},
'sivan': {username:'sivan', password: '123456Ha', nickname: 'sivanosh', image: "sivanfoto.jpg", friends: sivanFriends},
'ofir': {username:'ofir', password: '123456Ha', nickname: 'ofirosh', image: "ofirfoto.jpg", friends: ofirFriends}
};

export default Users;