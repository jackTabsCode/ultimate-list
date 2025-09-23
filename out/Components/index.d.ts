import type { ScrollingFrame as UltimateScrollingFrame } from "./ScrollingFrame";

interface Components {
	ScrollingFrame: typeof UltimateScrollingFrame;
}

declare const Components: Components;

export = Components;
