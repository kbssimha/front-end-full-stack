import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (name) => {
    setProjects([...projects, { id: Date.now(), name, tasks: [] }]);
  };

  const addTask = (projectId, taskText) => {
    setProjects(projects.map(project => 
      project.id === projectId
        ? { ...project, tasks: [...project.tasks, { id: Date.now(), text: taskText, completed: false }] }
        : project
    ));
  };

  const toggleTask = (projectId, taskId) => {
    setProjects(projects.map(project => 
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map(task => 
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          }
        : project
    ));
  };

  return (
    <div className="App">
      <h1>Project Management App</h1>
      <ProjectForm onAddProject={addProject} />
      <ProjectList projects={projects} onAddTask={addTask} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
