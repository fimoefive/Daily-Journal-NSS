import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryObj } from "./JournalEntry.js";
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".container");

const eventHub = document.querySelector("article");

eventHub.addEventListener("journalStateChanged", changeEvent => {
    addEntryToDom(useJournalEntries())
})

eventHub.addEventListener("moodChanged", changeEvent => {
    const moodEntries = useJournalEntries();

    addEntryToDom(useJournalEntries())
})

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            const entryArray = useJournalEntries()
            addEntryToDom(entryArray);
        })     
};
    /*
        Invoke the component that returns an
        HTML representation of a single entry
    */
    // entryElement.innerHTML += JournalEntryComponent();


const addEntryToDom = (entryArray) => {
    const entryElement = document.querySelector("#entryLog");
       
    let HTMLArray = entryArray.map(entry => {
    })
    return JournalEntryObj(journalObj)
   
    entryElement.innerHTML = HTMLArray.join("")
}