import {  PutObjectCommand, PutObjectCommandInput, S3Client } from "@aws-sdk/client-s3";
import { Controller, Route,Post, UploadedFile } from "tsoa";
import configsS3 from "../utils/s3";

const s3= new S3Client({
    region:configsS3.region,
    credentials:{
        accessKeyId:configsS3.keyId,
        secretAccessKey:configsS3.keySecret,
    }
});



@Route('v2/upload')
export class UploadController extends Controller {

    @Post("/")
    public async uploadFile(
        @UploadedFile() file: Express.Multer.File
    ): Promise<string> {
        if (!file) {
            throw new Error('No file uploaded.');
        }

        const fileName = Date.now().toString()+(file.originalname);
        const uploadParams: PutObjectCommandInput = {
            Bucket: "my-testing-monny",
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
            // Removed ACL since it's not supported by the bucket
        };

        try {
            await s3.send(new PutObjectCommand(uploadParams));
            return 'File uploaded successfully!';
        } catch (err) {
            console.error('Error uploading file:', err);
            throw new Error('Error uploading file.');
        }
    }
}