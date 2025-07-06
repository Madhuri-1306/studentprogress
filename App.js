
import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Profile from './components/Profile';
import courses from './data/courses';

function App() {
  const [student, setStudent] = useState({
    name: 'madhu',
    progress: courses.reduce((acc, course) => {
      acc[course.id] = { completedQuizzes: [] };
      return acc;
    }, {}),
  });

  return (
    <div>
      <h1>Student Progress Tracker</h1>
      <Profile student={student} />
      <Dashboard student={student} setStudent={setStudent} />
    </div>
  );
}

export default App;
