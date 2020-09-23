


const eventHub = document.querySelector("article");

eventHub.addEventListener("change", e => {
    if (e.target.name === "moodFilter") {

    }
})

export const MoodFilter = () => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--happy">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
};