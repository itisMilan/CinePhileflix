import React from "react";
import "./FrequentlyAskedQuestions.css";
import Button from "./Button";

export default function FrequentlyAskedQuestions() {
  return (
    <container className="FrequentlyAskedQuestionsContainer">
      <section>
        <h1>Frequently Asked Questions</h1>
      </section>

      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          What is Netflix?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </div>
        <input id="collapsible2" className="toggle" type="checkbox" />
        <label for="collapsible2" className="lbl-toggle">
          How much does Netflix cost?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <input id="collapsible3" className="toggle" type="checkbox" />
        <label for="collapsible3" className="lbl-toggle">
          Where can I watch?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </div>
        <input id="collapsible4" className="toggle" type="checkbox" />
        <label for="collapsible4" className="lbl-toggle">
          How do I cancel?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        </div>
        <input id="collapsible5" className="toggle" type="checkbox" />
        <label for="collapsible5" className="lbl-toggle">
          What can I watch on Netflix?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </div>
        <input id="collapsible6" className="toggle" type="checkbox" />
        <label for="collapsible6" className="lbl-toggle">
          Is Netflix good for kids?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </div>
        </div>
        <div className="buttonContainer">

      <Button></Button>
        </div>
      </div>
    </container>
  );
}
