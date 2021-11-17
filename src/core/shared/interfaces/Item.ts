import { EQUIPMENT_TYPE } from '../enums/EquipmentType';
import { ITEM_TYPE } from '../enums/ItemTypes';

export interface Item {
    /**
     * The name of this item.
     * @type {string}
     * @memberof Item
     */
    name: string;

    /**
     * A unique identifier for this item.
     * @type {string}
     * @memberof Item
     */
    uuid?: string;

    /**
     * A description for this item.
     * @type {string}
     * @memberof Item
     */
    description: string;

    /**
     * A client-side icon name.
     * They are specified and created by you.
     * @type {string}
     * @memberof Item
     */
    icon: string;

    /**
     * The quantity of this type of item.
     * Used for stacks.
     * @type {number}
     * @memberof Item
     */
    quantity: number;

    /**
     * If this value is defined it will be used as the maximum stack size for the item.
     * @type {number}
     * @memberof Item
     */
    maxStack?: number;

    /**
     * A bitwise enum representing functionality of the item.
     * ie. 'ITEM_TYPE.CAN_EQUIP | ITEM_TYPE.IS_TOOLBAR'
     *
     * Multiple of these can be used to create unique items.
     * @type {ITEM_TYPE}
     * @memberof Item
     */
    behavior: ITEM_TYPE;

    /**
     * Where this item should sit in the player's inventory.
     * Basically the position of the item on-screen.
     * @type {number}
     * @memberof Item
     */
    slot?: number;

    /**
     * A unique hash for this item.
     * @type {string}
     * @memberof Item
     */
    hash?: string;

    /**
     * Only supply this when it is a clothing component.
     * Should only supply one and not combine.
     * @type {EQUIPMENT_TYPE}
     * @memberof Item
     */
    equipment?: EQUIPMENT_TYPE;

    /**
     * Any custom data associated with this item.
     * Useful for item effects and such.
     * @type {{ [key: string]: any }}
     * @memberof Item
     */
    data: { [key: string]: any };
}

export interface ItemSpecial extends Item {
    dataName: string;
    dataIndex: number;
    isInventory: boolean;
    isEquipment: boolean;
    isToolbar: boolean;
}

export interface DroppedItem {
    item: Item;
    position: { x: number; y: number; z: number };
    gridSpace: number;
    dimension: number;
}
