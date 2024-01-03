'use client';

import React, { useCallback, useMemo, useState } from 'react';
import useBaseModal from './_useBase.modal';
import Image from 'next/image';
import { Button } from '../form/button';

const useProductCancelModal = () => {
  const { baseContent, setShowModal } = useBaseModal();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  const openModal = (productId: string) => {
    setShowModal(true);
    setSelectedProductId(productId);
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    setSelectedProductId(null);
  }, [setShowModal, setSelectedProductId]);

  const handleCancelClick = useCallback(() => {
    console.log('Cancel product', selectedProductId);
    closeModal();
  }, [closeModal, selectedProductId]);

  const handleQuitClick = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const modalContent = useMemo(
    () =>
      baseContent(
        <div className="w-[487px]">
          <Image
            src={'/assets/cancel-icon.png'}
            width={55}
            height={55}
            alt="Cancel Icon"
            className="pointer-events-none select-none"
          />
          <div className="mt-5 mb-2 text-lg font-medium text-textColor-title">
            Ürün İptali Talebi
          </div>
          <div>Ürününüzü iptal etmek istediğinize emin misiniz?</div>
          <div className="flex gap-6 mt-6">
            <Button
              className="w-[160px]"
              variant="white"
              onClick={handleQuitClick}
            >
              Vazgeç
            </Button>
            <Button
              className="w-[160px]"
              variant="red"
              onClick={handleCancelClick}
            >
              İptal Et
            </Button>
          </div>
        </div>,
      ),
    [baseContent, handleCancelClick, handleQuitClick],
  );

  return {
    openModal,
    closeModal,
    modalContent,
  };
};

export default useProductCancelModal;
