# Hioosh App

The project contains a network of chats. In this client app you can:
1. Connect from an existing user to the app.
2. Register a new user to the network.
3. Add friends from the network.
4. Send messages of text, image, video and voice to friends.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
**In our project we used the package react-router-dom.**
To run this project you need to use the command:
### `npm start`

It will runs the app in the development mode.

## Existing users in app
The users that exist in the app are:
1. username:'hadaseshel', password: '123456Ha'.
2. username: 'hailzanbar',password: '123456Ha'.
3. username: 'shira', password: '123456Ha'.
4. username:'lia', password: '123456Ha'.
5. username:'ortal', password: '123456Ha'.
6. username:'sivan', password: '123456Ha'.
7. username:'ofir', password: '123456Ha'.

## Login
The homepage is the Login page.
Try to login with the details of user:'hadaseshel', now you will be taken to the user's chat screen of 'hadaseshel', you can see the contacts of 'hadaseshel', and the mesages that that user send to thier friends.
If you want to register to this app you can enter the registration form by clicking on the link in the text "Not registred? Click here to register".

Entering details of user that does'nt exist will pop up an error message in that login from.


## Registration
To register, you will need to fill in 4 fields:
- Required:
Username (Can only contain letters and numbers).
Nickname (Can only contain letters and numbers).
Password (The password must consist of at least 8 characters that include at least 1 lowercase character, 1 uppercase character and 1 number. All the other characters are not allowed to use in the password).
- Optional:
Upload User Image.

Filling in the fields in a way that does not comply with the registration rules will pop up an error message in the registration.

If you want to Login you can enter the Login form by clicking on the link in the text "Already registred? Click here to login".

## Chat screen
To go on the chat screen you must login. Login with the details of user:'hadaseshel', by the logging in you will be taken to the user's chat screen of hadaseshel'.
If you want to see the chat screen of others user, you can login with the details of the other user that exist in the app.

### Add contact
To add a chat with another user who is not in your chat list, click on the "Avatar Plus" icon in the upper left area of the screen.
The username of the desired contact must be entered.
You can only enter the username of a registered user, who is not in your list. It will then be added to your chat list.

### Send message
Sending a message is done through the bottom of the selected chat screen.
To send a video, voice or image Select the appropriate icon in this area.
To send text, enter the text in the space provided next to the icons.

You can see that the message was received "on the other side" by logging in to the user who received the message (without retrying).

If you login by the user details of 'hadaseshel' You can see the different messages that have already been sent in the different chats of this user: text, video, image and voice.


