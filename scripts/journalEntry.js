import { useJournalEntries } from "./journalDataProvider"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h3>${journal.date}</h3>
        <h3>${journal.concept}</h3>
        <h3>${journal.entry}</h3>
        <h3>${journal.mood}</h3>
            Display the entry's full text, and the date
            it was entered here.
        </section>
    `
};