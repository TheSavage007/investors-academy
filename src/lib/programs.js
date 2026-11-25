export const PROGRAMS = [
  { value: "housing", label: "Housing support" },
  { value: "youth_outreach", label: "Youth outreach & mentorship" },
  { value: "workforce", label: "Job training & placement" },
  { value: "food_pantry", label: "Food pantry" },
  { value: "clothing_closet", label: "Clothing closet" },
  { value: "other", label: "Something else" },
];

export const PROGRAM_LABELS = PROGRAMS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

export const STATUSES = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "enrolled", label: "Enrolled" },
  { value: "closed", label: "Closed" },
];

export const STATUS_LABELS = STATUSES.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});
