import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { changeGameType as changeGameTypeApi } from '@/apis/game';

interface INavProps {
    resetAnimation: () => void;
    handleGameTypeChange: (newGameType: string, newGameTypeId: string) => void;
    initialGameType: string;
}

export const Menu = ({ resetAnimation, handleGameTypeChange, initialGameType }: INavProps) => {
    
    const [gameType, setGameType] = useState<string>(initialGameType);

    useEffect(() => {
        const changeGameType = async () => {
           try {
            const data = await changeGameTypeApi(gameType);
            handleGameTypeChange(gameType, data.game_type_id);
        } catch (error) {
            console.error("gameType error", error);
        }
        };
        changeGameType();
    }, [gameType]);

    const handleOnClickMenu = (type: string) => {
        setGameType(type);
        resetAnimation();
    };

    return (
        <div className="fixed bottom-0 right-0 mb-5 mr-5">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => handleOnClickMenu('love')}>Love</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => handleOnClickMenu('health')}>Health</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => handleOnClickMenu('fortune')}>Fortune</MenubarItem>
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