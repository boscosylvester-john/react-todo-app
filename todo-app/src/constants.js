export const PAGE_TYPES = {
  TASKS: 'TASKS',
  MY_DAY: 'MY DAY',
  MISSED_TASKS: 'MISSED TASKS',
  FAVORITES: 'FAVORITES',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

export const IS_FAVORITE = {
  TRUE: 'TRUE',
  FALSE: 'FALSE'
};

export const MODAL_ACTION_TYPE = {
  NEW: 'NEW',
  UPDATE: 'UPDATE',
  NONE: 'NONE'
};

export const DUMMY_CURRENT_TASK = {
  id: 0,
  subject: '',
  description: '',
  dueDate: '',
  reminderDate: '',
  status: PAGE_TYPES.PENDING,
  isFavorite: 'FALSE',
  createdOn: ''
};

export const SORTING_OPTIONS = {
  DEFAULT: 'Default',
  DUE_DATE: 'By Due Date',
  REMINDER_DATE: 'By Reminder Date'
};

export const SORTING_OPTIONS_ARRAY = [
  SORTING_OPTIONS.DEFAULT,
  SORTING_OPTIONS.DUE_DATE,
  SORTING_OPTIONS.REMINDER_DATE
];
