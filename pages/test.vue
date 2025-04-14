<template>
    <div class="flex flex-col items-center justify-center">
      <!-- Profile Picture Upload UI -->
      <label for="profilePicture" class="relative w-24 h-24 rounded-full border-2 border-dashed border-medcolor-blue flex items-center justify-center cursor-pointer overflow-hidden">
        
        <!-- Show uploaded image if available -->
        <img v-if="profilePicture" :src="profilePicture" alt="Profile Picture" class="absolute w-full h-full object-cover rounded-full" />
        
        <!-- Add Image Icon (Displayed before upload) -->
        <div v-if="!profilePicture" class="flex flex-col items-center justify-center text-medcolor-blue">
          <icon name="uil:image-plus" class="w-8 h-8" />
          <p class="text-xs text-medcolor-blue">Add Image</p>
        </div>
  
        <!-- Edit Icon (Displayed after upload) -->
        <div v-if="profilePicture" class="absolute bg-gray-700 bg-opacity-75 p-1 rounded-full">
          <icon name="uil:pen" class="w-5 h-5 text-white" />
        </div>
        
        <!-- Hidden File Input -->
        <input type="file" id="profilePicture" accept="image/*" class="hidden" @change="handleFileUpload" />
      </label>
    </div>
  </template>
  
  <script setup>
definePageMeta({
    layout: false
})
  
  const profilePicture = ref(null);
  
  // Handle Image Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        profilePicture.value = reader.result; // Store file
      };
  
      reader.onerror = (error) => {
        console.error("Error uploading image:", error);
      };
    }
  };
  </script>
  