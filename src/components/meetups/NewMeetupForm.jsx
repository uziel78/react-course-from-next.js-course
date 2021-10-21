import { useRef } from "react";
import formStyles from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  //ref to tie input values with function
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  //handle form's default event
  function submitHandler(event) {
    event.preventDefault();

    //store variables values
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    //new object created to store values in key/value pairs
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={formStyles.form} onSubmit={submitHandler}>
        <div className={formStyles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={formStyles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={formStyles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={formStyles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={formStyles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
