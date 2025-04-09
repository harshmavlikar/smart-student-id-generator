import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    class: '10',
    division: 'A',
    allergies: [],
    photo: null,
    rackNumber: '',
    busRoute: 'Route 1'
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAllergyChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, allergies: options });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Student Registration</h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Roll Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number*</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Class & Division */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class*</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {[9, 10, 11, 12].map((grade) => (
                <option key={grade} value={grade}>Class {grade}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Division*</label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {['A', 'B', 'C', 'D'].map((div) => (
                <option key={div} value={div}>Div {div}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Allergies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
          <select
            multiple
            name="allergies"
            value={formData.allergies}
            onChange={handleAllergyChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-auto"
          >
            {['Peanuts', 'Dairy', 'Gluten', 'Eggs', 'Shellfish'].map((allergy) => (
              <option key={allergy} value={allergy}>{allergy}</option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {photoPreview && (
            <div className="mt-2 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
              <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* Rack Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rack Number</label>
          <input
            type="text"
            name="rackNumber"
            value={formData.rackNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Bus Route */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bus Route</label>
          <select
            name="busRoute"
            value={formData.busRoute}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {['Route 1', 'Route 2', 'Route 3', 'Route 4', 'No Transport'].map((route) => (
              <option key={route} value={route}>{route}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors shadow-md"
        >
          Generate ID Card
        </button>
      </div>
    </form>
  );
}