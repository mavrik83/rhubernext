import { IconType } from 'react-icons';
import { GiSkills, GiPathDistance, GiQuillInk } from 'react-icons/gi';
import { HiOutlineHome, HiOutlineFire } from 'react-icons/hi';
import { SiAboutdotme } from 'react-icons/si';
import create from 'zustand';

export interface NavState {
    name: string;
    href: string;
    id: string;
    icon: IconType;
    current: boolean;
}

interface NavStateStore {
    navState: NavState[];
    setNavState: (navState: NavState[]) => void;
    toggleCurrent: (id: string, inView: boolean) => void;
}

export const useNavState = create<NavStateStore>((set) => ({
    navState: [
        {
            name: 'Home',
            href: '/',
            id: 'home',
            icon: HiOutlineHome,
            current: false,
        },
        {
            name: 'Latest',
            href: '/',
            id: 'latest',
            icon: HiOutlineFire,
            current: false,
        },
        {
            name: 'About',
            href: '/',
            id: 'about',
            icon: SiAboutdotme,
            current: false,
        },
        {
            name: 'Skills',
            href: '/',
            id: 'skills',
            icon: GiSkills,
            current: false,
        },
        {
            name: 'Experience',
            href: '/',
            id: 'experience',
            icon: GiPathDistance,
            current: false,
        },
        {
            name: 'Writings',
            href: '/writings',
            id: 'writings',
            icon: GiQuillInk,
            current: false,
        },
    ],
    setNavState: (navState) => set({ navState }),
    toggleCurrent: (id, inView) =>
        set((state) => ({
            navState: state.navState.map((item) =>
                item.id === id ? { ...item, current: inView } : item,
            ),
        })),
}));
