import "./WeekDayCard.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useRef, useState } from "react";
import getProductById from "../../utility/getProductById.js";
import { createPortal } from "react-dom";

export default function WeekDayCard({ name, data, products }) {
  let mornings;
  if (name === "Monday") {
    mornings = data.filter((monday) => {
      return monday.days[0].morning;
    });
  } else if (name === "Tuesday") {
    mornings = data.filter((tuesday) => {
      return tuesday.days[1].morning;
    });
  } else if (name === "Wednesday") {
    mornings = data.filter((wednesday) => {
      return wednesday.days[2].morning;
    });
  } else if (name === "Thursday") {
    mornings = data.filter((thursday) => {
      return thursday.days[3].morning;
    });
  } else if (name === "Friday") {
    mornings = data.filter((friday) => {
      return friday.days[4].morning;
    });
  } else if (name === "Saturday") {
    mornings = data.filter((saturday) => {
      return saturday.days[5].morning;
    });
  } else if (name === "Sunday") {
    mornings = data.filter((sunday) => {
      return sunday.days[6].morning;
    });
  }
  const [morningProductNames, setMorningProductNames] = useState(mornings);

  let evenings;
  if (name === "Monday") {
    evenings = data.filter((monday) => {
      return monday.days[0].evening;
    });
  } else if (name === "Tuesday") {
    evenings = data.filter((tuesday) => {
      return tuesday.days[1].evening;
    });
  } else if (name === "Wednesday") {
    evenings = data.filter((wednesday) => {
      return wednesday.days[2].evening;
    });
  } else if (name === "Thursday") {
    evenings = data.filter((thursday) => {
      return thursday.days[3].evening;
    });
  } else if (name === "Friday") {
    evenings = data.filter((friday) => {
      return friday.days[4].evening;
    });
  } else if (name === "Saturday") {
    evenings = data.filter((saturday) => {
      return saturday.days[5].evening;
    });
  } else if (name === "Sunday") {
    evenings = data.filter((sunday) => {
      return sunday.days[6].evening;
    });
  }
  const [eveningProductNames, setEveningProductNames] = useState(evenings);

  function handleOnDragEndMorning(result) {
    if (!result.destination) return;

    const items = Array.from(morningProductNames);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMorningProductNames(items);
  }

  function handleOnDragEndEvening(result) {
    if (!result.destination) return;

    const items = Array.from(eveningProductNames);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEveningProductNames(items);
  }

  //custom hook to avoid box from displacing itself when grabbed
  const useDraggableInPortal = () => {
    const self = useRef({}).current;

    useEffect(() => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.pointerEvents = "none";
      div.style.top = "0";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.listStyle = "none";
      div.style.fontSize = "0.8rem";
      self.elt = div;
      document.body.appendChild(div);
      return () => {
        document.body.removeChild(div);
      };
    }, [self]);

    return (render) => (provided, ...args) => {
      const element = render(provided, ...args);
      if (provided.draggableProps.style.position === "fixed") {
        return createPortal(element, self.elt);
      }
      return element;
    };
  };

  const renderDraggable = useDraggableInPortal();

  return (
    <div className="WeekDayCard">
      <div className="weekday">
        <h4 className="weekday-headline">{name}</h4>
        <div className="weekday-box">
          <div className="weekday-box-header">
            <HiSun className="sun" />
            <FaMoon />
          </div>
          <section className="morning">
            <DragDropContext onDragEnd={handleOnDragEndMorning}>
              <Droppable droppableId="product-names">
                {(provided) => (
                  <ul
                    className="product-name-list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {morningProductNames.map((morning, index) => {
                      return (
                        <Draggable
                          key={morning.id}
                          draggableId={
                            getProductById(morning.id, products).name
                          }
                          index={index}
                        >
                          {renderDraggable((provided) => (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="product-name-left"
                            >
                              {getProductById(morning.id, products).name}
                            </li>
                          ))}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </section>
          <section className="evening">
            <DragDropContext onDragEnd={handleOnDragEndEvening}>
              <Droppable droppableId="product-names">
                {(provided) => (
                  <ul
                    className="product-name-list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {eveningProductNames.map((evening, index) => {
                      return (
                        <Draggable
                          key={evening.id}
                          draggableId={
                            getProductById(evening.id, products).name
                          }
                          index={index}
                        >
                          {renderDraggable((provided) => (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="product-name-right"
                            >
                              {getProductById(evening.id, products).name}
                            </li>
                          ))}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </section>
          <div className="see-details-button-wrapper">
            <NavLink
              to={`/weekly-routine/${name}`}
              className="see-details-button-link"
            >
              <button className="see-details-button">See Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
