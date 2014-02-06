// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
        close(handler: ExceptionHandler);
        flush(handler: ExceptionHandler);
        read(buffer: Buffer, offset: number, position: number, length: number, handler: ResultHandler<Buffer>);
        write(buffer: Buffer, position: number, handler: ExceptionHandler);
        write(data: Buffer): AsyncFile;
    }

    enum FileFlags {
        OPEN_READ = 1,
        OPEN_WRITE = 2,
        CREATE_NEW = 4
    }

    interface FileSystem {
        chmod(path: string, perms: string, handler: ExceptionHandler): FileSystem;
        chmod(path: string, perms: string, dir_perms: string, handler: ExceptionHandler): FileSystem;
        chmodSync(path: string, perms: string, dir_perms?: string): FileSystem;
        chown(path: string, user: string, handler: ExceptionHandler): FileSystem;
        chown(path: string, user: string, group: string, handler: ExceptionHandler): FileSystem;
        chownSync(path: string, user: string, group?: string): FileSystem;
        copy(from: string, to: string, handler: ExceptionHandler): FileSystem;
        copy(from: string, to: string, recursive: boolean, handler: ExceptionHandler): FileSystem;
        copySync(from: string, to: string, recursive?: boolean): FileSystem;
        createFile(path: string, handler?: ExceptionHandler): FileSystem;
        createFileSync(path: string): FileSystem;
        delete(path: string, handler: ExceptionHandler): FileSystem;
        delete(path: string, recursive: boolean, handler: ExceptionHandler): FileSystem;
        deleteSync(path: string, recursive?: boolean): FileSystem;
        exists(path: string, handler: ResultHandler<boolean>): FileSystem;
        existsSync(path: string): boolean;
        fsProps(path: string, handler?: ResultHandler<FileSystemProps>): FileSystem;
        fsPropsSync(path: string): FileSystemProps;
        link(link: string, existing: string, handler?: ExceptionHandler): FileSystem;
        linkSync(link: string, existing: string): FileSystem;
        lProps(path: string, handler?: ResultHandler<FileProps>): FileSystem;
        lPropsSync(path: string): FileProps;
        mkDir(path: string, handler: ExceptionHandler): FileSystem;
        mkDir(path: string, createParents: boolean, handler: ExceptionHandler): FileSystem;
        mkDir(path: string, permString: string, handler: ExceptionHandler): FileSystem;
        mkDir(path: string, createParents: boolean, permString: string, handler: ExceptionHandler): FileSystem;
        mkDirSync(path: string, createParents: boolean): FileSystem;
        mkDirSync(path: string, permString: string): FileSystem;
        mkDirSync(path: string, createParents: boolean, permString: string): FileSystem;
        move(from: string, to: string, handler: ExceptionHandler): FileSystem;
        moveSync(from: string, to: string): FileSystem;
        open(path: string, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, openFlags: FileFlags, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, openFlags: FileFlags, flush: boolean, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, flush: boolean, permissions: string, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, permissions: string, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, flush: boolean, handler: ResultHandler<AsyncFile>): FileSystem;
        open(path: string, openFlags: FileFlags, flush: boolean, permissions: string, handler: ResultHandler<AsyncFile>): FileSystem;
        openSync(path: string): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags, flush: boolean): AsyncFile;
        openSync(path: string, flush: boolean, permissions: string): AsyncFile;
        openSync(path: string, permissions: string): AsyncFile;
        openSync(path: string, flush: boolean): AsyncFile;
        openSync(path: string, openSyncFlags: FileFlags, flush: boolean, permissions: string): AsyncFile;
        props(path: string, handler: ResultHandler<FileProps>): FileSystem;
        propsSync(path: string): FileProps;
        readDir(path: string, handler: ResultHandler<FileSystemProps>): FileSystem;
        readDir(path: string, filter: string, handler: ResultHandler<FileSystemProps>): FileSystem;
        readDirSync(path: string, filter: string): FileSystemProps;
        readFile(path: string, handler: ResultHandler<Buffer>): FileSystem;
        readFileSync(path: string): Buffer;
        readSymlink(link: string, handler: ResultHandler<string>): FileSystem;
        readSymlinkSync(link: string): string;
        symlink(link: string, existing: string, handler: ExceptionHandler): FileSystem;
        symlinkSync(link: string, existing: string): FileSystem;
        truncate(path: string, len: number, handler: ExceptionHandler): FileSystem;
        truncateSync(path: string, len: number): FileSystem;
        unlink(link: string, handler: ExceptionHandler): FileSystem;
        unlinkSync(link: string): FileSystem;
        writeFile(path: string, data: Buffer, handler: ExceptionHandler): FileSystem;
        writeFile(path: string, data: string, handler: ExceptionHandler): FileSystem;
        writeFileSync(path: string, data: string): FileSystem;
        writeFileSync(path: string, data: Buffer): FileSystem;
    }
}

declare module "vertx/file_system" {
    var __filesystem__: Vertx.FileSystem;
    export = __filesystem__;
}

