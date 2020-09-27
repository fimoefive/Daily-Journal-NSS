import { MoodFilter } from "./MoodFilter.js";
import { useMood, getMoods} from "../mood/moodDataProvider.js";

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters");
const eventHub = document.querySelector("article");

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "moodFilter") {
        const allMoods = useMood()
        const moodObj = allMoods.find(mood => mood.id === parseInt(changeEvent.target.value))
        
        const moodEvent = new CustomEvent("moodChosen", {
            detail: {
                moodSelected: moodObj.id
            }
        })
        eventHub.dispatchEvent(moodEvent)
    }
})

export const FilterBar = () => {
	getMoods()
	.then(() => {
		const moodOptions = useMood()
		render(moodOptions)
	})
};

const render = (moods) => {
    contentTarget.innerHTML = `${MoodFilter(moods)}`
};


// const radioButtonTarget = document.getElementsByName(".filters");
// radioButtonTarget.forEach((moodFilter) => {
// 	moodFilter.addEventListener("click", (clickEvent) => {
// 		const mood = clickEvent.target.value;
//         getJournalEntries()
//         .then((filteredEntries) => {
// 			let filteredMood = filteredEntries.filter(
// 				(entry) => entry.mood === mood
// 			)
// 			contentTarget.innerHTML = "";
// 			addEntryToDom(filteredMood);
// 		});
// 	});
// });