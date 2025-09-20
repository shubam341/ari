import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Type, X, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();

  const handleAlbum = () => alert("Choose from Album");
  const handleCamera = () => alert("Open Camera");
  const handleText = () => alert("Create Text Post");

  return (
    <div className="relative min-h-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Header */}
      <div className="absolute top-12 right-4 left-4 z-20 flex justify-between items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Bottom Options */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-10 z-20">
        <div className="flex flex-col items-center space-y-6">
          {/* Album */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleAlbum}
              className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-700"
            >
              <Image className="w-8 h-8 text-white" />
            </button>
            <span className="text-white text-sm">Choose from Album</span>
          </div>

          {/* Camera */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleCamera}
              className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-700"
            >
              <Camera className="w-8 h-8 text-white" />
            </button>
            <span className="text-white text-sm">Camera</span>
            <span className="text-xs text-gray-400 mt-1">Capture & Go Live</span>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleText}
              className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 hover:bg-gray-700"
            >
              <Type className="w-8 h-8 text-white" />
            </button>
            <span className="text-white text-sm">Text</span>
          </div>

          {/* Cancel Button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 px-8 py-3 rounded-full text-white font-medium hover:bg-gray-600 mt-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
