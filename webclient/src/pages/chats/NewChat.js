import AvatarPlusIcon from "./icons/AvatarPlusIcon";
import Users from '../../Users.js';
import { useRef } from "react";

export default function NewChat( {addChat}) {

    // reference to input of user
    const contactInput = useRef();

    const addContact = function(){

        // the input of the new contact
        let contactName = contactInput.current.value;

        // find the new contact in the Users list. if it exists, add it to the user's friends.
        for (var key in Users) {
            if (key == contactName) {
                //console.log(contactName);
                addChat({nickname: Users[key].nickname, image: Users[key].image, chat: null});
                //console.log("after add chat at addcontact");
                return;
            }
        }
    }


    // Returns a button that pops up a modal that allows you to add a new contact.
    return (
        <div className="newchat">
            <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <AvatarPlusIcon />
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add new contact</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group row">
                                <div className="col-sm-8">
                                    <input placeholder="contact's identifier" id="newcontant" name="nwecontant" ref={contactInput}></input>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" aria-label="Close" data-bs-dismiss="modal" onClick={addContact}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}