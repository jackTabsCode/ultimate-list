import type {
	DataSource,
	DataSourceCursor,
	MutableDataSourceMethods,
} from "./types";

/** The set of data sources that represent what items we are displaying. For all of these, T represents the type of the items you are displaying. */
interface DataSources {
	/** Represents a data source based on an immutable array. See also [the array data source](https://kampfkarren.github.io/ultimate-list/core-concepts/data-sources#arrays). */
	array: <T>(array: T[]) => DataSource<T>;

	/** Represents a data source based on an abstract mutable structure. See also [mutable sources])(https://kampfkarren.github.io/ultimate-list/core-concepts/data-sources#mutable-sources), which includes a full breakdown on what methods are accepted. */
	mutableSource: <T>(methods: MutableDataSourceMethods<T>) => DataSource<T>;

	utilities: Utilities;
}

declare const DataSources: DataSources;

export = DataSources;

interface Utilities {
	/** Creates a wrapper around a simple getter function to make it produce the expected `DataSourceCursor` of `get`. [See also the documentation in mutable sources](https://kampfkarren.github.io/ultimate-list/core-concepts/data-sources#get-startindex-number---datasourcecursort). */
	createGetSimpleCursor: <T>(
		get: (index: number) => T,
		getLength: () => number,
	) => (startIndex: number) => DataSourceCursor<T>;
}
