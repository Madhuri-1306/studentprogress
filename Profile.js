import React, { useState } from 'react';
import courses from '../data/courses';
import Quiz from './Quiz';

export default function Profile() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);

  const selectedCourse = courses.find(c => c.id === selectedCourseId);
  const selectedQuiz = selectedCourse?.quizzes[selectedQuizIndex];

  return (
    <div style={{ padding: 20 }}>
      <h2>Courses</h2>
      <div style={{ marginBottom: 20 }}>
        {courses.map(course => (
          <button
            key={course.id}
            onClick={() => {
              setSelectedCourseId(course.id);
              setSelectedQuizIndex(null);
            }}
            style={{ marginRight: 10, padding: '8px 16px' }}
          >
            {course.name}
          </button>
        ))}
      </div>

      {selectedCourse && (
        <div style={{ marginBottom: 20 }}>
          <h3>{selectedCourse.name} Quizzes</h3>
          {selectedCourse.quizzes.map((quiz, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedQuizIndex(idx)}
              style={{ marginRight: 10, padding: '6px 12px' }}
            >
              {quiz.title}
            </button>
          ))}
        </div>
      )}

      {selectedQuiz && <Quiz quiz={selectedQuiz} />}
    </div>
  );
}
