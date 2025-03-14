import React, { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UploadCloudIcon, XIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import axios from "axios";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) => {
  const inputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file); // Debugging
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file) => {
    setImageFile(file);
    setImageLoadingState(true);
    console.log("File uploaded:", file); // Debugging
    setTimeout(() => {
      setUploadedImageUrl(URL.createObjectURL(file));
      setImageLoadingState(false);
    }, 1000);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      console.log("File dropped:", droppedFile); // Debugging
      handleFileUpload(droppedFile);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setUploadedImageUrl("");
    if (inputRef.current) inputRef.current.value = null;
  };

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/doctors/upload-image",
        data
      );
      if (response?.data?.success) {
        console.log("Image uploaded successfully:", response.data.result.url); // Debugging
        setUploadedImageUrl(response.data.result.url);
      } else {
        console.error("Failed to upload image:", response.data); // Debugging
      }
    } catch (error) {
      console.error("Error uploading image:", error); // Debugging
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) {
      console.log("Uploading image to Cloudinary..."); // Debugging
      uploadImageToCloudinary();
    }
  }, [imageFile]);

  return (
    <div
      className={`${
        isCustomStyling ? "" : "max-w-md mx-auto"
      } ${isEditMode ? "opacity-60" : ""}`}
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-40 h-40 z-30 rounded-full border-2 border-dashed ${
          isDragOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
        } flex items-center justify-center overflow-hidden`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!uploadedImageUrl ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode ? "cursor-default" : "cursor-pointer"
            } flex flex-col items-center justify-center`}
          >
            <UploadCloudIcon className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600 text-center">
              Drag & drop or click to upload
            </span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="w-full h-full rounded-full bg-gray-100" />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={uploadedImageUrl}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-full"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-5 right-5 p-1 bg-white border border-gray-900 rounded-lg shadow-sm hover:bg-gray-200 z-50"
              onClick={handleRemoveImage}
          disabled={isEditMode}

            >
              <XIcon className="w-4 h-4 text-red-600" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ProductImageUpload;
