import { useJournalEntries } from "./journalDataProvider"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h3>${journal.date}</h3>
        ${journal.concept}
        ${journal.entry}
        ${journal.mood}
            Display the entry's full text, and the date
            it was entered here.
        </section>
    `
}