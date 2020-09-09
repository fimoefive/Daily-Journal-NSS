/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const addEntryToDom = (array) => {
    const entryElement = document.querySelector("#entryLog");

    let HTMLArray = array.map(singleEntry => {
        return JournalEntryComponent(singleEntry);

    })
    entryElement.innerHTML = HTMLArray.join("");
};



export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            const entryArray = useJournalEntries();
            console.log("entryArray", entryArray);
            addEntryToDom(entryArray);
        })
    /*
        Invoke the component that returns an
        HTML representation of a single entry
    */
    entryLog.innerHTML += JournalEntryComponent(entry);
};


