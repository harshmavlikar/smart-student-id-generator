import { useState } from 'react';
import Form from './components/Form';
import IDCard from './components/IDCard';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [template, setTemplate] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Student ID Generator</h1>
      
      <div className="flex justify-center mb-6">
        <select
          value={template}
          onChange={(e) => setTemplate(Number(e.target.value))}
          className="p-2 border rounded"
        >
          <option value={1}>Template 1</option>
          <option value={2}>Template 2</option>
        </select>
      </div>

      {!studentData ? (
        <Form onSubmit={(data) => setStudentData(data)} />
      ) : (
        <IDCard data={studentData} template={template} />
      )}
    </div>
  );
}

export default App;