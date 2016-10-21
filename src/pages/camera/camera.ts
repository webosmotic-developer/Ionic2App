import { Component } from '@angular/core';

import { Camera, PhotoViewer } from 'ionic-native';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage {

    public imageUrl:string;

    constructor() {

    }

    fnTakePhoto() {
        Camera.getPicture({
            quality: 75,
            destinationType: Camera.DestinationType.NATIVE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: true
        }).then((imageData) => {
            this.imageUrl = imageData;
            this.fnPhotoViewer();
        }, (err) => {
            console.log(err);
        });
    }

    fnViewImage() {
        Camera.getPicture({
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true
        }).then(file_uri => {
            this.imageUrl = file_uri;
            this.fnPhotoViewer();
        }, err => console.log(err));
    }

    fnPhotoViewer(){
        PhotoViewer.show(this.imageUrl, '', {share: false});
    }
}
