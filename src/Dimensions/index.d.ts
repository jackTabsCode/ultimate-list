import type { Dimensions, UDimRect } from "./types";

interface DimensionsImpl {
	/**
	 * Specifies that the size and position of an item is not the same for all of them, and instead uses the callback provided to know what the size and position are.
	 *
	 * See also: [dynamically determined size and position](https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions#dynamically-determined-size-and-position).
	 */
	getter: <T>(callback: (value: T, index: number) => UDimRect) => Dimensions<T>;

	/**
	 * Dictates that all items are of the same size. In a vertical list, this means they are all the same height. In a horizontal list, this means that they are all the same width.
	 *
	 * See also: [consistent, one-dimensional size].(https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions#consistent-one-dimensional-size)
	 */
	consistentSize: <T>(size: number) => Dimensions<T>;

	/**
	 * Dictates that all items are of the same size, represented as a UDim2. The items will then be put one after another until they reach the end of the row/column, and wrap around.
	 *
	 * See also: [consistent, two-dimensonal size](https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions#consistent-two-dimensional-size).
	 */
	consistentUDim2: <T>(udim2: UDim2) => Dimensions<T>;

	/**
	 * Given a consistent set of dimensions, will adding spacing in between each element.
	 *
	 * See also: [spaced dimensions](https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions#spaced-dimensions).
	 */
	withSpacing: <T>(inner: Dimensions<T>, spacing: number) => Dimensions<T>;
}

declare const DimensionsImpl: DimensionsImpl;

export = DimensionsImpl;
