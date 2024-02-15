import { useRef, useState } from "react";
import UploadIcon from "./UploadIcon";
import Modal from "./Modal";
import CloseIcon from "./CloseIcon";
import EditModal from "./EditModal";

const EditActivityImg = ({ editImage, setEditImage }) => {
  const avatarUrl2 = useRef("https://placehold.co/366x208");
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://placehold.co/366x208");
  const updateAvatar = (editImage) => {
    setAvatarUrl(editImage);
  };

  const handleClickClose = () => {
    setAvatarUrl("https://placehold.co/366x208");
    console.log("อัพเดตรูปภาพสำเร็จ");
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative border-2 border-black rounded-lg">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-[366px] h-[208px] rounded-md " //Size border
        />
        <button
          className="flex absolute top-4 ml-auto  right-4  w-fit p-[.35rem] rounded-full bg-white hover:bg-gray-700 border border-black"
          title="Change photo"
          onClick={handleClickClose}
        >
          <CloseIcon />
        </button>
        <button
          className="flex absolute bottom-3 left-0 right-4 ml-auto w-fit p-[.35rem] rounded-lg bg-white hover:bg-[#ddd] border border-black"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <UploadIcon />
          <p className="text-black">Upload Image</p>
        </button>
      </div>

      {modalOpen && (
        <EditModal
          editImage={editImage}
          setEditImage={setEditImage}
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          size="activity"
        />
      )}
    </div>
  );
};

export default EditActivityImg;
