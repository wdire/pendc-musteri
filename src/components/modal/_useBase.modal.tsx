'use client';

import React, { useCallback, useState } from 'react';
import RoundContainer from '../layout/common/round-container';

const useBaseModal = () => {
  const [showModal, setShowModal] = useState(false);

  const baseContent = useCallback(
    (content: React.JSX.Element) =>
      showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none bg-black/25"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <RoundContainer
              className="p-8 relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {content}
            </RoundContainer>
          </div>
        </>
      ),
    [showModal],
  );

  return {
    showModal,
    setShowModal,
    baseContent,
  };
};

export default useBaseModal;
