// @ts-nocheck
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { CredentialsService } from '@services/api/core/credentials.service';
import { DarkTheme, LightTheme } from '@resources/constants/theme';
// @ts-ignore
import { ThemeContextType, ThemeType } from '@types/theme.types';

interface SettingsContextType extends ThemeContextType {
  currentLanguage: string;
  changeLanguage: (lng: string) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(DarkTheme);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const loadSettings = async () => {
      // Load theme
      const storedTheme = await CredentialsService.getTheme();
      if (storedTheme === 'light') {
        setTheme(LightTheme);
      } else {
        setTheme(DarkTheme);
      }

      // Load language
      const storedLanguage = await CredentialsService.getLanguage();
      if (storedLanguage) {
        console.log('Stored language already:', storedLanguage);
        i18n.changeLanguage(storedLanguage);
        setCurrentLanguage(storedLanguage);
      } else {
        console.log('Stored language not found, setting to fr');
        i18n.changeLanguage('fr');
        setCurrentLanguage('fr');
        await CredentialsService.setLanguage('fr');
      }
    };

    loadSettings();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    await CredentialsService.setTheme(
      newTheme === LightTheme ? 'light' : 'dark',
    );
    setTheme(newTheme);
  };

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    await CredentialsService.setLanguage(lng);
    //console.log('Changing language to:', lng);
    setCurrentLanguage(lng);
  };

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, currentLanguage, changeLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
};
