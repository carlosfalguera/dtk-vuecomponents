<template> 
  <button type="button" 
    class="
      p-3
      rounded-sm
      bg-pink-600
      text-pink-50
      hover:bg-pink-500
      hover:shadow-md
      hover:shadow-gray-400 active: shadow-sm active:bg-pink-800
      dark: text-pink-800 dark: bg-pink-200 dark:hover:bg-pink-100
      dark:hover:shadow-gray-900 dark:active: bg-pink-300
      transition-colors
      transition-shadows
      duration-500
      ease-linear
  ">
    <slot/>
  </button>
</template>