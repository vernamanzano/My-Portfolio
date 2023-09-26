<script setup>
  import FrontEnd from '../components/FrontEnd.vue';
  import MeVentures from '../components/MeVentures.vue';
  import DesignWork from '../components/DesignWork.vue';
</script>

<template>
  <main class="font-Jakarta container mt-10 mb-0 md:mt-20 md:mb-0">
    <div class=" text-dark-charcoal dark:text-white text-center space-y-4">
      <h1 class="text-5xl md:text-8xl font-bold"> Hi, I'm Verna.</h1>
      <p class="text-md md:text-2xl font-Jakarta">
        I make ideas visible through code and design. 
      </p>
    </div>

    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-8 my-8 md:my-16 text-slate-700 font-semibold">
      <a href="#front-end-section" class="project-card frontend-card">
        <h2 class="text-6xl md:text-7xl">
          front<br>end
        </h2>
      </a>
      <a href="#design-work-section" class="project-card graphic-card">
        <h2 class="text-6xl md:text-7xl">
          <span>design</span><br>
          <span>work</span>
        </h2>
      </a>
      <a href="#me-ventures-section" class="project-card me-ventures-card">
        <h2 class="text-6xl md:text-7xl">
          <span>me-</span><br>
          <span class="tracking-tight">ventures</span>
        </h2>
      </a>
    </div>

    <div class="flex justify-center gap-4 pt-8">
      <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=manzano.vernalyn@gmail.com&tf=1" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM19.2078 12.3782C18.3787 11.5855 17.3241 11.1818 16.1496 11.1818C14.066 11.1818 12.3026 12.589 11.6735 14.48C11.5135 14.96 11.4226 15.4727 11.4226 16C11.4226 16.5272 11.5132 17.04 11.6732 17.52C12.3023 19.4109 14.066 20.8181 16.1496 20.8181C17.226 20.8181 18.1426 20.5346 18.859 20.0546C19.7063 19.4873 20.2699 18.64 20.4554 17.64H16.1499V14.5455H23.6845C23.779 15.0691 23.8299 15.6146 23.8299 16.1818C23.8299 18.6182 22.9572 20.6691 21.4445 22.0619C20.1208 23.2837 18.3096 24 16.1496 24C13.0223 24 10.3169 22.2072 9.00049 19.5927C8.45867 18.5127 8.1499 17.2909 8.1499 16C8.1499 14.709 8.45899 13.4872 9.00081 12.4072C10.3172 9.79268 13.0223 8 16.1496 8C18.306 8 20.1169 8.79273 21.5023 10.0836L19.2078 12.3782Z" fill="#31352E"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/vernalynmanzano/" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="#31352E"/>
        </svg>
      </a>
      <a href="https://www.behance.net/vernamanzano" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3287 14.6946C13.08 14.8722 12.7603 14.9788 12.3695 14.9788H10.167V12.6697H12.2274C12.4406 12.6697 12.6182 12.6697 12.7958 12.7052C12.9734 12.7407 13.1155 12.8118 13.2576 12.8828C13.3997 12.9894 13.5063 13.096 13.5774 13.238C13.6484 13.3801 13.6839 13.5933 13.6839 13.8064C13.6839 14.1972 13.5774 14.5169 13.3287 14.6946Z" fill="#31352E"/>
          <path d="M13.08 19.0996C12.9024 19.1351 12.6892 19.1707 12.4761 19.1707H10.167V16.4353H12.5116C12.9734 16.4353 13.3642 16.5418 13.6484 16.755C13.9326 17.0037 14.0747 17.3589 14.0747 17.8562C14.0747 18.1049 14.0037 18.3181 13.9326 18.4957C13.826 18.6733 13.7195 18.7799 13.5774 18.8865C13.4353 18.993 13.2576 19.0641 13.08 19.0996Z" fill="#31352E"/>
          <path d="M20.4691 15.0143C20.9309 15.0143 21.3217 15.1564 21.5704 15.405C21.8191 15.6537 21.9967 16.009 22.0677 16.5418H18.8705C18.8705 16.4241 18.8949 16.3064 18.9235 16.1685C18.9294 16.1399 18.9355 16.1105 18.9416 16.08C18.9771 15.9024 19.0481 15.7248 19.1902 15.5827C19.3323 15.4406 19.4744 15.2985 19.6876 15.1919C19.9007 15.0853 20.1494 15.0143 20.4691 15.0143Z" fill="#31352E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM13.9326 11.1421C13.5418 11.0355 13.1155 11 12.6537 11H8V20.8048H12.7603C13.1866 20.8048 13.6129 20.7337 14.0392 20.6272C14.4655 20.5206 14.8562 20.343 15.176 20.1298C15.4957 19.9167 15.7799 19.597 15.9575 19.2417C16.1351 18.8865 16.2417 18.4602 16.2417 17.9628C16.2417 17.3589 16.0641 16.826 15.7799 16.3997C15.4957 15.9734 15.0339 15.6537 14.4299 15.4761C14.8562 15.263 15.2115 14.9788 15.4246 14.659C15.6733 14.3393 15.7799 13.913 15.7799 13.4157C15.7799 12.9894 15.7088 12.5986 15.5667 12.2789C15.4246 11.9592 15.2115 11.7105 14.9273 11.5329C14.6431 11.3552 14.3234 11.2131 13.9326 11.1421ZM20.6112 19.5614C20.0428 19.5614 19.6165 19.4193 19.3323 19.1351C19.0481 18.8509 18.835 18.3181 18.835 17.7497H23.9861C24.0216 17.1813 23.9861 16.6839 23.915 16.1866C23.7729 15.6892 23.5598 15.2274 23.2756 14.8367C22.9914 14.4104 22.6361 14.1262 22.1743 13.8775C21.7125 13.6288 21.1796 13.5222 20.5757 13.5222C20.0073 13.5222 19.5455 13.6288 19.0837 13.8064C18.6574 13.9841 18.2666 14.2683 17.9469 14.588C17.6272 14.9432 17.3785 15.334 17.2009 15.7958C17.0232 16.2576 16.9522 16.755 16.9522 17.2879C16.9522 17.8562 17.0232 18.3536 17.2009 18.8154C17.343 19.2772 17.5916 19.668 17.9114 19.9877C18.2311 20.343 18.5863 20.5916 19.0481 20.7693C19.51 20.9469 20.0073 21.0535 20.5757 21.0535C21.3928 21.0535 22.0677 20.8403 22.6361 20.4851C23.2045 20.0943 23.6308 19.4904 23.915 18.6378H22.1743C22.1033 18.8509 21.9256 19.0641 21.6414 19.2772C21.3572 19.4549 21.002 19.5614 20.6112 19.5614ZM22.423 11.675H18.4442V12.6341H22.423V11.675Z" fill="#31352E"/>
        </svg>
      </a>
    </div>

    <div class="px-4">
      <FrontEnd />
      <DesignWork />
      <MeVentures />
    </div>

    <div class="text-center text-xs">
      <p class="p-10 text-gray-500">
        &copy; All Rights Reserved (2023) <br>
        Vernalyn Manzano
      </p>

    </div>

  </main>
</template>

<style>
  .header-image {
    border-radius: 50%;
    height: 70px;
  }
  .project-card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 350px;
    width: 350px;
    border-radius: 36px;
    background-size: cover;
    background: white;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  @media only screen and (max-width: 768px) {
    .project-card {
      max-height: 200px;
      max-width: 300px;
    }
  }

  .project-card:hover{
    transform: scale(1.1);
    background-color: rgb(241 245 249);
  }
  .frontend-card {
    background-image: url("../assets/images/Texture_1.png");
  }
  .graphic-card {
    background-image: url("../assets/images/Texture_2.png");
  }
  .me-ventures-card {
    background-image: url("../assets/images/Texture_3.png");
  }
</style>
