import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";
import cancel from "./images/cancel.jfif";
import { useState } from "react";
const App = () => {
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(0);

  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div className="App">
      <Header />
      <div onClick={handleClick} className="private"></div>
      {display ? (
        <div className="cookies">
          <div className="cancel">
            <p></p>
            <img onClick={handleClick} src={cancel} alt="cancel" />
          </div>
          <div className="privacySet">
            <div className="lang">
              <p>English</p>
              <p>Privacy Settings</p>
            </div>
            <div className="policy">
              <p>.</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="set">
            <div onClick={() => setDisplay1(0)} className="head">
              <p>Settings</p>
            </div>
            <div onClick={() => setDisplay1(1)} className="head">
              <p>Cookies</p>
            </div>
            <div onClick={() => setDisplay1(2)} className="head">
              <p>Cookie Policy</p>
            </div>
          </div>
          {display1 === 0 && (
            <div className="seetings">
              <p className="permission">
                We would like your permission to use your data for the following
                purposes:
              </p>

              <div className="nec">
                <p>Necessary</p>
                <p>More</p>
              </div>
              <div className="switch">
                <p className="coo">
                  These cookies are required for good function ality of our
                  website and can't be switched off in our system.
                </p>
                <p>fjfh</p>
              </div>
            </div>
          )}
          {display1 === 1 && (
            <div className="cook">
              <p>
                This cookie list generally shows all cookies found on this
                website. It does not reflect the user's individual opt-out
                choices.
              </p>
              <p>Updated: ---</p>
            </div>
          )}
          {display1 === 2 && (
            <div className="cookPolicy">
              <p>Updated: ---</p>
              <h3>What are cookies?</h3>
              <p>
                Cookies and similar technologies are very small text documents
                or pieces of code that often contain a unique identification
                code. When you visit a website or use a mobile application, a
                computer asks your computer or mobile device for permission to
                save this file on your computer or mobile device and gain access
                to information. Information collected through cookies and
                similar technologies may include the date and time of the visit
                and how you use a particular website or mobile application.
              </p>
              <h3>Why do we use cookies</h3>
              <p>
                Cookies make sure that during your visit of our online shop you
                remain logged in, all items remain stored in your shopping cart,
                you can shop safely and the website keeps running smoothly. The
                cookies also ensure that we can see how our website is used and
                how we can improve it. Furthermore, depending on your
                preferences our own cookies may be used to present you with
                targeted advertisements that match your personal interests.
              </p>
              <h3>What type of cookies do we use?</h3>
              <p>Necessary cookies</p>
              <p>
                These cookies are necessary for the website to function
                properly. Some of the following actions can be performed by
                using these cookies. - Store articles in a shopping cart for
                online purchases - Save your cookie preferences for this website
                - Saving language preferences - Log in to our portal. We need to
                check whether you are logged in.
              </p>
              <h3>How can I switch off or remove cookies?</h3>
              <p>
                You can choose to opt out of all but the necessary cookies. In
                the settings of the browser, you can change the settings to
                ensure that cookies will be blocked. Most browsers provide you
                with an explanation on how to do this in the so-called
                ‘help-function’. However, if you block the cookies, it is
                possible that you will not be able to enjoy all the technical
                features our website has to offer and it may negatively affect
                your user experience.
              </p>
              <p>This is your unique id:</p>
              <p>b27b154d-2405-4fb9-8103-f6e5406ba126</p>
              <p>
                If you want to view your consents audit please contact the
                website administrator.
              </p>
              <p>Your latest consent change has been registered on:</p>
              <p>11/3/2022, 09:00 AM</p>
            </div>
          )}

          <div className="accept">
            <button>Accept All </button>
            <div className="save">
              <button className="save"> Save Settings</button>
              <button className="deny"> Deny</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <Main />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
