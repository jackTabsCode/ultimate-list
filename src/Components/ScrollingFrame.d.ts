import type React from "@rbxts/react";
import type { DataSource } from "../DataSources/types";
import type { Dimensions } from "../Dimensions/types";
import type { Renderer } from "../Renderers/types";

interface Props<T> {
	/** The [data source](https://kampfkarren.github.io/ultimate-list/core-concepts/data-sources) we are creating a list for. */
	dataSource: DataSource<T>;

	/** The [dimensions](https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions) that will determine how big an item is, and where it is placed. */
	dimensions: Dimensions<T>;

	renderer: Renderer<T>;

	/** "y" for a vertical list, "x" for a horizontal list. */
	direction: "x" | "y";

	/** A tag to apply onto the ScrollingFrame. Useful for using the [Roblox UI styling system](https://create.roblox.com/docs/ui/styling). */
	tag?: string;

	/** All fields here will be applied on top of the ScrollingFrame. See also [styling with native](https://kampfkarren.github.io/ultimate-list/guides/styling#native-property). */
	native?: Omit<
		React.InstanceProps<ScrollingFrame>,
		"Size" | "CanvasSize" | "Change" | "Tag" | "ref"
	> & {
		Change?: Omit<
			React.InstanceChangeEvent<ScrollingFrame>,
			"AbsoluteWindowSize" | "CanvasPosition"
		>;
	};

	/** A function that will return a unique key for a given item. By default UltimateList will use the index, but you will want to specify this if your list is not append-only. */
	getKey?: (value: T, index: number) => string;

	/** A ref to the underlying ScrollingFrame. Note that the actual contents are stored in a separate frame that you cannot access. */
	scrollingFrameRef?: React.Ref<ScrollingFrame>;

	/** A callback that will run when the [window size of the ScrollingFrame changes](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame#AbsoluteWindowSize). */
	onAbsoluteWindowSizeChanged?: (newWindowSize: Vector2) => void;

	/** A callback that will run when the ScrollingFrame changes CanvasPosition. The number provided is the position of the dominant axis--so in a vertical list, it represents `CanvasPosition.Y`. */
	onScrollAxisChanged?: (newScrollAxis: number) => void;
}

declare const ScrollingFrame: <T>(props: Props<T>) => React.Element;

export = ScrollingFrame;
