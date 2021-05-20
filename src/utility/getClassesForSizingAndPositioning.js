export function getClassForAddedPackaging(packaging, name) {
  let classForPackaging;
  if (
    packaging === "not glass bottle" ||
    name === "Glycolic Acid 7% Toning Solution"
  ) {
    classForPackaging = "smaller-added-image";
  } else if (
    name === "100% Niacinamide Powder" ||
    name === "100% L-Ascorbic Acid Powder"
  ) {
    classForPackaging = "added-powder-image";
  } else {
    classForPackaging = "";
  }
  return classForPackaging;
}

export function getClassForListedPackaging(packaging) {
  let classForPackaging;
  if (packaging === "not glass bottle") {
    classForPackaging = "smaller-image";
  } else if (packaging === "glass container") {
    classForPackaging = "powder";
  } else {
    classForPackaging = "";
  }
  return classForPackaging;
}

export function getClassForWeekdayCheckboxAlignment(name) {
  let classForWeekdayCheckboxAlignment;
  if (name === "Friday") {
    classForWeekdayCheckboxAlignment = "friday-right";
  } else if (name === "Saturday") {
    classForWeekdayCheckboxAlignment = "saturday-right";
  } else if (name === "Sunday") {
    classForWeekdayCheckboxAlignment = "sunday-right";
  } else if (
    name === "Monday" ||
    name === "Tuesday" ||
    name === "Wendesday" ||
    name === "Thursday"
  ) {
    classForWeekdayCheckboxAlignment = "left";
  } else {
    classForWeekdayCheckboxAlignment = "";
  }

  return classForWeekdayCheckboxAlignment;
}
