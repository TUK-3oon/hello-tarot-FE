import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

interface INavProps {
    resetAnimation: () => void;
    onGameTypeChange: (newGameType: string) => void;
    initialGameType: string;
}

export const Menu = ({ resetAnimation, onGameTypeChange, initialGameType }: INavProps) => {
    const navigate = useNavigate();
    const [gameType, setGameType] = useState(initialGameType);

    useEffect(() => {
        const changeGameType = async () => {
            try {
                const res = await axios.post("/game/rule/", {
                    game_type_name: gameType
                });
                console.log(res.data);
            } catch (error) {
                console.error("gameType error", error);
            }
        };
        changeGameType();
    }, [gameType]);

    const handleGameType = (type: string) => {
        setGameType(type);
        onGameTypeChange(type);
    };

    return (
        <div className="fixed bottom-0 right-0 mb-5 mr-5">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => handleGameType('love')}>Love</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => handleGameType('health')}>Health</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => handleGameType('fortune')}>Fortune</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => navigate('/info')}>Info</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={resetAnimation}>Retry</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};
