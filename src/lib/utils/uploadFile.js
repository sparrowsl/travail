import path from "path";
import fs from "fs";
import { nanoid } from "nanoid";

const uploadPath = path.join(process.cwd(), "uploads");

/**
 * Uploads a file and returns the file name of the uploaded file
 * @param {File} file - File object to upload
 * @returns {Promise<String>} - Returns the new file name
 */
export async function uploadfile(file) {
	// If folder does not exists, create the folder before uploading the file
	if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);

	const filePath = path.join(uploadPath, `${nanoid()}.${file?.type.split("/")[1]}`);
	fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

	return String(filePath.split("/").at(-1));
}
