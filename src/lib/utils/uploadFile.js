import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import sharp from "sharp";

/**
 * Uploads a file and returns the file name of the uploaded file
 * @param {File} file - File object to upload
 * @returns {Promise<String>} - Returns the new file name
 */
export async function uploadfile(file) {
	const uploadPath = path.join(process.cwd(), "uploads/");

	// If folder does not exists, create the folder before uploading the file
	if (!fs.existsSync(uploadPath)) {
		fs.mkdirSync(uploadPath);
	}

	const filePath = `${dayjs().format("YYYYMMDDHHmmss")}.webp`;

	try {
		await sharp(await file.arrayBuffer())
			// .resize({ height: 250, width: 300 })
			.toFile(uploadPath + filePath);
	} catch (_) {
		_;
	}

	return filePath;
}
