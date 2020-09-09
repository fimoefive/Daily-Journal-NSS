/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (journalObj) => {
    return `
        <section id="entry--${journalObj.id}" class="journalEntry">
        ${new Date(journalObj.date).toLocaleDateString("en-US")}
        ${journalObj.concept}
        ${journalObj.entry}
        ${journalObj.mood}
            Display the entry's full text, and the date
            it was entered here.
        </section>
    `
};