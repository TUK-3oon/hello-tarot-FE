import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { changeGameTypeApi } from '@/apis/game';
import { IMenuProps } from '@/types/componentsTypes';

export const Menu = ({ resetAnimation, handleGameTypeChange, initialGameType }: IMenuProps) => {
  const [gameType, setGameType] = useState<string>(initialGameType);
  const changeGameType = async () => {
    try {
      const data = await changeGameTypeApi(gameType);
      handleGameTypeChange(gameType, data.game_type_id);
    } catch (error) {
      console.error('changeGameType error', error);
    }
  };
  const handleClickGameType = (type: string) => {
    setGameType(type);
    resetAnimation();
  };

  useEffect(() => {
    changeGameType();
  }, [gameType]);  

  return (
    <div className="fixed bottom-0 right-0 mb-5 mr-5">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => handleClickGameType('love')}>
              Love
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => handleClickGameType('health')}>
              Health
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => handleClickGameType('fortune')}>
              Fortune
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Info</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={resetAnimation}>Retry</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
