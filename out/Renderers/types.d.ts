export type Renderer<T> =
	| {
			type: "byState";
			callback: (value: T) => React.ReactNode;
	  }
	| {
			type: "byBinding";
			callback: (binding: React.Binding<T | undefined>) => React.ReactNode;
	  };
