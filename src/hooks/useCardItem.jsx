import { useEffect, useState } from 'react';
import { useAddForms } from '../store/store';
import { nanoid } from 'nanoid';

export const useCardItem = () => {
  const forms = useAddForms((state) => state.forms);
  const addForms = useAddForms((state) => state.addForm);
  const updateForm = useAddForms((state) => state.updateForm);
  const deleteForm = useAddForms((state) => state.deleteForm);

  const [cardItem, setCardItem] = useState({
    id: nanoid(),
    title: '',
    variants: [{ id: nanoid(), answer: '', check: false }],
  });
  const handleAddCard = () => {
    addForms(cardItem);
    setCardItem({
      id: nanoid(),
      title: '',
      variants: [{ id: nanoid(), answer: '', check: false }],
    });
  };
  const handleAddVariant = (e) => {
    e.preventDefault();
    setCardItem((prev) => {
      return {
        ...prev,
        variants: [
          ...prev.variants,
          { id: nanoid(), answer: '', check: false },
        ],
      };
    });
  };
  const handleDeleteVariant = (e, itemID) => {
    e.preventDefault();
    setCardItem((prev) => {
      return {
        ...prev,
        variants: prev.variants.filter((i) => i.id !== itemID),
      };
    });
  };
  const handleTrueVariant = (e, itemID) => {
    setCardItem((prev) => {
      prev.variants.find((i) => i.id === itemID).check = e.target.checked;
      return {
        ...prev,
        variants: prev.variants,
      };
    });
  };
  const handleEditTrueVariant = (value, itemID) => {
    setCardItem((prev) => {
      prev.variants.find((i) => i.id === itemID).check = value;
      return {
        ...prev,
        variants: prev.variants,
      };
    });
  };
  const handleUpdateTitle = (e) => {
    setCardItem((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  const handleUpdateVariant = (e, itemID) => {
    setCardItem((prev) => {
      prev.variants.find((i) => i.id === itemID).answer = e.target.value;
      return {
        ...prev,
        variants: prev.variants,
      };
    });
  };
  const handleEditVariant = (value, itemID) => {
    setCardItem((prev) => {
      prev.variants.find((i) => i.id === itemID).answer = value;
      return {
        ...prev,
        variants: prev.variants,
      };
    });
  };
  const handleClearCard = () => {
    setCardItem({
      id: nanoid(),
      title: '',
      variants: [{ id: nanoid(), answer: '', check: false }],
    });
  };

  const [openSettings, setOpenSetings] = useState(false);

  const handleCloseSettings = (e) => {
    e.preventDefault();
    handleClearCard();
    setOpenSetings(false);
  };
  const handleSaveSettings = (el, valid) => {
    // e.preventDefault()
    if (valid) {
      updateForm(el, cardItem);
      handleClearCard();
      setOpenSetings(false);
    }
  };
  const handleDeleteForm = (e, id) => {
    e.preventDefault();
    deleteForm(id);
  };
  const handleOpenSettings = (e, id) => {
    e.preventDefault();
    setOpenSetings(id);
  };

  useEffect(() => {
    if (openSettings) {
      setCardItem(forms.find((form) => form.id === openSettings));
    }
  }, [openSettings]);

  const [count, setCount] = useState(0);

  return {
    forms,
    cardItem,
    onClearCard: handleClearCard,
    onAddCard: handleAddCard,
    onAddVariant: handleAddVariant,
    onDeleteVariant: handleDeleteVariant,
    onTrueVariant: handleTrueVariant,
    onEditTrueVariant: handleEditTrueVariant,
    onUpdateTitle: handleUpdateTitle,
    onUpdateVariant: handleUpdateVariant,
    onEditVariant: handleEditVariant,
    openSettings,
    handleCloseSettings,
    handleSaveSettings,
    handleDeleteForm,
    handleOpenSettings,
    count,
    setCount,
  };
};
