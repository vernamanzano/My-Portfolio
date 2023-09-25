<script setup>
</script>

<template>
    <div id="designs-section" class="pt-20 space-y-4 text-dark-charcoal">
        <div class="flex items-end justify-between mb-8">
            <h2 class="text-5xl md:text-8xl font-semibold text-dark-charcoal">
                Designs and Illustrations
            </h2>
            <div class="bg-dark-charcoal text-white rounded-full pl-4 pr-3 py-2">
                <span class="flex gap-2">
                    2023
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" fill="white"/></svg>
                </span>
            </div>
        </div>
        
        <div class="space-y-2 md:space-y-6">
            <div class="grid grid-cols-4 gap-2 md:gap-6">
                <img class="design-img col-span-full md:col-span-3 bg-slate-200" src="../assets\images\coc-magazine.png" alt="">
                <div class="hidden md:grid space-y-2 md:space-y-6">
                    <img class="h-auto max-w-full design-img" src="../assets\images\youll-be-safe-here-1.jpg" alt="">
                    <img class="h-auto max-w-full design-img" src="../assets/images/youll-be-safe-here-2.png" alt="">
                </div>
                <img class="design-img" src="../assets\images\kabataan-alert.png" alt="">
                <img class="design-img" src="../assets\images\alert-breaking.png" alt="">
                <img class="design-img" src="../assets\images\kiloskabataanbumoto.png" alt="">
                <img class="design-img" src="../assets\images\legacy-restock-modal.png" alt="">
            </div>
            <div class="grid grid-cols-12 gap-2 md:gap-6">
                <img class="design-img col-span-12 md:col-span-9" src="../assets\images\web-design-great-meetings.png" alt="">
                <div class="hidden md:grid col-span-3 space-y-2 md:space-y-6">
                    <img class="design-img" src="../assets\images\no-face-2.png" alt="">
                    <img class="design-img" src="../assets\images\woman-and-dessert.png" alt="">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 md:gap-6">
                <img class="design-img" src="../assets\images\women-in-gaming.png" alt="">
                <img class="design-img" src="../assets\images\soc-med-campaign.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.design-img {
    border-radius: 36px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.design-img:hover{
    transform: scale(1.1);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

@media only screen and (max-width: 1024px) {
    .design-img {
        border-radius: 8px;
    }
  }
</style>