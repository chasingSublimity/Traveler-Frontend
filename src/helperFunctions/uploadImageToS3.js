import axios from 'axios';

export default function uploadImageToS3(files) {
	// grab file
	const file = files[0];

	// handle undefined filetypes (files that the browser doesn't recognize)
	if (file === undefined) {
		return new Error('Invalid File Type');
	}

	// make get request to sever, which returns a url
	return axios.get(`https://still-coast-98142.herokuapp.com/awsUrl?filename=${file.name}&filetype=${file.type}`)
		.then(result => {
			const signedUrl = result.data.signedUrl;
			const options = {
				headers: {
					'Content-Type': file.type
				}
			};
			// make put request to returned url, which adds the image to the S3 bucket
			return axios.put(signedUrl, file, options);
		});
}