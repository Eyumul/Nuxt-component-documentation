import type { Prop, TableData, TableHeader } from "~/types/components";

export const FILE_UPLOAD_USAGE_TABLE_HEADER: TableHeader[] = [
  {
    text: "Props",
    value: "name"
  },
  {
    text: "Description",
    value: "description"
  }
];

export const INVALID_FILE_SIZE_MESSAGE =
  "{0}: Invalid file size, file size should be smaller than {1}.";
export const INVALID_FILE_TYPE_MESSAGE =
  "{0}: Invalid file type, allowed file types: {1}.";
export const INVALID_FILE_LIMIT_MESSAGE =
  "Maximum number of files exceeded, limit is {0} at most.";

export const SINGLE_FILE_UPLOAD_CODE = `\n<script setup lang="ts">
  const image = ref(null)
</script>

<template>
  <img v-if="image" :src="image" />
  <FileUploadSingle v-else model-value="" uploaded="" name="image" @upload="val => image = val"/>
</template>\n`;

export const SINGLE_FILE_UPLOAD_OVERVIEW = "The Single File Upload component provides a user-friendly interface for uploading a single file, supporting both drag-and-drop and file explorer selection methods. Users can either click the upload area to open the file explorer or drag a file directly into the designated drop zone."

export const SINGLE_FILE_UPLOAD_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "loading",
      description: "Boolean value to control the loading state."
    }
  },
  {
    id: "3",
    data: {
      name: "uploaded",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "accept",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "disabled",
      description: "Boolean value to control the disabled state, if 'true' will be disabled"
    }
  },
  {
    id: "6",
    data: {
      name: "maxFileSize",
      description: "The max file size"
    }
  },
  {
    id: "7",
    data: {
      name: "imageClass",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "fileType",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "fileTypesMessage",
      description: "Description of types of file that can be accepted"
    }
  },
  {
    id: "11",
    data: {
      name: "rules",
      description: "Validation rules"
    }
  },
  {
    id: "12",
    data: {
      name: "wrapperClass",
      description: ""
    }
  },
];

export const SINGLE_FILE_UPLOAD_WITH_CROPPER_CODE = `\n<script setup lang="ts">
  const croppedImage = ref(null)
</script>

<template>
  <img v-if="croppedImage" :src="image" />
  <FileUploadSingleImageWithCropper v-else 
    model-value="" 
    uploaded="" 
    name="image" 
    @upload="val => croppedImage = val"/>
</template>\n`;

export const SINGLE_FILE_UPLOAD_WITH_CROPPER_OVERVIEW = "The Single File Upload with Cropper component lets users upload and crop an image. Users can drag and drop or select a file, then adjust the crop area with resizing, repositioning, and aspect ratio constraints. Zoom and pan options enhance precision. After editing, users can apply or reset the crop, making it perfect for customizable image uploads."

export const SINGLE_FILE_UPLOAD_WITH_CROPPER_PROPS: TableData<Prop>[] = [
  {
    id: "1",
    data: {
      name: "modelValue",
      description: ""
    }
  },
  {
    id: "2",
    data: {
      name: "loading",
      description: ""
    }
  },
  {
    id: "3",
    data: {
      name: "uploaded",
      description: ""
    }
  },
  {
    id: "4",
    data: {
      name: "accept",
      description: ""
    }
  },
  {
    id: "5",
    data: {
      name: "cropperClass",
      description: ""
    }
  },
  {
    id: "6",
    data: {
      name: "cropMaxWidth",
      description: ""
    }
  },
  {
    id: "7",
    data: {
      name: "cropMaxHeight",
      description: ""
    }
  },
  {
    id: "8",
    data: {
      name: "cropMinWidth",
      description: ""
    }
  },
  {
    id: "9",
    data: {
      name: "cropMinHeight",
      description: ""
    }
  },
  {
    id: "10",
    data: {
      name: "disabled",
      description: "Boolean value to control the disabled state. If 'true' will be disabled"
    }
  },
  {
    id: "11",
    data: {
      name: "maxFileSize",
      description: ""
    }
  },
  {
    id: "12",
    data: {
      name: "inputClass",
      description: ""
    }
  },
  {
    id: "13",
    data: {
      name: "imageClass",
      description: ""
    }
  },
  {
    id: "14",
    data: {
      name: "stencilComponent",
      description: ""
    }
  },
  {
    id: "15",
    data: {
      name: "name",
      description: ""
    }
  },
  {
    id: "16",
    data: {
      name: "fileType",
      description: ""
    }
  },
  {
    id: "17",
    data: {
      name: "fileTypesMessage",
      description: ""
    }
  },
  {
    id: "18",
    data: {
      name: "rules",
      description: ""
    }
  },
  {
    id: "19",
    data: {
      name: "aspectRatio",
      description: ""
    }
  },
  {
    id: "20",
    data: {
      name: "text",
      description: ""
    }
  },
  {
    id: "21",
    data: {
      name: "fileTypes",
      description: ""
    }
  },
  {
    id: "22",
    data: {
      name: "wrapperClass",
      description: ""
    }
  },
  {
    id: "23",
    data: {
      name: "customButton",
      description: ""
    }
  }
];