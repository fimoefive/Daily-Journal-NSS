import { MoodFilter } from "./MoodFilter.js";

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/

// const contentTarget = document.querySelector("");

const FilterBar = () => {
    render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `
    }

    render()
};


const radioButtonTarget = document.getElementsByName(".filters");
radioButtonTarget.forEach((moodFilter) => {
	moodFilter.addEventListener("click", (clickEvent) => {
		const mood = clickEvent.target.value;
        getJournalEntries()
        .then((filteredEntries) => {
			let filteredMood = filteredEntries.filter(
				(entry) => entry.mood === mood
			)
			contentTarget.innerHTML = "";
			addEntryToDom(filteredMood);
		});
	});
});