/*
 *   Journal data provider for Daily Journal application
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */ 
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let journalEntries = [];

export const useJournalEntries = () => {
    return journalEntries.slice()
};

const dispatchStateChangeEvent = () => {
    const journalStateChanged = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalStateChanged)
};

export const getEntries = () => {
    return fetch(`http://localhost:3000/entries`) 
        .then(response => response.json())
        .then(parsedEntry => {
            
            journalEntries = parsedEntry
        })
};

 export const saveJournalEntry = (entryObj) => {
    
    return fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries)
    .then(dispatchStateChangeEvent)

 };