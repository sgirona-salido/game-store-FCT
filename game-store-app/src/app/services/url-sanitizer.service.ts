import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class UrlSanitizerService {
  constructor(private sanitizer: DomSanitizer) {
  }

  getYouTubeEmbedUrl(link: string): SafeUrl {
    const videoId = link.split('v=')[1];
    if (videoId) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }

    const shortLinkParts = link.split('/');
    const shortVideoId = shortLinkParts[shortLinkParts.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${shortVideoId}`);
  }
}
