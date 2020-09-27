/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (journalObj) => {
    return `
    <section id="entry--${journalObj.id}" class="journalEntry">
        <p>${new Date(journalObj.date).toLocaleDateString("en-US")}</p>
        <p>${journalObj.concept}</p>
        <p>${journalObj.entry}</p>
        <p>Mood: ${journalObj.mood.label}</p>
    </section>
    `
};