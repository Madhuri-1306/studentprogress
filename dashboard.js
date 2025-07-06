import React from 'react';
import courses from '../data/courses';

export default function Dashboard({ student, setStudent }) {
  const handleCompleteQuiz = (courseId, quizId) => {
    setStudent(prev => {
      const courseProgress = prev.progress[courseId];
      if (!courseProgress.completedQuizzes.includes(quizId)) {
        return {
          ...prev,
          progress: {
            ...prev.progress,
            [courseId]: {
              completedQuizzes: [...courseProgress.completedQuizzes, quizId],
            },
          },
        };
      }
      return prev;
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2>Dashboard</h2>
      {courses.map(course => (
        <div key={course.id} style={{ marginBottom: 20 }}>
          <h3>{course.name}</h3>
          {[1, 2, 3].map(quizId => {
            const completed = student.progress[course.id]?.completedQuizzes.includes(quizId);
            return (
              <button
                key={quizId}
                onClick={() => handleCompleteQuiz(course.id, quizId)}
                disabled={completed}
                style={{
                  marginRight: 10,
                  padding: '6px 12px',
                  backgroundColor: completed ? 'green' : 'gray',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: completed ? 'default' : 'pointer',
                }}
              >
                Quiz {quizId}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
