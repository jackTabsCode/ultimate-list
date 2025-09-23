export type DataSource<T> =
	| {
			type: "array";
			array: T[];
	  }
	| {
			type: "mutableSource";
			methods: MutableDataSourceMethods<T>;
	  };

export interface MutableDataSourceMethods<T> {
	/** Get a cursor to the nth element */
	get: (startIndex: number) => DataSourceCursor<T> | undefined;

	/** Get the total length of the data source */
	length: () => number;

	/**
	 * Is given a callback to run when the data source changes.
	 * Returns a destructor to disconnect the function.
	 */
	bindToChanged: (callback: () => void) => () => void;

	/** Get the final element (defaults to get(length())) */
	back: (() => T | undefined) | undefined;

	/**
	 * Gets the elements from startIndex to and including endIndex.
	 * Defaults to using the `after` in your cursors.
	 */
	getbyRange: ((startIndex: number, endIndex: number) => T[]) | undefined;
}

export interface DataSourceCursor<T> {
	before: () => DataSourceCursor<T> | undefined;
	value: T;
	after: () => DataSourceCursor<T> | undefined;
}
