/// <reference types="node"/>

declare namespace XdThumbnailExtractor {
  interface Options {
    /**
     Thumbnail file basename, default to be the same basename of XD file.
     @default false
     */
    readonly filename: string;

    /**
     Thumbnail file path, default to be the same path as XD file.
     @default false
     */
    readonly filepath: string;
  }

  function extractThumbnail(file: string,
    options?: Options): void;
  
  function extractThumbnailToStream(readableStream: NodeJS.ReadableStream,
    writableStream: NodeJS.WritableStream): void;
  
  function extractThumbnailToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer>;
  
}

export = XdThumbnailExtractor;
