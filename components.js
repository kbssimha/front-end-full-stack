import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      onAddProject(projectName);
      setProjectName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
