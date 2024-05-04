import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../Utils/config';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  path: any = config.CLOUDINARY_URL;


  constructor(private http: HttpClient) { }


  upload(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mjrpqh1p');

    return this.http.post(this.path, formData);
    

  }

}
