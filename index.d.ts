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
}

declare function extractThumbnail(file: string,
  options?: XdThumbnailExtractor.Options): Promise<any>;
