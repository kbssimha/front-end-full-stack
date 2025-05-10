import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function ProjectList({ projects, onAddTask, onToggleTask }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h2>{project.name}</h2>
          <TaskForm onAddTask={(task) => onAddTask(project.id, task)} />
          <TaskList tasks={project.tasks} onToggle={(taskId) => onToggleTask(project.id, taskId)} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
