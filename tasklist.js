import React from 'react';

function TaskList({ tasks, onToggle }) {
  return (
    <ul>
      {tasks.map(task => (
        <li
          key={task.id}
          onClick={() => onToggle(task.id)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
