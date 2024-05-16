import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface INavProps {
    resetAnimation: () => void;
}

export const Menu = ({ resetAnimation }: INavProps) => {
    const navigate = useNavigate();
    const [gameType, setGameType] = useState('')
    const handleGameType = () => {
        resetAnimation()
    }
    return (
        <div className="fixed bottom-0 right-0 mb-5 mr-5" >
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={handleGameType}>Love</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handleGameType}>Health</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={handleGameType}>fortune</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => navigate('/info')}>Info</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={resetAnimation}>Retry</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div >
    )
}
