import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImSpinner8 } from "react-icons/im";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const Modal = ({ show, setShow }: ModalProps) => {
  const [loadingLogout, setLoadingLogout] = React.useState(false);
  const [loadingDelete, setLoadingDelete] = React.useState(false);

  const handleLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      setShow(false);
      setLoadingLogout(false);
      // Perform logout actions here (e.g., clear auth state, redirect, etc.)
    }, 2000);
  };

  const handleDeleteAccount = () => {
    setLoadingDelete(true);
    setTimeout(() => {
      setShow(false);
      setLoadingDelete(false);
      // Perform delete actions here
    }, 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#1D2123]/80 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-[10000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <motion.div
            className="bg-[#2C2F33] p-6 m-4 rounded-2xl shadow-lg text-center max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-white">Are you sure?</h2>
            <p className="text-gray-400 mt-2">
              Do you want to logout or permanently delete your account?
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <motion.button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loadingDelete}
                onClick={handleDeleteAccount}
              >
                {loadingDelete && <ImSpinner8 className="animate-spin mr-2" />}
                Delete Account
              </motion.button>
              <motion.button
                className="bg-[#609EAF] text-white px-4 py-2 rounded-lg hover:bg-[#609EAF] flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loadingLogout}
                onClick={handleLogout}
              >
                {loadingLogout && <ImSpinner8 className="animate-spin mr-2" />}
                Logout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
