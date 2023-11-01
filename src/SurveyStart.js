import { useCallback, useState, useRef } from 'react';
import 'survey-core/modern.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import './SurveyStart.css'

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Dabar mes paprašysime jūsu atsakyti į porą klausimų.</h2>"
    }]
  }, {
    elements: [{
      name: "satisfaction-score",
      title: "Kaip dažnai vartojate alkoholinius gėrimus?",
      type: "radiogroup",
      choices: [
        { value: 6, text: "Dažniau, nei karta per savaitę" },
        { value: 5, text: "Kartą per savaitė" },
        { value: 4, text: "Mažiau, nei kartą per savaitę" },
        { value: 3, text: "Kartą per menesį" },
        { value: 2, text: "Mažiau, nei kartą per menesį" },
        { value: 1, text: "Nevartoju" },
      ],
      isRequired: true
    }]
  }, {
    elements: [ {
      name: "nps-score",
      title: "Nuo 0 iki 10 įvertinkite savo pasitenkinimą gyvenimu",
      type: "rating",
      rateMin: 0,
      rateMax: 10,
    }],
    visibleIf: "{satisfaction-score} >= 4"
  }, {
    elements: [{
      name: "how-can-we-improve",
      title: "Koks jūsu vardas?",
      type: "comment"
    }],
    visibleIf: "{satisfaction-score} = 3"
  }, {
    elements: [{
      name: "how-can-we-improve",
      title: "Kiek jums metu?",
      type: "comment"
    }],
    visibleIf: "{satisfaction-score} = 3"
  }, {
    elements: [{
      name: "disappointing-experience",
      title: "Kodel taip galvojate?",
      type: "comment"
    }],
    visibleIf: "{satisfaction-score} =< 2"
  }],
  showQuestionNumbers: "off",
  pageNextText: "Toliau",
  completeText: "Pabaigti",
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Pradėti",
  completedHtml: "Aciū už atsakymus!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function SurveyStart() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default SurveyStart;