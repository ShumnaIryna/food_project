import { useHistory } from "react-router-dom";

function Contact() {
  const { goBack } = useHistory();

  return (
    <>
      <h4>Contact Email: thedatasdb@gmail.com</h4>
      <button className="btn #546e7a blue-grey darken-1" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}

export { Contact };
