import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
} from "semantic-ui-react";

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from "../constants";
import { shuffle } from "../utils";

import Offline from "../Offline";

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState("0");
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState("0");
  const [questionsType, setQuestionsType] = useState("0");
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    fetch(API)
      .then((respone) => respone.json())
      .then((data) =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API dont have enough questions for your query. (Ex. Asking
                for 50 Questions in a Category that only has 20.)
                <br />
                <br />
                Please change the <strong>No. of Questions</strong>,{" "}
                <strong>Difficulty Level</strong>, or{" "}
                <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach((element) => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers,
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
            countdownTime.hours + countdownTime.minutes + countdownTime.seconds
          );
        }, 1000)
      )
      .catch((error) =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  if (offline) return <Offline />;

  return (
    <div className="w-1/2 mx-auto">
      <div className="grid grid-col-1 md:grid-cols-3 gap-4 mb-10 mt-10">
        <div>
          <label className="text-blue-500 font-bold text-lg">Hours</label>
          <input
            name="hours"
            placeholder="Select Hours"
            className="input input-bordered w-full max-w-xs"
            list="hours"
            onChange={handleTimeChange}
          />
          <datalist id="hours">
            {COUNTDOWN_TIME.hours?.map((r, index) => (
              <option value={r.text} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-blue-500 font-bold text-lg">Minutes</label>
          <input
            name="minutes"
            placeholder="Select Minutes"
            className="input input-bordered w-full max-w-xs"
            list="minutes"
            onChange={handleTimeChange}
          />
          <datalist id="minutes">
            {COUNTDOWN_TIME.minutes?.map((r, index) => (
              <option value={r.text} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-blue-500 font-bold text-lg">Seconds</label>
          <input
            name="seconds"
            placeholder="Select Seconds"
            className="input input-bordered w-full max-w-xs"
            list="seconds"
            onChange={handleTimeChange}
          />
          <datalist id="seconds">
            {COUNTDOWN_TIME.seconds?.map((r, index) => (
              <option value={r.text} key={index} />
            ))}
          </datalist>
        </div>
      </div>
      {/* Category */}
      <div>
        <label className="text-blue-500 font-bold text-lg">Category</label>
        <input
          name="category"
          placeholder="Select Quiz Category"
          className="input input-bordered w-full mb-5"
          list="category"
          onChange={(e, { value }) => setCategory(value)}
        />
        <datalist id="category">
          {CATEGORIES?.map((r, index) => (
            <option value={r.text} key={index} />
          ))}
        </datalist>
      </div>
      <div>
        <label className="text-blue-500 font-bold text-lg">Question Type</label>
        <input
          name="type"
          placeholder="Select Quiz Category"
          className="input input-bordered w-full mb-5"
          list="type"
          onChange={(e, { value }) => setQuestionsType(value)}
        />
        <datalist id="type">
          {QUESTIONS_TYPE?.map((r, index) => (
            <option value={r.text} key={index} />
          ))}
        </datalist>
      </div>

      <div>
        {/* no */}
        <label className="text-blue-500 font-bold text-lg">Questions No</label>
        <input
          name="numOfQ"
          placeholder="Select No. of Questions"
          className="input input-bordered w-full mb-5"
          list="numOfQ"
          onChange={(e, { value }) => setNumOfQuestions(value)}
        />
        <datalist id="numOfQ">
          {NUM_OF_QUESTIONS?.map((r, index) => (
            <option value={r.text} key={index} />
          ))}
        </datalist>
      </div>

      <div>
        <label className="text-blue-500 font-bold text-lg">
          Difficulty Level
        </label>
        <input
          name="difficulty"
          placeholder="Select Difficulty Level"
          className="input input-bordered w-full mb-5"
          list="difficulty"
          onChange={(e, { value }) => setDifficulty(value)}
        />
        <datalist id="difficulty">
          {DIFFICULTY?.map((r, index) => (
            <option value={r.text} key={index} />
          ))}
        </datalist>
      </div>

      <Button
        className="btn bg-[#4182F6] hover:text-blue-500 hove:border-blue-500 border-blue-500 hover:bg-white text-white"
        size="big"
        icon="play"
        labelPosition="left"
        content={processing ? "Processing..." : "Play Now"}
        onClick={fetchData}
        disabled={!allFieldsSelected || processing}
      />

      {/* <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                {error && (
                  <Message error onDismiss={() => setError(null)}>
                    <Message.Header>Error!</Message.Header>
                    {error.message}
                  </Message>
                )}
                <Divider />
                <Item.Meta>
                  <Dropdown
                    fluid
                    selection
                    className="bg-blue-500 p-5 rounded-lg text-white"
                    name="category"
                    placeholder="Select Quiz Category"
                    header="Select Quiz Category"
                    options={CATEGORIES}
                    value={category}
                    onChange={(e, { value }) => setCategory(value)}
                    disabled={processing}
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="numOfQ"
                    placeholder="Select No. of Questions"
                    header="Select No. of Questions"
                    options={NUM_OF_QUESTIONS}
                    value={numOfQuestions}
                    onChange={(e, { value }) => setNumOfQuestions(value)}
                    disabled={processing}
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="difficulty"
                    placeholder="Select Difficulty Level"
                    header="Select Difficulty Level"
                    options={DIFFICULTY}
                    value={difficulty}
                    onChange={(e, { value }) => setDifficulty(value)}
                    disabled={processing}
                  />
                  <br />
                  <Dropdown
                    fluid
                    selection
                    name="type"
                    placeholder="Select Questions Type"
                    header="Select Questions Type"
                    options={QUESTIONS_TYPE}
                    value={questionsType}
                    onChange={(e, { value }) => setQuestionsType(value)}
                    disabled={processing}
                  />
                  <br />
                  <Dropdown
                    search
                    selection
                    name="hours"
                    placeholder="Select Hours"
                    header="Select Hours"
                    options={COUNTDOWN_TIME.hours}
                    value={countdownTime.hours}
                    onChange={handleTimeChange}
                    disabled={processing}
                  />
                  <Dropdown
                    search
                    selection
                    name="minutes"
                    placeholder="Select Minutes"
                    header="Select Minutes"
                    options={COUNTDOWN_TIME.minutes}
                    value={countdownTime.minutes}
                    onChange={handleTimeChange}
                    disabled={processing}
                  />
                  <Dropdown
                    search
                    selection
                    name="seconds"
                    placeholder="Select Seconds"
                    header="Select Seconds"
                    options={COUNTDOWN_TIME.seconds}
                    value={countdownTime.seconds}
                    onChange={handleTimeChange}
                    disabled={processing}
                  />
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    className="btn btn-primary text-white"
                    size="big"
                    icon="play"
                    labelPosition="left"
                    content={processing ? "Processing..." : "Play Now"}
                    onClick={fetchData}
                    disabled={!allFieldsSelected || processing}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container> */}
    </div>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
