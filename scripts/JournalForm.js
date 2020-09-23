import { getEntries, useJournalEntries } from "./journalDataProvider";


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
        ""
      }
    }

  }

})




export const JournalFormComponent = () => {
  contentTarget.innerHTML = ` <article>
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
    <select name="mood" id="journalMood">
    <option value="happy">Happy</option>
    <option value="sad">Sad</option>
    <option value="mellow">Mellow</option>
    <option value="tired">Tired</option>
    <option value="excited">Excited</option>
    <option value="accomplished">Accomplished</option>
    </select>
  </fieldset>
    </form>
    <input type="submit" class="submit" value="Record Journal Entry">
  </article>
  
    <article>
    `
  document.getElementById("form").innerHTML += journalForm
};


export const EntryForm = () => {
  getEntries().then(() => {
    render(useJournalEntries())
  })
};