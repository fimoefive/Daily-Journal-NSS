eventHub.addEventListener("click", (Clickvent) => {
	if (clickEvent.target.id == "delete") {

    const contentDate = document.querySelector("#journalDate");
    const contentConcepts = document.querySelector("#journalConcepts");
    const contentEntry = document.querySelector("#journalEntry");
    const contentMood = document.querySelector("#journalMood");

		const entryID = clickEvent.target.id.split("--")[1];
		API.deleteJournalEntry(entryID)
			.then(() => API.getJournalEntries())
			.then((entries) => {
			  contentTarget.innerHTML = "";
				addEntryToDom(entries);
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
  
});
*/

${
  allMoods.map(
      (mood) => {
          return `<option value="${ mood.id }">${ mood.label }</option>`
      }).join("")
 }