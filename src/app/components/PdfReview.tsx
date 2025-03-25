'use client';
import React, { useState } from 'react';

interface PdfPreviewProps {
  pdfUrl: string; // The URL of the PDF to display
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ pdfUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center mt-8">
      {/* PDF Preview */}
      <button onClick={openModal}>Forstørr</button>
      <iframe
        className="cursor-pointer border-2 border-gray-300"
        src={`${pdfUrl}#view=FitH`}
        width="400"
        height="400"
        onClick={openModal}
        title="PDF Preview"
      />

      {/* Modal for Enlarged PDF */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <span
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ×
            </span>
            <iframe
              className="w-full h-full"
              src={`${pdfUrl}#view=FitH`}
              title="Enlarged PDF"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
