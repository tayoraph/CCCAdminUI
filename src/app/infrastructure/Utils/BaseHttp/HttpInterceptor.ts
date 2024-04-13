import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, retry } from 'rxjs/operators';
import { EncryptionService } from 'src/app/core/base/utils/encryption';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  }
}



@Injectable()
export class EncryptionInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private enc:EncryptionService) {
  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isValidRequestForInterceptor(httpRequest.url)) { //exempting some endpointfrom encryption
    httpRequest = httpRequest.clone({
      //encrypting request going to server
      body: { param: this.enc.envEnc(JSON.stringify(httpRequest.body)) },
    });

    return next.handle(httpRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // decrypting response from server
          let decryptedResponse = JSON.parse(
            this.enc.envDecrpt(event.body.param)
          );
          event = event.clone({ body: decryptedResponse });
        }
        return event;
      })
    );
  } else {
    return next.handle(httpRequest);
  }
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    let positionIndicator: string = 'ccc/';
    let position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      let destination: string = requestUrl.substr(position + positionIndicator.length);
      for (let address of environment.excemptedUrlArray) {
        if (new RegExp(address).test(destination)) {
          return false;
        }
      }
    }
    return true;
  }

}

