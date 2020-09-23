import { getEntries, useJournalEntries, saveJournalEntry } from "./journalDataProvider.js";
import { getMoods, useJournalMood, saveJournalEntry } from "../mood/moodDataProvider.js";


const contentTarget = document.querySelector(".container");
const eventHub = document.querySelector("article");

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id == "submit") {

    const contentDate = document.querySelector("#journalDate");
    const contentConcepts = document.querySelector("#journalConcepts");
    const contentEntry = document.querySelector("#journalEntry");
    const contentMood = document.querySelector("#journalMood");
   
    if (contentDate.value !== "" && contentConcepts.value !== "" && contentEntry.value !== "" && contentMood.value !== "0") {
      const newJournalEntry = {
        "date": contentDate.value,
        "concepts": contentConcepts.value,
        "entry": contentConcepts.value,
        "mood": contentMood.value,
      }
      saveJournalEntry(newJournalEntry);
    }
  }
});
/*
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id == "delete") {

    const contentDate = document.querySelector("#journalDate");
    const contentConcepts = document.querySelector("#journalConcepts");
    const contentEntry = document.querySelector("#journalEntry");
    const contentMood = document.querySelector("#journalMood");
   
    if (contentDate.value !== "" && contentConcepts.value !== "" && contentEntry.value !== "" && contentMood.value !== "0") {
      const newJournalEntry = {
        "date": contentDate.value,
        "concepts": contentConcepts.value,
        "entry": contentConcepts.value,
        "mood": contentMood.value,
      }
      saveJournalEntry(newJournalEntry);
    }
  }
});
*/

export const JournalFormComponent = () => {
  contentTarget.innerHTML = ` 
  <main class="container">
  <article>
    <h2>Daily Journal</h2>
    <form action="">
      <fieldset>
          <lable for="journalDate">Date of Entry</lable>
          <input type="date" name="journalDate" id="journalDate">
      </fieldset>
      <fieldset>
        <lable for="journalConcepts">Concepts covered</lable>
        <input type="concepts" name="journalConcepts" id="journalConcepts">
    </fieldset>
    <fieldset>
      <lable for="journalEntry">Journal Entry</lable>
      <input type="entry" name="journalEntry" id="journalEntry">
  </fieldset>
  <fieldset>
    <lable for="journalMood">Mood for the day</lable>
    <select name="mood" id="mood">
    ${
      allMoods.map(
          (mood) => {
              return `<option value="${ mood.id }">${ mood.label }</option>`
          }
      ).join("")
  }
    </select>
  </fieldset>
    </form>
    <input type="submit" class="submit" value="Record Journal Entry">
    
    <input type="delete" class="delete" value="Delete Entry">
    <div id="entryLog"></div>
  </article>
  </main>
    `
  contentTarget.innerHTML += JournalFormComponent
};

export const EntryForm = () => {
  getEntries().then(() => {
    render(useJournalEntries())
  })
};

export const EntryMood = () => {
  getMoods().then(() => {
    const moods = useJournalMood();
    JournalFormComponent(moods);
  })
};