<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useField } from "vee-validate";
import { Cropper, type CropperResult, CircleStencil, RectangleStencil } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { formatSize, getMimeType, isImage } from "~/composables/functions/file";
import type { FileInfo } from "~/types/file";

const emit = defineEmits(["update:modelValue", "upload", "select"]);
const props = defineProps({
  modelValue: {
    type: [Array, Object, String],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  uploaded: {
    type: String,
  },
  accept: {
    type: String,
    default: null,
  },
  cropperClass: {
    type: String,
    default: "",
  },
  cropMaxWidth: {
    type: Number,
    default: 1100,
  },
  cropMaxHeight: {
    type: Number,
    default: 1100,
  },
  cropMinWidth: {
    type: Number,
    default: 100,
  },
  cropMinHeight: {
    type: Number,
    default: 100,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  maxFileSize: {
    type: Number,
    required: false,
  },
  inputClass: {
    type: String,
    default: "",
    required: false,
  },
  imageClass: {
    type: String,
    default: "",
  },
  stencilComponent: {
    type: String,
    default: "rectangle",
  },
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  fileType: {
    type: String,
    default: "image",
    required: false,
  },
  fileTypesMessage: {
    type: String,
    default: "PNG, JPG, GIF, upto 10MB",
    required: false,
  },
  rules: {
    type: String,
    default: "required",
    required: false,
  },
  aspectRatio: {
    type: Object,
  },
  text: { type: String },
  fileTypes: { type: String },
  wrapperClass: String,
  customButton: {
    type: Boolean,
    default: false,
  },
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name as string, props.rules, {
  initialValue: props.uploaded,
});

const customErrorMessage = ref("");
const fileInput = ref<HTMLInputElement | null>(null);
const files = ref<File[]>([]);
const type = ref("");
const base64Files = ref<string[]>([]);
const base64String = ref("/*");
const fileInfo = ref<FileInfo | undefined>(undefined);
const objectURL = ref("");

const open = () => {
  fileInput.value?.click();
};

const onFileSelect = async (event: Event) => {
  errorMessage.value = "";
  event.preventDefault();
  const element = event.target as HTMLInputElement;
  let _files = event instanceof DragEvent && event.dataTransfer
    ? event.dataTransfer.files
    : element.files;

  for (let file of _files ? _files : []) {
    objectURL.value = window.URL.createObjectURL(file);
    fileInfo.value = {
      name: file.name,
      size: formatSize(file.size),
      type: file.type
    };
   
    if (props.fileType == "pdf") {
      if (file.type != "application/pdf") {
        customErrorMessage.value = "Please upload a pdf file";
        return;
      }
    } else {
      if (!isImage(file)) {
        customErrorMessage.value = "Please upload a image file";
        return;
      }
    }
    createImage(file);
    files.value[0] = file;
  }
  openModal.value = true;
};

function createImage(file: File) {
  var reader = new FileReader();

  reader.onload = (_) => {
    base64Files.value[0] = reader.result as string;
    if (props.fileType != "image") {
      type.value = getMimeType(reader.result as ArrayBuffer, "image/jpeg") as string;
      emit("upload", base64Files.value[0]);
    } else {
      type.value = getMimeType(reader.result as ArrayBuffer, "application/pdf") as string;
    }
  };
  reader.readAsDataURL(file);
}

const handleDragOver = (event: Event) => {
  event.preventDefault();
};

watch(
  () => props.uploaded,
  (newVal) => {
    inputValue.value = newVal as string;
  }
);

const openModal = ref(false);

function change({ canvas }: CropperResult) {
  canvas?.toBlob((blob) => {
    const reader = new FileReader();
    reader.onload = () => {
      base64String.value = reader.result as string; 
    };

    reader.readAsDataURL(blob!);
  }, "image/webp");
}

const crop = () => {
  openModal.value = false;
  emit("upload", base64String.value);
};

const openCropperModal = computed({
  get: () => {
    return openModal.value && props.fileType == "image";
  },
  set: (val) => {
    openModal.value = val;
  },
});
</script>

<template>
  <ModalsModal wrapperClass="max-w-4xl dark:bg-black" v-model="openCropperModal">
    <template #Heading>
      <div
        class="text-lg font-body mb-2 font-medium capitalize flex items-center gap-x-2 text-gray-600 dark:text-white"
      >
        <Icon name="line-md:cloud-up" class="text-3xl" />
        <h1 class="">Upload File</h1>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center mt-10">
        <cropper
          :class="['h-[600px]  bg-slate-100 dark:bg-[#424242] rounded-xl', props.cropperClass]"
          :src="objectURL"
          :stencil-component="
            stencilComponent == 'rectangle' ? RectangleStencil : CircleStencil
          "
          :stencil-props="{
            ...aspectRatio,
          }"
          @change="change"
        />
        <div class="flex justify-end space-x-10 pt-5">
          <button
            type="button"
            @click="openModal = false"
            class="shadow-full hover:shadow-lg duration-200 flex items-center space-x-1 py-2 px-5 text-primary-500 bg-gray-100 dark:bg-[#424242] dark:text-white ring-1 ring-gray-300 rounded-md"
          >
            <p>Cancel</p>
          </button>
          <button
            @click="crop"
            type="button"
            class="flex items-center space-x-2 py-2 px-5 bg-primary-500 dark:bg-primary-800 text-white rounded-md duration-200"
          >
            <Icon name="material-symbols:crop" class="text-2xl"></Icon>
            <p>Crop and Upload</p>
          </button>
        </div>
      </div>
    </template>
  </ModalsModal>
  <div
    class="flex flex-col mx-auto w-full dark:bg-[#b0b0b0] border-2 border-dashed dark:border-[#424242] rounded-xl cursor-pointer min-h-[12rem] items-center justify-center border-gray-200 shadow-sm hover:border-primary-500 hover:shadow-md bg-gray-50 transition-all duration-200"
    :class="
      [errorMessage ? 'border-red-600' : 'border-gray-400',
      wrapperClass ? wrapperClass : 'min-w-[80%] mx-auto']
    "
    @dragover="handleDragOver"
    @drop="onFileSelect"
    @click="open"
  >
    <div class="flex flex-wrap items-center gap-y-5 gap-x-10 rounded-t-md">
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        :class="[props.inputClass]"
        @change="onFileSelect"
        :disabled="disabled"
      />
    </div>
    <div
      v-if="uploaded && !loading"
      class="flex items-center rounded-md w-full justify-center relative gap-3 group"
    >
      <div
        v-if="fileType == 'image'"
        class="overflow-hidden justify-center flex max-h-[40vh]"
        :class="imageClass"
      >
        <img
          role="presentation"
          alt="logo"
          :src="uploaded as string"
          class="object-contain bg-white"
        />
      </div>
      <div v-else class="w-full">
        <Icon name="uiw:file-pdf" class="text-8xl text-red-500"></Icon>
        <div>
          <p>{{ fileInfo?.name }}</p>
          <p>{{ fileInfo?.size }}</p>
        </div>
      </div>
      <slot v-if="customButton" name="button" />
      <button
        v-else
        type="button"
        title="Change Image"
        class="cursor-pointer text-white self-center gap-x-1 capitalize text-sm bg-primary-500 p-2 rounded-md group flex items-center absolute bottom-1 right-1"
      >
        <Icon
          name="tdesign:refresh"
          class="text-base group-hover:rotate-45 duration-200"
        ></Icon>
      </button>
    </div>
    <div
      v-else-if="loading"
      class="flex flex-col w-full justify-center items-center h-[200px]"
    >
      <div role="status">
        <Icon name="lucide:image-plus" size="24" />
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col w-full justify-center items-center space-y-4"
    >
      <Icon name="iconoir:add-media-image" class="text-4x" />
      <p class="px-5 w-full text-center pt-3">
        <span class="cursor-pointer text-blue-600">upload Image </span>
        <span>
          or Drag and Drop</span
        >
      </p>
      <p
        class="font-poppins font-thin text-sm"
      >
        {{ fileTypesMessage }}
      </p>
    </div>
  </div>
  <p
    class="col-span-5 mt-1 text-center font-body text-sm text-red-600 duration-300 transition-all"
    :class="customErrorMessage ? 'h-5' : 'h-0'"
    id="email-error"
    :visible="customErrorMessage"
    v-if="customErrorMessage"
  >
    {{ customErrorMessage }} &nbsp;
  </p>
  <p
    class="col-span-5 mt-1 text-center font-body text-sm text-red-600 duration-300 transition-all"
    :class="errorMessage ? 'h-5' : 'h-0'"
    id="email-error"
    :visible="errorMessage"
    v-if="errorMessage"
  >
    {{ errorMessage }} &nbsp;
  </p>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.cropper {
  height: 600px;
  width: 600px;
  background: #ddd;
}
</style>