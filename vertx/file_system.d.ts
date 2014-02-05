/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />

declare module Vertx {
    interface FileProps {
        creationTime: Date;
        lastAccessTime: Date;
        lastModifiedTime: Date;
        isDirectory: boolean;
        isOther: boolean;
        isRegularFile: boolean;
        isSymbolicLink: boolean;
        size: number;
    }

    interface FileSystemProps {
        totalSpace: number;
        unallocatedSpace: number;
        usableSpace: number;
    }

    interface AsyncFile extends ReadStream<AsyncFile>, WriteStream<AsyncFile> {
        close(handler: ResultHandler);
        flush(handler: ResultHandler);
        read(buffer: Buffer, offset: number, position: number, length: number, handler: ResultHandler);
        write(buffer: Buffer, position: number, handler: ResultHandler);
        write(data: Buffer): AsyncFile;
    }

    enum FileFlags {
        OPEN_READ = 1,
        OPEN_WRITE = 2,
        CREATE_NEW = 4
    }

    interface FileSystem {
        chmod(path: string, perms: string, handler: ResultHandler): FileSystem;
        chmod(path: string, perms: string, dir_perms: string, handler: ResultHandler): FileSystem;
        chmodSync(path: string, perms: string, dir_perms?: string): FileSystem;
        copy(from: string, to: string, handler: ResultHandler): FileSystem;
        copy(from: string, to: string, recursive: boolean, handler: ResultHandler): FileSystem;
        copySync(from: string, to: string, recursive?: boolean): FileSystem;
        createFile(path: string, handler?: ResultHandler): FileSystem;
        createFileSync(path: string): FileSystem;
        delete(path: string, handler: ResultHandler): FileSystem;
        delete(path: string, recursive: boolean, handler: ResultHandler): FileSystem;
        deleteSync(path: string, recursive?: boolean): FileSystem;
        exists(path: string, handler: ResultHandler): FileSystem;
        existsSync(path: string): FileSystem;
        fsProps(path: string, handler?: ResultHandler): FileSystem;
        fsPropsSync(path: string): FileSystemProps;
        link(link: string, existing: string, handler?: ResultHandler): FileSystem;
        linkSync(link: string, existing: string): FileSystem;
        lProps(path: string, handler?: ResultHandler): FileSystem;
        lPropsSync(path: string): FileProps;
        mkDir(path: string, handler: ResultHandler): FileSystem;
        mkDir(path: string, createParents: boolean, handler: ResultHandler): FileSystem;
        mkDir(path: string, permString: string, handler: ResultHandler): FileSystem;
        mkDir(path: string, createParents: boolean, permString: string, handler: ResultHandler): FileSystem;
        mkDirSync(path: string, createParents: boolean): FileSystem;
        mkDirSync(path: string, permString: string): FileSystem;
        mkDirSync(path: string, createParents: boolean, permString: string): FileSystem;
        move(from: string, to: string, handler: ResultHandler): FileSystem;
        moveSync(from: string, to: string): FileSystem;
        open(path: string, handler: ResultHandler): FileSystem;
        open(path: string, openFlags: FileFlags, handler: ResultHandler): FileSystem;
        open(path: string, openFlags: FileFlags, flush: boolean, handler: ResultHandler): FileSystem;
        open(path: string, flush: boolean, permissions: string, handler: ResultHandler): FileSystem;
        open(path: string, permissions: string, handler: ResultHandler): FileSystem;
        open(path: string, flush: boolean, handler: ResultHandler): FileSystem;
        open(path: string, openFlags: FileFlags, flush: boolean, permissions: string, handler: ResultHandler): FileSystem;
        openSync(path: string): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags, flush: boolean): AsyncFile;
        openSync(path: string, flush: boolean, permissions: string): AsyncFile;
        openSync(path: string, permissions: string): AsyncFile;
        openSync(path: string, flush: boolean): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags, flush: boolean, permissions: string): AsyncFile;
        props(path: string, handler: ResultHandler): FileSystem;
        propsSync(path: string): FileProps;
        readDir(path: string, handler: ResultHandler): FileSystem;
        readDir(path: string, filter: string, handler: ResultHandler): FileSystem;
        readDirSync(path: string, filter: string): FileSystemProps;
        readFile(path: string, handler: ResultHandler): FileSystem;
        readFileSync(path: string): Buffer;
        readSymlink(link: string, handler: ResultHandler): FileSystem;
        readSymlinkSync(link: string): string;
        symlink(link: string, existing: string, handler: ResultHandler): FileSystem;
        symlinkSync(link: string, existing: string): FileSystem;
        truncate(path: string, len: number, handler: ResultHandler): FileSystem;
        truncateSync(path: string, len: number): FileSystem;
        unlink(link: string, handler: ResultHandler): FileSystem;
        unlinkSync(link: string): FileSystem;
        writeFile(path: string, data: Buffer, handler: ResultHandler): FileSystem;
        writeFile(path: string, data: string, handler: ResultHandler): FileSystem;
        writeFileSync(path: string, data: string): FileSystem;
        writeFileSync(path: string, data: Buffer): FileSystem;
    }
}

declare module "vertx/file_system" {
    var __filesystem__: Vertx.FileSystem;
    export = __filesystem__;
}

