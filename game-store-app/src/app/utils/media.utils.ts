export class MediaUtils {
  static isYouTubeLink(source: string): boolean {
    return source.includes('youtube.com') || source.includes('youtu.be');
  }

  static isImage(source: string): boolean {
    return source.endsWith('.jpg') || source.endsWith('.jpeg') || source.endsWith('.png') || source.endsWith('.gif') || source.endsWith('.webp');
  }
}
