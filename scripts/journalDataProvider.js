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

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
};

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())
        .then(parsedEntry => {
            
            journalEntries = parsedEntry
        })
};

 export const saveJournalEntry = (entryObj) => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries)
    .then(dispatchStateChangeEvent)

 };