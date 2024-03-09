
import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js'; 

@Injectable({
  providedIn: "root",
})
export class EncryptionService {
    private envkey = CryptoJS.enc.Utf8.parse("WE78@(lK%4%5ER|/}^PpiW+-!)#2*fT@");
    private envIv = CryptoJS.enc.Utf8.parse("Z!1+Y%P0()^5%fD+");

     // encrypt env file 
     // Methods for the encrypt and decrypt Using AES
     envEnc(text:any): any {
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), this.envkey, {
            keySize: 128 / 8,
            iv: this.envIv,
            mode: CryptoJS.mode.CBC,
           padding: CryptoJS.pad.Pkcs7
        });
        return  encrypted.toString();
      //  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
    }
    // decrypt env 
    envDecrpt(decString:string) {
        var decrypted = CryptoJS.AES.decrypt(decString, this.envkey, {
            keySize: 128 / 8,
            iv: this.envIv,
            mode: CryptoJS.mode.CBC,
           padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
        //return CryptoJS.enc.Base64.parse(decString).toString(CryptoJS.enc.Utf8);
        }
}
