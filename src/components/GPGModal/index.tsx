import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

interface GPGModalProps {
  gpgContent: string | null;
  onClose: () => void;
  onDownload: () => void;
}

const GPGModal: React.FC<GPGModalProps> = ({ gpgContent, onClose, onDownload }) => {
  return (
    <dialog id="gpg_modal" className="modal">
      <div className="modal-box bg-transparent rounded-lg p-11 w-full max-w-2xl max-h-[75vh] overflow-auto backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold italic">
            ❯ curl https://l.ummit.dev/info/UmmIt.gpg
          </h3>
          <div className="flex gap-2">
            <button
              onClick={onDownload}
              className="bg-transparent border border-gray-700/100 rounded-lg p-2 tooltip tooltip-top duration-300 hover:scale-105 hover:shadow-primary/30 transform hover:border-primary/50"
              data-tip="Download GPG key"
            >
              <FiDownload className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="bg-transparent border border-gray-700/100 rounded-lg p-2 tooltip tooltip-top duration-300 hover:scale-105 hover:shadow-primary/30 transform hover:border-primary/50"
              data-tip="Close"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>
        </div>

        <pre className="whitespace-pre-wrap font-mono text-sm bg-transparent p-4 rounded-lg overflow-auto max-w-full break-words">
          {gpgContent || "Loading GPG key..."}
        </pre>
      </div>
    </dialog>
  );
};

export default GPGModal; 