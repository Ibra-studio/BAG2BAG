import { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";
function ProfilePhotoSelector({ image, setImage }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setImage(file); // envoie le fichier au parent (formulaire)
    }
  }

  function handleClick() {
    fileInputRef.current.click(); // ouvre le sélecteur de fichier
  }

  function handleRemoveImage() {
    setPreviewUrl(null);
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // ← Vider l'input
    }
    // supprime l'image
  }

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-btn-primary rounded-full relative cursor-pointer">
          <LuUser className="text-3xl text-black" />
          <button
            type="button"
            onClick={handleClick}
            className="w-8 h-8 bg-green rounded-full absolute bottom-0 right-0 flex justify-center items-center "
          >
            <LuUpload className="" />
          </button>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-20 h-20 relative rounded-full bg-gray-200 flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-400 hover:border-btn-primary transition"
        >
          <img
            src={previewUrl}
            alt="Preview"
            className="object-cover rounded-full w-full h-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-8 h-8 bg-green rounded-full absolute bottom-0 right-0 flex justify-center items-center "
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;
