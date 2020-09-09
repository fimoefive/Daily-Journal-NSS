import {JournalFormComponent} from "./form/JournalForm.js";
import {EntryList} from "./journalEntryList.js";
import {useJournalEntries} from "./journalDataProvider.js";

useJournalEntries();
EntryList();
JournalFormComponent();