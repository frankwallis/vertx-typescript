declare module Vertx {
    interface MultiMap {
        new (original: MultiMap): MultiMap;

        add(name: string, value: string): MultiMap;
        clear(): MultiMap;
        contains(name: string): boolean;
        forEach(callback: (name: string, value: string) => void);
        get(name: string): string;
        getAll(name: string): Array<string>;
        isEmpty(): boolean;
        names(): Array<string>;
        remove(name: string): MultiMap;
        set(name: string, value: string): MultiMap;
        setMap(map: MultiMap): MultiMap;
        size(): number;
    }
}

declare module "vertx/multi_map" {
    export interface MultiMap extends Vertx.MultiMap { }
}