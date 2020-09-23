import {JournalFormComponent} from "./form/JournalForm.js";
import {EntryList} from "./journalEntryList.js";
import {useJournalEntries} from "./journalDataProvider.js";
import { EntryForm, EntryMood } from "./JournalForm.js";

useJournalEntries();
EntryList();
JournalFormComponent();
EntryForm();
EntryMood();
// console.log("main")