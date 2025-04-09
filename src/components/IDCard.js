import { QRCodeCanvas } from 'qrcode.react';
import { toPng } from 'html-to-image';
import { useEffect, useState } from 'react';

export default function IDCard({ data, template }) {
  const [qrData, setQrData] = useState('');

  useEffect(() => {
    // Compress data for QR code
    const compressedData = {
      n: data.name,          // Shortened keys
      r: data.rollNumber,
      c: data.class,
      d: data.division,
      a: data.allergies,
      rn: data.rackNumber,
      br: data.busRoute
    };
    setQrData(JSON.stringify(compressedData));
  }, [data]);

  const downloadCard = () => {
    const card = document.getElementById('id-card');
    toPng(card)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${data.name}-id-card.png`;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="id-card"
        className={`w-80 p-6 rounded-xl shadow-lg border-2 ${
          template === 1 
            ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300'
            : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">CDAC Mumbai</h2>
          <p className="text-xs">STUDENT IDENTITY CARD</p>
        </div>

        {/* Student Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow">
            {data.photo ? (
              <img src={data.photo} alt="Student" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span>Photo</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold">{data.name}</h3>
            <p className="text-sm text-gray-600">ID: {data.rollNumber}</p>
            <p className="text-sm text-gray-600">{data.class}-{data.division}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          {data.rackNumber && (
            <div><span className="font-medium">Rack:</span> {data.rackNumber}</div>
          )}
          <div><span className="font-medium">Bus:</span> {data.busRoute}</div>
          {data.allergies.length > 0 && (
            <div className="col-span-2">
              <span className="font-medium">Allergies:</span> {data.allergies.join(', ')}
            </div>
          )}
        </div>

        {/* QR Code with all data (compressed) */}
        <div className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-200">
          <QRCodeCanvas
            value={qrData}
            size={150}
            level="H"
            includeMargin={true}
          />
          <p className="text-xs mt-1 text-gray-500">Scan for details</p>
        </div>

        <div className="text-center text-xs mt-4 text-gray-500">
          Valid 2024-2025 | Issued by CDAC Mumbai
        </div>
      </div>

      <button
        onClick={downloadCard}
        className={`mt-4 ${
          template === 1 ? 'bg-blue-600' : 'bg-green-600'
        } text-white py-2 px-6 rounded-lg font-medium shadow`}
      >
        Download ID Card
      </button>
    </div>
  );
}