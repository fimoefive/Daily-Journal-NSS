
let journalMoods = [];

export const useJournalMood = () => {
    return journalMoods.slice()
};

export const getMoods = () => {
    return fetch("http://localhost:8088/entries") 
        .then(response => response.json())
        .then(parsedMood => {
            
            journalMoods = parsedMood
        })
};