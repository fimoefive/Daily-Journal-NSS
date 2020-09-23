/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
   
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let journalEntries = [];

export const useJournalEntries = () => {
    return journalEntries.slice()
};

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())
        .then(parsedResponse => {
            // What should happen when we finally have the array?
            journalEntries = parsedResponse
        })
};

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
};

 const saveJournalEntry = (entryObj) => {

    // Use `fetch` with the POST method to add your entry to your API
fetch("fill this in with the URL to your API posts resource", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(which_function_goes_here?)  // <-- Get all journal entries
    .then(which_function_goes_here?)  // <-- Broadcast the state change event


 };
