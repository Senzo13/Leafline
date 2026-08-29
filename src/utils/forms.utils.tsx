import { useState } from 'react';

export const useInputFocus = () => {
  const [isEditing, setIsEditing] = useState<Record<string, boolean>>({});

  const handleInputFocus = (key: string) => {
    setIsEditing(prev => ({ ...prev, [key]: true }));
  };

  const handleInputBlur = (key: string) => {
    setIsEditing(prev => ({ ...prev, [key]: false }));
  };

  return { isEditing, handleInputFocus, handleInputBlur };
};