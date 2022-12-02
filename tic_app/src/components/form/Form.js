import React, { useContext } from "react";
import FormInfo from "./comps/FormInfo";
import globalState from "../../context/Context";

// form, setForm
const BookForm = () => {
  const { forms } = useContext(globalState);

  console.log(forms);

  return (
    <div className="BookFormWrap">
      <h1 className="signUp">Sign Up</h1>
      <form className="ui form booking">
        <div className="infoField">
          <label className="labelTxt">Full Name</label>
          <input type="text" name="fullname" placeholder="fullname" />
        </div>
        <div className="infoField">
          <label className="labelTxt"> Email</label>
          <input type="text" name="Email" placeholder="Email" />
        </div>
        <div className="infoField">
          <label className="labelTxt"> Phone number</label>
          <input type="text" name="Phone number" placeholder="Phone number" />
        </div>

        <button className="ui button primary btn " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const BookTraining = () => {
  return (
    <div className="formContainer">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="infoWrapperTraining">
              <img
                className="formImage"
                src={require("../../css/images/istockphoto-825383494-612x612.jpg")}
                alt="formImage"
              ></img>

              <FormInfo />

              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTraining;
