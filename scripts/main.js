// import { JournalFormComponent } from "./JournalForm.js";
import {EntryList} from "./journalEntryList.js";
import {useJournalEntries} from "./journalDataProvider.js";
import { renderForm } from "./JournalForm.js";
import { EntryMood } from "./JournalForm.js";

useJournalEntries();
EntryList();
// JournalFormComponent();
renderForm();
 EntryMood();
// console.log("main")