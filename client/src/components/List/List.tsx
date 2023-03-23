import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Task from "../Task/Task";
import styles from "./List.module.css";
import { BsChevronDown, BsChevronBarUp } from "react-icons/bs";

interface ListProps {
  isButtonThere: boolean;
  count: number;
  todolist: any;
  setTodolist: any;
  isUpdating: boolean;
  setIsUpdating: any;
  task: string;
  setTask: any;
  taskId: string;
  setTaskId: any;
  color: number;
  title: string;
}

const List = ({
  setIsUpdating,
  setTask,
  setTaskId,
  todolist,
  color,
  isButtonThere,
  count,
  title,
  setTodolist,
}: ListProps) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => {
    // setIsListOpen(!isListOpen);
  };

  const handleUpdateTask = (_id: any, task: any) => {
    setIsUpdating(true);
    setTask(task);
    setTaskId(_id);
    // console.log(task, taskId);
  };

  const taskItems = todolist;

  return (
    <>
      <div
        className={styles.container}
        style={{
          width: isListOpen ? undefined : "max-content",
          backgroundColor: `hsl(${color}, 100%, 90%)`,
        }}
      >
        <div className={styles.header}>
          {isButtonThere && (
            <Button
              icon={isListOpen ? BsChevronDown : BsChevronBarUp}
              color={color}
              onClick={toggleList}
            >
              {count}
            </Button>
          )}
          <div
            className={styles.title}
            style={{
              backgroundColor: `hsl(${color}, 45%, 63%)`,
            }}
          >
            {title}
          </div>
        </div>
        <div
          className={styles.list_items}
          style={isListOpen ? { display: "block" } : { display: "none" }}
        >
          {Array.isArray(todolist) &&
            taskItems.map((item: any) => {
              return (
                <Task
                  key={item._id}
                  taskId={item._id}
                  setTaskId={setTaskId}
                  task={item.task}
                  setTodolist={setTodolist}
                  handleUpdateTask={() => {
                    handleUpdateTask(item._id, item.task);
                  }}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default List;
