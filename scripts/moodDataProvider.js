let journalMoods = [];

export const useMood = () => {
    return journalMoods.slice()
};

export const getMoods = () => {
    return fetch(`http://localhost:3000/entries?_expand=moods`) 
        .then(response => response.json())
        .then(parsedMood => {
            journalMoods = parsedMood
        })
};