import type React from "@rbxts/react";
import type { Renderer } from "./types";

/** The set of [renderers](https://kampfkarren.github.io/ultimate-list/core-concepts/renderers) that dictate how an item turns into a React component to display. For all of these, T represents the type of the items you are displaying. */
declare const Renderers: {
	/**
	 * Takes a callback that turns a direct value into a React node. When the user scrolls, we will trigger a re-render and call that callback again. When an item is no longer visible, it is unmounted--elements are not reused for different items.
	 *
	 * See also ["State" section on the renderers documentation](https://kampfkarren.github.io/ultimate-list/core-concepts/renderers#state).
	 */
	byState: <T>(callback: (value: T) => React.ReactNode) => Renderer<T>;

	/**
	 * Takes a callback that provides a React node based on the provided binding. When the user scrolls, these elements will be re-used, and the binding will be updated directly. This means as the user scrolls, there will be zero React re-renders. The value you get will be nil if there is no item occupying that space.
	 *
	 * See also ["Bindings" section on the renderers documentation](https://kampfkarren.github.io/ultimate-list/core-concepts/renderers#bindings).
	 */
	byBinding: <T>(
		callback: (binding: React.Binding<T | undefined>) => React.ReactNode,
	) => Renderer<T>;
};

export = Renderers;
