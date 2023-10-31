import { h } from 'preact';
import Heading from './Heading';
import Logo from '../assets/hkbnes_logo.png';
import DarkLogo from '../assets/hkbnes_dark.png';
import { useDarkMode } from '../context';

export default function LinkedLogo() {
  const { currentMode } = useDarkMode();

  return (
    <Heading size="lg">
      <a className="transition-colors flex items-center space-x-4 dark:text-white hover:text-blue-500" href="/">
        <div className="w-64">
          {currentMode === 'dark' ? (
            <img src={DarkLogo} alt="" srcset="" className="w-40 h-10 object-contain" />
          ) : (
            <img src={Logo} alt="" srcset="" className="w-40 h-10 object-contain" />
          )}
        </div>
      </a>
    </Heading>
  );
}
