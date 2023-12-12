import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Icons } from "@/components/ui/icons";
import { Upload } from "lucide-react";

interface DropzoneProps {
  myOnChange: React.Dispatch<React.SetStateAction<FileList>>;
  name: string;
  className?: string;
  allowedFileExtensions?: string[];
}

export function Dropzone({
  myOnChange,
  name,
  className,
  allowedFileExtensions,
}: // ...props
DropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState("");

  const [fileInfo, setFileInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const acceptString = allowedFileExtensions
    ? allowedFileExtensions.map((ext) => `.${ext}`).join(",")
    : undefined;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    handleFiles(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (files && files.length > 0) {
      const uploadedFile = files[0];

      // Get the file extension from the uploaded file name
      const uploadedFileExtension = uploadedFile?.name
        ? uploadedFile.name.split(".").pop()?.toLowerCase()
        : undefined;

      // Check if the uploaded file extension is in the allowed extensions array
      if (
        !(
          uploadedFileExtension === undefined ||
          (allowedFileExtensions &&
            allowedFileExtensions.includes(uploadedFileExtension))
        )
      ) {
        setError(
          `Invalid file type. Allowed types: ${
            allowedFileExtensions?.join(", ") || "None"
          }`
        );
        return;
      }

      const fileSizeInKB = Math.round(uploadedFile.size / 1024); // Convert to KB

      const fileList = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreview(fileList[0]);
      myOnChange(files);

      // Display file information
      setFileInfo(`Uploaded file: ${uploadedFile.name} (${fileSizeInKB} KB)`);
      setError(null); // Reset error state
    } else {
      // Handle the case when files is undefined or empty
      console.error("No files");
      setError("No files");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex items-center gap-5">
      <img
        src={preview}
        className={`h-full border border-2 rounded-lg`}
        style={{ maxWidth: 200, maxHeight: 200 }}
      />
      <Card
        className={`grow bg-muted border-dashed border-2 h-100 hover:border-muted-foreground/50 hover:cursor-pointer ${className}`}
        onClick={handleButtonClick}
      >
        <CardContent
          className="flex flex-col items-center justify-center px-2 py-4 text-xs space-y-2"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="flex items-center justify-center text-muted-foreground">
            <span className="font-medium">
              Drag Files to Upload or Click Here
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptString} // Set accepted file types
              onChange={handleFileInputChange}
              className="hidden"
              name={name}
              multiple
            />
          </div>
          {fileInfo && <p className="text-muted-foreground">{fileInfo}</p>}
          {error && <span className="text-red-500">{error}</span>}
        </CardContent>
      </Card>
    </div>
  );
}
