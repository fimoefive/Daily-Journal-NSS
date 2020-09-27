import { getEntries, useJournalEntries, saveJournalEntry } from "./journalDataProvider.js";
import { getMoods, useMood } from "./moodDataProvider.js";


const contentTarget = document.querySelector(".container");
const moodTarget = document.querySelector('#mood');
const eventHub = document.querySelector("article");


eventHub.addEventListener("click", (clickEvent) => {
    let contentDate = document.querySelector("#journalDate");
    // let date = Date.now()
    let contentConcepts = document.querySelector("#journalConcepts");
    let contentEntry = document.querySelector("#journalEntry");
    let contentMood = document.querySelector("#journalMood");
    // if (contentDate.value !== "" && contentConcepts.value !== "" && contentEntry.value !== "" && contentMood.value !== "0") {
      
      if (clickEvent.target.id == "submit") {
      const newSavedEntry = {
        date: contentDate.value,
        concepts: contentConcepts.value,
        entry: contentConcepts.value,
        mood: parseInt(contentMood.value)
      }
      contentEntry.value = "",
      contentConcepts.value = "",
      contentDate.value = "",
      contentMood.value = ""
      saveJournalEntry(newSavedEntry);
      } 
});

export const EntryMood = () => {
  getMoods()
  .then(() => {
    const moods = useMood();
    renderForm(useJournalEntries())
  })
};

 export const renderForm = (allMoods) => {
  const entryElement = document.querySelector("#entryLog"); 
  entryElement.innerHTML = ` 
  <main class="container">
  <article>
    <h2>Daily Journal</h2>
    <form action="">
      <fieldset>
          <lable for="journalDate">Date of Entry</lable>
          <input type="date" name="journalDate" id="journalDate" class"journalEntryInput">
      </fieldset>
      <fieldset>
        <lable for="journalConcepts">Concepts covered</lable>
        <input type="text" name="journalConcepts" id="journalConcepts" class"journalEntryInput">
    </fieldset>
    <fieldset>
      <lable for="journalEntry">Journal Entry</lable>
      <input type="entry" name="journalEntry" id="journalEntry" class"journalEntryInput">
  </fieldset>
  <fieldset>
    <lable for="journalMood">Mood for the day</lable>
    <select id="mood" class"journalEntryInput">
    ${
      allMoods.map(
          (mood) => {
              return `<option value="${mood.id}">${mood.label}</option>`
          }
      ).join("")
      }
    </select>
  </fieldset>
    <button type="button" class="submit" value="Record Journal Entry">Record Entry</button>
    
    <button type="button" class="delete" value="Delete Entry">Delete Entry</button>

    <button type="button" class="edit" value="Edit Entry">Edit Entry</button>

    <div class="filters"></div>
    <div id="entryLog"></div>
    </form>
  </article>
  </main> `
};