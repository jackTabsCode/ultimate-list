/** The set of [dimensions](https://kampfkarren.github.io/ultimate-list/core-concepts/dimensions) that represent how items are positioned and sized. For all of these, T represents the type of the items you are displaying. */
export type Dimensions<T> =
	| {
			type: "getter";
			callback: (value: T, index: number) => UDimRect;
	  }
	| {
			type: "consistentSize";
			size: number;
	  }
	| {
			type: "consistentUDim2";
			udim2: UDim2;
	  }
	| {
			type: "spaced";
			spacing: number;
			inner: Dimensions<T>;
	  };

/** Used for [dimension getters](https://kampfkarren.github.io/ultimate-list/api-reference#getter). */
export interface UDimRect {
	size: UDim2;
	position: UDim2;
}
