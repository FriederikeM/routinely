import { useState, useEffect } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";

/**
 * gets products array from LocalStorage and updates allRoutineItems useState with array
 * @type {function}
 * @returns {array<object>}
 */

export default function useRoutine() {
  const [allRoutineItems, setAllRoutineItems] = useState([]);
  useEffect(() => {
    const routine = getDataFromLocalStorage();
    setAllRoutineItems(routine);
  }, []);
  return allRoutineItems;
}
