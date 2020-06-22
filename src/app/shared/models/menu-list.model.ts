import { MenuListType } from './enums/menu-list-type.enum';
import { SectionLevel } from './enums/section-level.enum';


export class MenuList {
    id?: number;
    items: Position[];
    name: string;
    sections: MenuList[];
    opened?: boolean;
    color?: string;
    type?: MenuListType;
    level?: SectionLevel;
}

export class Position {
    id?: number;
    name: string;
    sale: number;
    opened?: boolean;
    type?: MenuListType;
}
