import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */


// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".container");
const entryElement = document.querySelector("#entryLog");
const eventHub = document.querySelector("article");

eventHub.addEventListener("journalStateChanged", changeEvent => {
    render(useJournalEntries())
})

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            const entryArray = useJournalEntries();
            // console.log("entryArray", entryArray);
            addEntryToDom(entryArray);
        })
    /*
        Invoke the component that returns an
        HTML representation of a single entry
    */
    // entryElement.innerHTML += JournalEntryComponent();
};

export const addEntryToDom = (array) => {
    
    let HTMLArray = array.map(singleEntry => {
        return JournalEntryComponent(singleEntry);
    })
    entryElement.innerHTML += HTMLArray.join("");
};