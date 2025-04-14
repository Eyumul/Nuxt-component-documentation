export function blobToFile (theBlob: Blob, fileName:string): File {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
      
    return theBlob as File;
}

export function checkFileLimit(messages: Ref, fileLimit: number, files: File[], focused: boolean, uploadedFileCount: number, invalidFileLimitMessage: string) {
    if (isFileLimitExceeded(fileLimit, files, focused, uploadedFileCount)) {
        messages.value == null ? (messages.value = []) : messages;
        messages.value.push(
            invalidFileLimitMessage.replace("{0}", fileLimit.toString())
        );
    }
}

export function formatSize(bytes: number) {
    if (bytes === 0) {
        return "0 B";
    }
    
    let k = 1000,
    dm = 1,
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function getFileExtension(file: File) {
    return "." + file.name.split(".").pop();
}

export function getMimeType(buffer: ArrayBuffer, fallback?: string) {
    const byteArray = new Uint8Array(buffer).subarray(0, 4);
    let header = "";
    for (let i = 0; i < byteArray.length; i++) {
        header += byteArray[i].toString(16);
    }
    switch (header) {
        case "89504e47":
            return "image/png";
        case "ffd8ffe0":
            case "ffd8ffe1":
                case "ffd8ffe2":
                    case "ffd8ffe3":
                        case "ffd8ffe8":
                            return "image/jpeg";
        default:
            return fallback;
    }
}

export function getTypeClass(fileType: string) {
    return fileType.substring(0, fileType.indexOf("/"));
}

export function isFileLimitExceeded(fileLimit: number, files: File[], focused: boolean, uploadedFileCount: number) {
    if (
        fileLimit &&
        fileLimit <= files.length + uploadedFileCount &&
        focused
    ) {
        focused = false;
    }
    
    return (
        fileLimit &&
        fileLimit < files.length + uploadedFileCount
    );
}

export function isFileSelected (file: File, files: File[]): boolean {
    if (files && files.length) {
      for (let sFile of files) {
        if (
          sFile.name + sFile.type + sFile.size ===
          file.name + file.type + file.size
        )
          return true;
      }
    }
    return false;
}

export function isFileTypeValid (file: File, accept: string): boolean {
    let acceptableTypes = accept.split(",").map((type) => type.trim());
    
    for (let type of acceptableTypes) {
        let acceptable = isWildcard(type)
        ? getTypeClass(file.type) === getTypeClass(type)
        : file.type == type ||
        getFileExtension(file).toLowerCase() === type.toLowerCase();
        
        if (acceptable) {
            return true;
        }
    }
  
    return false;
}

export function isImage(file: File) {
    return /^image\//.test(file.type);
}
  
export function isWildcard(fileType: string) {
    return fileType.indexOf("*") !== -1;
}

export function onMessageClose(index: number, messages: Ref) {
    messages.value.splice(index, 1);
}

export function validate (file: File, accept: string, messages: Ref, maxFileSize: number, invalidFileTypeMessage: string, invalidFileSizeMessage: string): boolean {
    if (accept && !isFileTypeValid(file, accept)) {
        messages.value == null ? (messages.value = []) : messages;
        messages.value.push(
            invalidFileTypeMessage
                .replace("{0}", file.name)
                .replace("{1}", `${accept}`)
        );
    
        return false;
    }
    
    if (maxFileSize && file.size > maxFileSize) {
        messages.value == null ? (messages.value = []) : messages;
        messages.value.push(
            invalidFileSizeMessage
                .replace("{0}", file.name)
                .replace("{1}", formatSize(maxFileSize))             
        );

        return false;
    }
    
    return true;
}