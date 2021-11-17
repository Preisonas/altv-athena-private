import { MARKER_TYPE } from '../enums/MarkerTypes';
import { Vector3 } from './Vector';

export interface Marker {
    /**
     * Position of the Object in a 3D space.
     * @type {Vector3}
     * @memberof IObject
     */
    pos: Vector3;

    /**
     * The Marker Type Associated with this Marker
     * @type {number}
     * @memberof Marker
     */
    type: MARKER_TYPE | number;

    /**
     * The color of the marker. All values are 0 - 255.
     * @type {{ r: number; g: number; b: number; a: number }}
     * @memberof Marker
     */
    color: { r: number; g: number; b: number; a: number };

    /**
     * The scale of this marker.
     * @type {Vector3}
     * @memberof Marker
     */
    scale?: Vector3;

    /**
     * The max distance to render this marker.
     * @type {number}
     * @memberof Marker
     */
    maxDistance?: number;

    /**
     * The unique identifier for this marker.
     * @type {string}
     * @memberof Marker
     */
    uid?: string;

    /**
     * The dimension to display this marker in.
     * @type {number}
     * @memberof Marker
     */
    dimension?: number;

    /**
     * Should the marker be slightly animated.
     * @type {boolean}
     * @memberof Marker
     */
    bobUpAndDown?: boolean;

    /**
     * Should the marker face the player's camera.
     * @type {boolean}
     * @memberof Marker
     */
    faceCamera?: boolean;

    /**
     * Should the marker rotate to face the player.
     * @type {boolean}
     * @memberof Marker
     */
    rotate?: boolean;
}
