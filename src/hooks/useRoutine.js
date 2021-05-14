import { useState, useEffect } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";

export default function useRoutine() {
  const [allRoutineItems, setAllRoutineItems] = useState([]);
  useEffect(() => {
    const routine = getDataFromLocalStorage();
    setAllRoutineItems(routine);
  }, []);
  return allRoutineItems;
}
