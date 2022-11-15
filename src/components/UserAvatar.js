import React from 'react'
import classNames from 'classnames';
import styles from '@/styles/components/winnerblock.module.scss';
export const UserAvatar = ({ children, name }) => {
  return <div className={classNames(styles.userAvatar, 'simpleWrap')}>
    <div className={'uAwrap'}>
      <div className={'outline'}>
        <svg viewBox="0 0 238 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M88.6425 192.7C84.0909 191.325 79.6417 189.635 75.3276 187.64C71.0091 185.668 66.829 183.409 62.8158 180.877C54.8194 175.787 47.4487 169.715 41.0818 162.721C28.2393 148.829 19.3331 131.458 15.4474 113.06C14.4968 108.457 13.8362 103.799 13.4692 99.1138L13.2726 95.5976C13.205 94.4262 13.2262 93.2517 13.1987 92.0793C13.1987 91.492 13.1744 90.9058 13.1828 90.3196L13.2557 88.561L13.4026 85.0458C13.9449 75.6765 15.741 66.4212 18.7434 57.5255C24.7245 39.7687 35.5889 23.7263 49.7629 11.5274L50.1043 11.9147C36.1796 24.2588 25.6566 40.3201 20.0115 57.9401C17.1809 66.7469 15.5433 75.8906 15.142 85.129L15.0448 88.5925L14.9983 90.3217C14.9983 90.8985 15.0258 91.4794 15.0385 92.0509C15.0828 93.2086 15.0786 94.3578 15.1621 95.5082L15.4052 98.9581C15.8322 103.547 16.5466 108.105 17.544 112.605C21.6156 130.572 30.5673 147.393 43.2524 160.714C49.541 167.424 56.7786 173.211 64.5985 178.028C68.5164 180.421 72.592 182.549 76.7975 184.395C80.9894 186.261 85.3076 187.831 89.7204 189.093C90.7623 190.728 90.4548 191.945 88.6425 192.7ZM54.8839 167.887C54.7782 169.389 55.3615 170.794 56.2672 172.097C57.1527 173.424 58.4345 174.537 59.6582 175.519C61.032 173.392 62.0887 171.399 61.7802 168.119C61.6479 166.599 61.1948 165.124 60.4508 163.791C59.7631 162.513 58.8748 161.352 57.8195 160.353C57.6547 162.103 56.99 163.283 56.3189 164.365C55.6479 165.447 54.9822 166.442 54.8839 167.887ZM36.9489 148.956C36.5199 150.275 36.6858 151.719 37.1824 153.132C37.7541 154.538 38.5145 155.86 39.4428 157.062C41.216 155.466 42.6426 153.925 43.1932 150.831C43.451 149.365 43.3327 147.936 43.0241 146.558C42.8621 145.884 42.6386 145.226 42.3562 144.592C42.0965 143.965 41.7932 143.358 41.4485 142.773C40.8641 144.345 39.9691 145.265 39.0973 146.094C38.2254 146.923 37.3642 147.675 36.9489 148.956ZM23.5706 125.084C22.0837 127.277 22.7558 130.487 23.7682 133.077C25.7908 132.081 27.4456 131.066 28.7401 128.391C29.9385 125.859 29.8518 123.037 29.1787 120.603C28.2393 121.893 27.2248 122.497 26.2272 123.023C25.2297 123.549 24.2807 124.021 23.5706 125.084ZM17.283 97.3962C16.3383 98.1929 15.7697 99.3559 15.5277 100.643C15.3985 101.302 15.3222 101.971 15.2995 102.643C15.266 103.31 15.2868 103.979 15.3618 104.642C17.4447 104.279 19.1819 103.81 21.0545 101.737C21.9029 100.779 22.5324 99.6492 22.8995 98.4255C23.2923 97.2584 23.4849 96.0338 23.4691 94.803C21.1887 96.6753 19.1228 95.8639 17.283 97.3962ZM18.9949 69.5654C16.9543 70.5305 15.9959 73.2122 15.4675 75.5759C17.4098 75.777 19.146 75.8064 21.3366 74.4183C22.3404 73.7724 23.1873 72.9121 23.8157 71.8997C24.138 71.4135 24.36 70.8894 24.6263 70.3727C24.8755 69.8611 25.084 69.3308 25.2497 68.7866C22.6861 69.8938 21.0682 68.6603 18.9949 69.5654ZM27.3516 44.4668C25.2888 44.8456 23.7714 47.0084 22.7104 48.9923C24.3948 49.6395 25.9356 50.0879 28.2382 49.3659C29.2988 49.028 30.2712 48.4609 31.0861 47.7051C31.4824 47.3417 31.8452 46.9437 32.1703 46.5159C32.4873 46.0949 32.834 45.6739 33.1034 45.2298C30.5461 45.6245 29.3552 44.111 27.3516 44.4668ZM39.9617 24.9966C38.9821 24.944 38.0257 25.3123 37.137 25.8764C36.2916 26.4805 35.5339 27.2972 34.8777 28.0918C36.2451 29.0232 37.5195 29.7441 39.6943 29.541C40.2016 29.4944 40.7013 29.3863 41.1822 29.219C41.6709 29.0689 42.1446 28.874 42.5972 28.637C43.4757 28.1706 44.2709 27.5629 44.9505 26.8384C42.5919 26.6984 41.8596 25.1134 39.9617 24.9997V24.9966ZM71.7611 180.901C72.2339 181.724 72.7636 182.514 73.3462 183.264C74.1461 181.453 74.8256 179.705 75.1553 177.791C75.485 175.878 75.4597 173.8 74.9693 171.276C73.9686 166.37 71.0827 162.624 67.8575 159.886C67.7286 162.668 66.8198 164.669 65.8845 166.51C64.9662 168.349 63.9972 170.076 64.0765 172.373C64.1821 176.774 68.0297 180.49 72.1161 182.961C71.3168 181.761 70.6187 180.497 70.0291 179.183C69.3138 177.675 68.8133 176.076 68.5422 174.431C68.1565 171.961 68.5243 170.432 68.8392 169.017C69.1541 167.603 69.4172 166.363 69.0104 164.521C69.7343 166.575 69.4331 168.099 69.1509 169.836C68.891 171.561 68.6458 173.488 69.7311 176.505C70.3116 178.013 70.9897 179.481 71.7611 180.901ZM49.1933 163.755C49.3307 164.509 49.4924 165.166 49.6446 165.755C49.8697 166.634 50.1521 167.498 50.49 168.34C52.8719 165.421 54.6852 162.552 54.923 157.717C55.2094 152.925 53.434 148.737 51.0733 145.427C50.2596 148.005 48.9905 149.593 47.6843 151.071C46.3962 152.544 45.1238 153.878 44.6198 156.039C44.3836 157.051 44.3545 158.1 44.5342 159.123C44.7132 160.187 45.033 161.222 45.4852 162.201C45.9856 163.217 46.5684 164.19 47.2278 165.11C47.8904 166.058 48.6787 166.906 49.447 167.742C49.1151 166.689 48.6893 165.312 48.4483 163.764C48.2074 162.216 48.0732 160.573 48.2275 159.035C48.4959 156.64 49.2018 155.316 49.8126 154.106C50.4234 152.896 50.9486 151.829 51.0437 150.002C51.18 152.117 50.5956 153.395 49.9151 154.931C49.2663 156.453 48.5191 158.226 48.8414 161.214C48.9461 162.14 49.0644 162.99 49.1933 163.755ZM31.8057 144.851C31.7857 146.001 31.8449 146.857 31.941 147.425C33.3898 146.383 34.7128 145.338 35.8372 143.995C36.9785 142.647 37.9296 140.994 38.6492 138.806C40.1086 134.475 39.4418 130.192 38.1113 126.534C36.7862 128.689 35.1852 129.858 33.635 130.889C32.0847 131.921 30.5704 132.852 29.6088 134.696C27.7595 138.189 29.0572 142.843 31.122 146.624C31.069 145.326 31.0976 144.025 31.2076 142.73C31.3472 141.229 31.6782 139.751 32.1925 138.332C32.9798 136.227 33.9943 135.167 34.8523 134.21C35.7104 133.252 36.4839 132.383 36.9743 130.742C36.6393 132.696 35.7294 133.756 34.7361 134.995C33.7311 136.249 32.7008 137.643 32.2063 140.49C31.8829 142.277 31.8385 143.692 31.8057 144.851ZM19.7843 118.729C19.53 119.503 19.3444 120.298 19.2295 121.105C20.8146 120.541 22.294 119.939 23.6678 119.014C25.0585 118.087 26.3561 116.832 27.5851 115.023C27.8818 114.588 28.1521 114.135 28.3946 113.668C29.1328 112.33 29.6528 110.884 29.9353 109.384C30.3918 107.434 30.3939 105.49 30.2714 103.629C28.4971 105.272 26.7334 105.927 25.0606 106.47C23.3878 107.013 21.8101 107.466 20.4447 108.903C19.1534 110.261 18.4634 112.083 18.2731 114.06C18.0195 116.048 18.3038 118.164 18.6958 120.164C18.9904 118.968 19.3592 117.792 19.8001 116.641C20.3117 115.307 20.9982 114.047 21.8418 112.892C23.1246 111.176 24.2659 110.48 25.3153 109.825C26.3646 109.169 27.2776 108.577 28.1589 107.193C27.3379 108.9 26.2283 109.634 25.0035 110.507C23.8031 111.383 22.48 112.394 21.2827 114.859C20.6892 116.111 20.1884 117.405 19.7843 118.729ZM14.3843 91.5973C17.5672 91.4342 20.3126 90.9574 23.578 88.2926C25.18 86.9918 26.3118 85.4215 27.1614 83.7492C28.0632 82.1378 28.6714 80.3801 28.9578 78.5575C26.9659 79.6099 25.2128 79.7573 23.5621 79.8204C21.9115 79.8836 20.356 79.8899 18.7328 80.8434C15.5626 82.6326 14.5693 86.7729 14.1466 90.6006C15.1103 88.9788 16.8782 86.4256 18.9378 84.8343C19.5892 84.3163 20.3053 83.8847 21.0682 83.5503C21.6577 83.311 22.2615 83.1085 22.8763 82.9441C23.9922 82.6284 24.9898 82.3189 26.1575 81.2865C24.9475 82.6336 23.7513 83.0135 22.405 83.4903C21.0587 83.9671 19.6416 84.5533 17.9413 86.4813C15.8437 88.8988 14.7711 90.6553 14.3843 91.5973ZM18.0037 63.1234C20.9097 63.7791 23.5082 64.0475 27.1371 62.4562C28.9135 61.6805 30.3327 60.5386 31.5278 59.2325C32.7517 57.9889 33.7468 56.5409 34.4677 54.9544C32.3975 55.4227 30.7765 55.1196 29.2675 54.7702C27.7584 54.4208 26.3519 54.0387 24.6453 54.5029C21.3313 55.3343 19.3912 58.8179 18.0301 62.1689C19.3225 60.9501 21.5554 59.0884 23.821 58.1696C25.5488 57.4518 26.7662 57.4613 27.8599 57.4465C28.9536 57.4318 29.9237 57.4045 31.2414 56.7572C29.8075 57.6812 28.6303 57.7276 27.2945 57.8244C25.9588 57.9212 24.528 58.0959 22.5043 59.4115C20.0115 61.0596 18.569 62.3657 18.0037 63.1234ZM27.8863 39.1593C30.3707 40.4222 32.6659 41.2726 36.2525 40.6064C39.875 40.0213 42.5729 37.8027 44.6864 35.4294C42.6785 35.3894 41.2667 34.7517 39.9733 34.0981C38.6798 33.4445 37.4868 32.7847 35.8192 32.8099C34.2542 32.8415 32.8604 33.5466 31.5479 34.5559C30.2587 35.5747 29.0255 36.8713 28.1441 38.3037C29.483 37.4333 32.0076 36.304 34.2891 35.9883C36.0517 35.7462 37.1275 36.0083 38.106 36.2272C38.5838 36.3459 39.0704 36.4258 39.5612 36.4661C40.1441 36.493 40.728 36.4445 41.2984 36.3219C40.5175 36.5671 39.9078 36.6713 39.3044 36.6608C38.701 36.6503 38.142 36.5556 37.5301 36.4503C36.3149 36.2588 34.9485 36.0725 32.7917 36.7955C30.0568 37.6838 28.6366 38.6404 27.8852 39.1593H27.8863ZM41.0121 20.4363C42.9924 22.0634 44.9526 23.3411 48.3786 23.4579C50.063 23.5232 51.6312 23.1685 53.0758 22.5791C54.5309 22.0526 55.8852 21.2832 57.0808 20.3037C55.2622 19.9038 54.1104 19.0597 53.0652 18.2199C52.0201 17.38 51.0648 16.5549 49.5537 16.2697C46.6413 15.6677 43.7934 17.6505 41.439 19.7291C42.91 19.2797 45.3627 18.6851 47.4878 18.825C48.166 18.8622 48.8369 18.9835 49.485 19.186C49.974 19.3559 50.4522 19.5551 50.9169 19.7828C51.7729 20.1848 52.5464 20.5279 53.8367 20.5132C52.3477 20.7037 51.4062 20.2964 50.3293 19.867C49.2525 19.4376 48.0658 19.0366 45.9819 19.2944C43.3866 19.627 41.8015 20.1174 41.011 20.4363H41.0121ZM45.9861 176.481C44.9928 177.292 43.9022 178.114 41.9578 178.368C43.3665 179.437 44.9368 180.408 46.6234 180.999C48.3226 181.574 50.0546 181.868 51.7581 181.631C55.3256 181.117 56.785 179.42 58.3363 177.412C56.9448 176.509 55.4704 175.739 53.9328 175.113C52.4006 174.532 50.8102 174.265 49.3254 174.557C47.8693 174.857 46.9763 175.663 45.9861 176.481ZM26.8644 154.59C25.7675 155.091 24.5819 155.578 22.7727 155.342C23.2681 156.014 23.8143 156.647 24.4065 157.236C25.0145 157.817 25.6678 158.349 26.3604 158.827C27.7172 159.783 29.2685 160.421 30.8653 160.616C34.194 161.031 35.9577 159.825 37.864 158.378C36.8337 157.279 35.7009 156.112 34.417 155.242C33.1774 154.34 31.8269 153.695 30.3728 153.632C28.9547 153.574 27.9592 154.088 26.8644 154.59ZM13.6161 127.437C12.497 127.616 11.2765 127.769 9.72201 127.105C10.84 129.968 12.8922 132.714 15.6852 133.858C18.568 135.072 20.4986 134.42 22.5783 133.604C21.2922 131.097 19.5824 128.3 17.0346 127.443C15.7845 127.036 14.7373 127.256 13.6161 127.437ZM4.73208 95.6292C4.87823 97.0673 5.23607 98.4762 5.79411 99.8105C6.39222 101.124 7.24289 102.299 8.32183 103.178C10.5769 105.009 12.4949 104.933 14.5682 104.75C14.4308 104.107 14.2892 103.439 14.1297 102.775C13.9653 102.115 13.7505 101.468 13.4872 100.841C12.9398 99.6074 12.2571 98.5118 11.2183 97.8035C9.19363 96.4006 7.25346 97.5804 4.73208 95.6334V95.6292ZM8.20558 64.8705C8.07783 65.5236 7.99486 66.1847 7.95725 66.8491C7.90864 67.5142 8.00058 68.1994 8.09885 68.8582C8.31971 70.1811 8.77094 71.4377 9.51805 72.4891C11.0863 74.6898 12.7559 75.0981 14.6718 75.4602C14.9655 73.0396 14.9645 70.198 13.4037 68.4025C11.9803 66.6596 9.92596 67.2248 8.20558 64.8747V64.8705ZM21.1454 40.3223C20.4236 39.776 19.6818 39.1646 19.1988 37.9143C18.92 38.4585 18.6928 39.0276 18.5204 39.614C18.3587 40.2112 18.2456 40.8204 18.1823 41.4357C18.0586 42.6587 18.1569 43.8795 18.5669 44.9909C19.4303 47.3189 20.8188 48.0882 22.4388 48.8733C23.2937 46.7948 23.9912 44.2689 23.0359 42.3029C22.5677 41.3473 21.8639 40.8643 21.1454 40.3223ZM33.9805 17.4474C33.2905 18.332 32.7364 19.3137 32.3362 20.3606C32.1405 20.8746 32.0022 21.4086 31.9241 21.9529C31.8638 22.5032 31.8713 23.0588 31.9463 23.6073C32.2749 25.8933 33.357 26.8773 34.641 27.9224C35.2137 27.0625 35.7706 26.089 36.131 25.0902C36.5378 24.1283 36.7376 23.1295 36.5273 22.1666C36.1289 20.2795 34.3831 19.8954 33.9805 17.4474ZM53.4425 9.40884C52.3858 9.5004 51.4104 9.96769 50.5534 10.6223C49.7312 11.3201 49.019 12.1894 48.4272 13.0198C50.0123 13.6776 51.4294 14.1543 53.7109 13.6744C55.9396 13.2903 57.7202 11.9726 58.9502 10.436C56.4627 10.636 55.4862 9.23835 53.4425 9.40884ZM53.154 2.77003C51.2635 3.72565 49.3571 5.35483 48.423 7.4976C47.511 9.81298 47.8724 11.3295 48.368 12.9556C49.2525 12.442 50.174 11.8231 50.9422 11.0738C51.7464 10.3666 52.4122 9.5425 52.7303 8.53321C53.3611 6.56725 52.2125 5.30747 53.154 2.77003ZM64.1261 186.198C60.7594 186.546 58.9418 187.536 57.3524 188.449C55.7673 189.335 54.3936 190.151 51.6851 189.958C53.9614 189.874 55.0995 189.195 56.3454 188.404C57.5913 187.614 58.9397 186.705 61.5234 186C63.1941 185.55 65.0106 185.306 66.7247 185.106C68.4292 184.924 69.9826 184.872 71.1714 184.796C66.6708 182.931 61.6069 181.181 57.2225 182.503C54.8776 183.24 53.5756 184.629 52.0888 186.09C50.5988 187.534 48.9566 189.011 45.7674 189.609C47.0418 190.45 48.3734 191.201 49.7524 191.857C51.1461 192.478 52.5862 192.99 54.0596 193.389C57.0079 194.093 59.9679 194.254 62.7196 193.526C65.4946 192.831 67.3746 191.675 68.8064 190.301C70.2383 188.926 71.2169 187.33 72.1806 185.6C71.1956 185.586 70.2105 185.621 69.2291 185.706C67.922 185.772 66.2502 185.925 64.1261 186.198ZM41.439 168.641C38.2138 168.201 36.3666 168.62 34.6811 169.084C33.8421 169.309 33.0538 169.525 32.1703 169.59C31.2869 169.654 30.3105 169.562 29.1142 169.135C31.1854 169.624 32.4208 169.247 33.7586 168.819C35.0964 168.392 36.5632 167.866 39.0772 167.864C40.7513 167.862 42.4223 168.005 44.0713 168.293C45.6564 168.559 47.157 168.829 48.2338 169.087C47.3314 168.368 46.3444 167.699 45.3806 167.027C44.4194 166.358 43.4091 165.762 42.3584 165.243C41.3647 164.716 40.3162 164.298 39.2315 163.998C38.1779 163.715 37.0886 163.587 35.9978 163.617C33.6984 163.709 32.1376 164.706 30.4246 165.692C28.7158 166.661 26.8063 167.668 23.7851 167.437C27.5492 171.707 32.9787 175.023 38.3237 175.051C43.7987 175.021 46.3169 172.767 48.9514 170.086C48.0602 169.818 47.155 169.599 46.2398 169.43C45.6237 169.309 44.9125 169.193 44.1136 169.063C43.3147 168.934 42.4366 168.782 41.439 168.641ZM23.9299 145.251C21.1454 144.032 19.2623 144.015 17.6465 144.009C16.0117 144.003 14.5724 144.034 12.5509 142.71C14.3611 143.634 15.5541 143.603 16.8835 143.534C18.2129 143.466 19.6416 143.366 21.9865 143.955C23.5072 144.334 25.0183 144.959 26.4248 145.578C27.8314 146.197 29.0963 146.835 30.0177 147.335C27.3706 143.862 24.2532 140.221 20.2175 139.336C18.0607 138.878 16.4291 139.392 14.6168 139.881C12.8045 140.371 10.8654 140.791 8.11682 139.881C10.4638 144.684 14.6432 148.982 19.4947 150.315C21.9897 150.986 23.9426 150.947 25.6661 150.538C27.3896 150.13 28.8997 149.316 30.4394 148.411C29.9174 148.109 29.1808 147.675 28.1251 147.148C27.5968 146.885 26.986 146.597 26.2864 146.284L23.9299 145.251ZM12.9451 116.933C10.7439 115.111 9.06683 114.609 7.5652 114.196C6.08576 113.775 4.77646 113.434 3.3002 111.725C4.69087 113.019 5.77825 113.295 6.99879 113.572C8.21932 113.849 9.57935 114.116 11.5333 115.256C12.8151 115.993 13.9944 116.951 15.1325 117.868C16.2527 118.791 17.2196 119.7 17.9212 120.394C17.2172 118.434 16.3247 116.546 15.2562 114.756C14.7235 113.908 14.108 113.115 13.4185 112.387C12.7592 111.68 11.9877 111.086 11.1349 110.628C9.31093 109.661 7.64762 109.719 5.87864 109.7C4.10966 109.681 2.24346 109.571 0 108.057C0.433263 110.513 1.37376 112.969 2.59641 115.135C3.23489 116.192 3.97834 117.183 4.81556 118.093C5.22273 118.532 5.65683 118.945 6.11535 119.331C6.58302 119.706 7.07513 120.05 7.58845 120.359C9.66917 121.608 11.4477 122.082 13.1173 122.157C14.8081 122.224 16.3731 121.894 18.009 121.477C17.6158 121.068 17.0579 120.485 16.2453 119.731C15.4326 118.978 14.3231 118.062 12.9451 116.933ZM10.318 86.1888C8.77622 83.9786 7.3528 83.0925 6.12592 82.3389C4.89905 81.5854 3.81589 80.9381 2.94408 79.03C3.85182 80.5445 4.75956 81.0718 5.78459 81.6327C6.35045 81.9254 6.89941 82.2493 7.42888 82.6031C8.15822 83.1015 8.83453 83.6728 9.44725 84.3081C11.3895 86.2961 12.9567 88.9872 13.838 90.5996C13.6763 86.7613 12.8225 82.562 10.3127 80.0457C8.92734 78.708 7.41197 78.3375 5.81524 77.8682C4.21851 77.3988 2.53935 76.8157 0.85913 74.8887C0.715413 77.2104 0.85913 79.6415 1.3875 81.8948C2.00358 84.1523 3.07828 86.233 4.55772 87.8622C7.56943 91.1658 10.4755 91.4731 13.6362 91.6015C12.6623 89.7201 11.5533 87.9112 10.318 86.1888ZM15.6788 57.2119C14.8461 54.8302 13.782 53.6767 12.8658 52.6863C11.9496 51.696 11.1349 50.853 10.8178 48.9249C11.2606 50.5131 11.9475 51.215 12.7327 51.977C13.5178 52.739 14.3886 53.5504 15.3661 55.3069C16.6141 57.5855 17.358 60.4113 17.7321 62.0868C18.568 58.5832 18.8543 54.5744 17.2196 51.6813C16.3023 50.131 15.0268 49.4206 13.7017 48.6008C12.3765 47.7809 11.0081 46.8369 9.97245 44.6857C9.26549 46.7348 8.78996 48.9523 8.70437 51.1056C8.69274 53.2883 9.1408 55.4311 10.0644 57.2697C11.9475 61.0017 14.489 62.0152 17.3157 62.9329C17.0759 61.9468 16.7483 60.1755 15.6788 57.2119ZM27.303 33.3919C27.1117 31.0692 26.4375 29.8136 25.8109 28.7022C25.4938 28.1476 25.2001 27.6287 24.9898 27.0183C24.7411 26.3096 24.6555 25.5543 24.7393 24.8082C24.7377 25.4397 24.8579 26.0657 25.0933 26.6521C25.2957 27.1268 25.5434 27.5811 25.8331 28.0087C26.391 28.878 27.0229 29.8283 27.4795 31.6122C28.0776 33.9371 28.029 36.6103 28.0924 38.2742C28.7528 36.7176 29.5306 35.1442 29.9152 33.514C30.3221 31.8974 30.3686 30.2346 29.9152 28.7275C29.4471 27.1351 28.4517 26.21 27.4372 25.1776C26.4227 24.1451 25.4009 22.998 24.9517 20.8489C22.6269 24.1115 21.3895 28.4475 22.1936 32.1479C23.1194 35.9736 25.1715 37.4733 27.5048 38.9457C27.583 38.0342 27.5143 36.2525 27.303 33.3919ZM41.8638 15.2962C42.1259 13.1345 41.7433 11.8452 41.3957 10.7265C41.048 9.60775 40.7426 8.64582 41.2224 7.04295C40.973 8.43112 41.2424 9.23413 41.5647 10.1203C41.7521 10.6019 41.9116 11.0939 42.0424 11.5937C42.2203 12.2849 42.3238 12.993 42.351 13.706C42.4566 15.9424 41.9409 18.4199 41.5838 19.8659C43.5831 17.4737 45.3394 14.4658 45.1608 11.6084C45.034 10.0624 44.308 9.03101 43.5842 7.89543C42.8603 6.75984 42.147 5.51901 42.1343 3.47517C40.8261 4.77704 39.633 6.29572 38.7623 7.91963C37.9454 9.60354 37.4783 11.4074 37.4942 13.1819C37.5523 16.7991 39.0539 18.5209 40.8916 20.3385C41.1516 19.5239 41.5489 17.9905 41.8638 15.2962ZM55.8455 4.29292C55.6342 4.57392 55.4366 4.86334 55.2537 5.15802C55.0709 5.45271 54.9272 5.78107 54.7835 6.0968C54.507 6.71312 54.2688 7.34578 54.0702 7.9912C54.6972 7.31138 55.3615 6.66665 56.06 6.05997C56.9404 5.3628 57.8786 4.74137 58.8646 4.20241C60.4022 3.39308 61.4536 3.1226 62.4364 2.93211C63.4192 2.74161 64.3016 2.58691 65.4407 1.89861C64.2265 2.81318 63.1624 2.99946 61.9725 3.2952C60.8101 3.62777 59.4923 4.03191 57.773 5.28642C57.2394 5.67688 56.7681 6.03576 56.3549 6.36307C55.9417 6.69038 55.6152 7.03348 55.3267 7.31027C54.8981 7.7279 54.4931 8.16885 54.1135 8.63109C55.4065 8.59036 56.694 8.44464 57.9632 8.19537C59.4379 7.91897 60.8549 7.39588 62.1543 6.64828C62.9088 6.24414 63.5513 5.72108 64.1969 5.25485C64.8158 4.78417 65.388 4.25553 65.9057 3.67618C66.8747 2.58375 67.6598 1.3423 68.2305 0C66.3802 0.73671 64.8859 0.7967 63.4614 0.821959C62.037 0.847217 60.6664 0.806172 59.1975 1.52394C57.7942 2.1754 56.693 3.16996 55.8455 4.29292ZM149.356 192.7C153.908 191.324 158.357 189.632 162.671 187.637C166.99 185.665 171.17 183.406 175.184 180.874C183.18 175.784 190.55 169.712 196.917 162.718C209.76 148.826 218.666 131.454 222.551 113.057C223.503 108.454 224.163 103.796 224.53 99.1107L224.726 95.5945C224.794 94.4231 224.773 93.2486 224.8 92.0761C224.8 91.4889 224.825 90.9027 224.816 90.3165L224.743 88.5578L224.597 85.0427C224.054 75.6733 222.257 66.4181 219.254 57.5223C213.274 39.7687 202.405 23.7263 188.236 11.5274L187.894 11.9147C201.82 24.2588 212.341 40.3201 217.986 57.9401C220.817 66.747 222.455 75.8906 222.857 85.129L222.95 88.5883L222.997 90.3175C222.997 90.8942 222.969 91.4752 222.956 92.0467C222.912 93.2044 222.917 94.3536 222.833 95.5039L222.59 98.9538C222.162 103.543 221.448 108.101 220.451 112.601C216.38 130.568 207.427 147.388 194.742 160.71C188.455 167.419 181.216 173.207 173.396 178.024C169.478 180.417 165.403 182.545 161.197 184.391C157.005 186.257 152.687 187.826 148.274 189.089C147.236 190.728 147.544 191.945 149.356 192.7ZM181.677 164.365C181.006 163.283 180.342 162.103 180.177 160.353C179.121 161.352 178.233 162.512 177.545 163.791C176.801 165.124 176.349 166.599 176.217 168.119C175.909 171.399 176.956 173.392 178.338 175.519C179.561 174.537 180.843 173.424 181.729 172.097C182.634 170.794 183.223 169.389 183.113 167.887C183.016 166.442 182.344 165.451 181.676 164.365H181.677ZM198.902 146.094C198.028 145.265 197.135 144.345 196.55 142.773C196.206 143.358 195.902 143.966 195.642 144.592C195.359 145.226 195.136 145.884 194.974 146.558C194.664 147.936 194.551 149.365 194.804 150.831C195.355 153.925 196.782 155.462 198.555 157.062C199.483 155.86 200.243 154.538 200.814 153.132C201.311 151.719 201.477 150.275 201.048 148.956C200.634 147.675 199.772 146.925 198.901 146.094H198.902ZM211.772 123.031C210.774 122.499 209.764 121.897 208.82 120.61C208.147 123.04 208.06 125.862 209.259 128.398C210.553 131.073 212.208 132.088 214.231 133.085C215.243 130.495 215.915 127.285 214.428 125.091C213.718 124.021 212.761 123.563 211.771 123.031H211.772ZM214.53 94.802C214.515 96.0327 214.707 97.2573 215.099 98.4245C215.467 99.6479 216.097 100.777 216.944 101.735C218.818 103.809 220.554 104.278 222.638 104.641C222.713 103.977 222.733 103.309 222.699 102.642C222.676 101.97 222.6 101.302 222.471 100.642C222.23 99.3548 221.661 98.1919 220.716 97.3952C218.875 95.8639 216.809 96.6753 214.529 94.802H214.53ZM212.748 68.7866C212.914 69.3308 213.122 69.8611 213.372 70.3727C213.638 70.8894 213.86 71.4135 214.182 71.8997C214.813 72.9121 215.664 73.7714 216.671 74.4151C218.86 75.8064 220.597 75.7769 222.539 75.5728C222.004 73.209 221.048 70.5274 219.007 69.5623C216.932 68.6603 215.313 69.8938 212.748 68.7866ZM204.895 45.2277C205.166 45.6718 205.509 46.0886 205.83 46.5138C206.154 46.9418 206.517 47.3398 206.913 47.703C207.728 48.4588 208.7 49.0259 209.761 49.3638C212.063 50.0858 213.604 49.6374 215.289 48.9902C214.232 47.0084 212.71 44.8456 210.647 44.4647C208.64 44.111 207.452 45.6245 204.894 45.2277H204.895ZM193.053 26.8384C193.731 27.5633 194.525 28.172 195.402 28.6401C195.854 28.8774 196.327 29.0722 196.816 29.2221C197.297 29.3893 197.796 29.4975 198.304 29.5442C200.476 29.7473 201.754 29.0264 203.119 28.095C202.464 27.3004 201.703 26.4837 200.861 25.8796C199.972 25.3113 199.017 24.9471 198.037 24.9997C196.138 25.1134 195.406 26.6984 193.053 26.8384ZM168.272 176.503C169.357 173.486 169.117 171.557 168.852 169.834C168.57 168.094 168.27 166.571 168.993 164.519C168.586 166.361 168.847 167.616 169.164 169.015C169.481 170.414 169.847 171.962 169.461 174.429C169.19 176.074 168.69 177.673 167.975 179.181C167.385 180.495 166.687 181.759 165.888 182.959C169.973 180.488 173.823 176.771 173.927 172.371C174.006 170.074 173.037 168.347 172.118 166.508C171.198 164.669 170.275 162.666 170.146 159.884C166.92 162.62 164.035 166.368 163.034 171.274C162.545 173.799 162.519 175.877 162.849 177.789C163.179 179.701 163.858 181.455 164.657 183.262C165.24 182.512 165.769 181.722 166.242 180.899C167.013 179.479 167.692 178.011 168.272 176.503ZM189.15 161.204C189.473 158.216 188.727 156.443 188.077 154.921C187.396 153.384 186.809 152.106 186.949 149.991C187.043 151.822 187.555 152.892 188.18 154.096C188.805 155.3 189.501 156.63 189.765 159.024C189.918 160.563 189.786 162.207 189.544 163.754C189.302 165.301 188.876 166.674 188.545 167.731C189.316 166.897 190.105 166.047 190.764 165.1C191.423 164.179 192.006 163.206 192.506 162.191C192.958 161.211 193.278 160.176 193.457 159.113C193.636 158.089 193.607 157.041 193.372 156.029C192.866 153.867 191.593 152.537 190.307 151.06C189.001 149.587 187.733 147.995 186.918 145.416C184.557 148.726 182.782 152.915 183.07 157.706C183.306 162.548 185.12 165.41 187.502 168.33C187.84 167.487 188.122 166.623 188.347 165.744C188.5 165.16 188.664 164.503 188.799 163.744C188.934 162.986 189.052 162.14 189.148 161.204H189.15ZM205.793 140.487C205.298 137.646 204.268 136.247 203.263 134.993C202.268 133.754 201.361 132.694 201.024 130.74C201.515 132.38 202.276 133.251 203.147 134.208C204.017 135.164 205.018 136.228 205.805 138.33C206.32 139.748 206.651 141.226 206.79 142.728C206.901 144.023 206.929 145.324 206.876 146.622C208.942 142.841 210.238 138.187 208.389 134.694C207.43 132.85 205.897 131.922 204.363 130.887C202.829 129.853 201.213 128.686 199.887 126.532C198.556 130.19 197.889 134.473 199.349 138.804C200.069 140.992 201.019 142.645 202.161 143.993C203.286 145.336 204.609 146.381 206.057 147.423C206.153 146.855 206.212 145.999 206.193 144.849C206.174 143.698 206.116 142.277 205.793 140.487ZM216.712 114.864C215.516 112.398 214.192 111.391 212.991 110.511C211.767 109.638 210.658 108.905 209.837 107.198C210.717 108.576 211.633 109.174 212.679 109.829C213.726 110.483 214.87 111.18 216.153 112.897C216.996 114.051 217.683 115.312 218.195 116.645C218.637 117.795 219.006 118.971 219.301 120.167C219.694 118.167 219.978 116.048 219.724 114.063C219.533 112.09 218.843 110.274 217.552 108.906C216.187 107.469 214.601 107.024 212.936 106.474C211.272 105.923 209.501 105.275 207.725 103.632C207.603 105.494 207.605 107.438 208.063 109.387C208.249 110.373 208.537 111.337 208.923 112.264C209.124 112.745 209.351 113.214 209.602 113.671C209.845 114.138 210.115 114.59 210.412 115.026C211.641 116.835 212.938 118.09 214.33 119.018C215.704 119.942 217.183 120.544 218.768 121.108C218.653 120.301 218.468 119.507 218.214 118.732C217.809 117.408 217.307 116.116 216.712 114.865V114.864ZM220.052 86.4845C218.352 84.5564 216.93 83.9776 215.59 83.4935C214.25 83.0093 213.046 82.6368 211.837 81.2896C213.008 82.3221 214.001 82.6273 215.118 82.9473C215.733 83.1118 216.336 83.3143 216.925 83.5535C217.69 83.8874 218.408 84.3187 219.061 84.8364C221.12 86.4277 222.888 88.9809 223.851 90.6027C223.429 86.775 222.433 82.6347 219.265 80.8455C217.643 79.892 216.088 79.8983 214.437 79.8225C212.785 79.7468 211.033 79.6121 209.04 78.5596C209.327 80.3822 209.935 82.1399 210.836 83.7513C211.682 85.4236 212.817 86.9939 214.419 88.2947C217.686 90.9595 220.433 91.4362 223.612 91.5994C223.223 90.6553 222.155 88.8988 220.052 86.4845ZM215.489 59.4009C213.466 58.0854 212.035 57.917 210.7 57.8139C209.365 57.7107 208.187 57.6707 206.752 56.7467C208.073 57.3939 209.047 57.4234 210.134 57.436C211.22 57.4487 212.445 57.436 214.174 58.1591C216.438 59.0831 218.671 60.9449 219.964 62.1583C218.607 58.8179 216.671 55.329 213.354 54.5029C211.647 54.044 210.244 54.4313 208.731 54.7755C207.219 55.1196 205.601 55.428 203.531 54.9596C204.253 56.5462 205.248 57.9942 206.472 59.2378C207.665 60.5439 209.085 61.6858 210.863 62.4614C214.491 64.0527 217.09 63.7844 219.995 63.1287C219.429 62.3657 217.988 61.0596 215.49 59.4009H215.489ZM205.207 36.7997C203.051 36.0767 201.685 36.263 200.469 36.4545C199.862 36.5524 199.295 36.6545 198.696 36.665C198.096 36.6755 197.481 36.5713 196.7 36.3261C197.271 36.4488 197.855 36.4972 198.438 36.4703C198.929 36.4286 199.415 36.3473 199.893 36.2272C200.87 36.0083 201.946 35.7462 203.709 35.9883C205.991 36.304 208.516 37.4375 209.854 38.3037C208.972 36.8755 207.74 35.5747 206.45 34.5559C205.139 33.5498 203.743 32.8415 202.179 32.8099C200.511 32.7847 199.325 33.4487 198.026 34.0981C196.726 34.7475 195.325 35.3894 193.317 35.4294C195.43 37.8027 198.129 40.0213 201.752 40.6064C205.338 41.2726 207.632 40.4243 210.118 39.1593C209.362 38.6404 207.942 37.6838 205.208 36.7997H205.207ZM192.016 19.2944C189.933 19.0366 188.74 19.4523 187.67 19.867C186.599 20.2816 185.651 20.7089 184.161 20.5132C185.453 20.5279 186.225 20.1848 187.081 19.7828C187.546 19.5553 188.024 19.356 188.513 19.186C189.161 18.9835 189.832 18.8622 190.51 18.825C192.635 18.6851 195.088 19.2797 196.559 19.7291C194.204 17.6505 191.359 15.6719 188.448 16.2697C186.936 16.5549 185.987 17.3843 184.936 18.2199C183.884 19.0555 182.737 19.9038 180.92 20.3037C182.115 21.2834 183.469 22.0529 184.924 22.5791C186.369 23.1685 187.937 23.5263 189.621 23.4579C193.047 23.3411 195.011 22.0634 196.988 20.4363C196.196 20.1174 194.612 19.627 192.016 19.2944ZM188.667 174.558C187.181 174.266 185.592 174.533 184.06 175.114C182.523 175.737 181.05 176.505 179.658 177.405C181.211 179.405 182.669 181.11 186.238 181.623C187.941 181.863 189.673 181.569 191.371 180.992C193.062 180.401 194.628 179.431 196.037 178.361C194.093 178.107 193.003 177.285 192.009 176.474C191.014 175.662 190.129 174.857 188.667 174.558ZM207.622 153.635C206.169 153.697 204.818 154.342 203.578 155.244C202.294 156.114 201.162 157.281 200.131 158.38C202.033 159.827 203.801 161.033 207.129 160.619C208.727 160.424 210.277 159.786 211.635 158.829C212.327 158.352 212.98 157.819 213.587 157.238C214.181 156.65 214.727 156.016 215.222 155.344C213.414 155.581 212.227 155.093 211.13 154.592C210.033 154.091 209.043 153.574 207.625 153.635H207.622ZM220.961 127.448C218.412 128.304 216.702 131.101 215.416 133.609C217.496 134.424 219.432 135.076 222.311 133.862C225.101 132.718 227.155 129.968 228.273 127.109C226.718 127.773 225.498 127.62 224.379 127.441C223.26 127.262 222.219 127.036 220.964 127.448H220.961ZM226.773 97.8025C225.734 98.5108 225.052 99.6064 224.504 100.84C224.241 101.467 224.027 102.114 223.863 102.774C223.703 103.438 223.561 104.106 223.423 104.749C225.497 104.932 227.416 105.008 229.671 103.177C230.749 102.303 231.6 101.128 232.198 99.8095C232.754 98.4747 233.11 97.0659 233.255 95.6281C230.745 97.5804 228.805 96.4006 226.78 97.8025H226.773ZM224.596 68.4067C223.039 70.2022 223.039 73.0459 223.328 75.4644C225.243 75.1023 226.914 74.694 228.481 72.4933C229.228 71.4409 229.679 70.1853 229.9 68.8624C229.998 68.2036 230.09 67.5184 230.042 66.8533C230.004 66.1889 229.921 65.5278 229.793 64.8747C228.073 67.2248 226.013 66.6596 224.596 68.4067ZM214.968 42.3061C214.012 44.2721 214.709 46.7979 215.564 48.8765C217.184 48.0914 218.574 47.3221 219.436 44.994C219.847 43.8827 219.945 42.6618 219.821 41.4389C219.757 40.8237 219.645 40.2145 219.484 39.6171C219.326 39.0172 219.061 38.4594 218.804 37.9174C218.322 39.1688 217.58 39.7792 216.859 40.3254C216.138 40.8716 215.431 41.3473 214.963 42.3029L214.968 42.3061ZM201.471 22.1634C201.259 23.1264 201.46 24.1252 201.867 25.0871C202.227 26.0859 202.784 27.0594 203.358 27.9192C204.642 26.8773 205.723 25.8933 206.052 23.6042C206.126 23.0557 206.134 22.5001 206.075 21.9498C205.996 21.4056 205.857 20.8716 205.662 20.3574C205.261 19.3106 204.707 18.3288 204.017 17.4442C203.619 19.8954 201.869 20.2795 201.471 22.1634ZM179.051 10.436C180.281 11.9726 182.061 13.2903 184.291 13.6744C186.567 14.1543 187.99 13.6744 189.575 13.0198C188.982 12.1894 188.27 11.3201 187.449 10.6223C186.591 9.96769 185.611 9.5004 184.56 9.40884C182.513 9.23835 181.535 10.636 179.051 10.436ZM185.267 8.53321C185.584 9.5425 186.25 10.3666 187.056 11.0738C187.823 11.8231 188.746 12.442 189.629 12.9556C190.124 11.3295 190.487 9.81403 189.574 7.4976C188.64 5.35483 186.734 3.72565 184.844 2.77003C185.785 5.30747 184.638 6.56725 185.268 8.53321H185.267ZM168.767 185.704C167.785 185.619 166.799 185.584 165.814 185.598C166.778 187.327 167.761 188.926 169.188 190.299C170.616 191.671 172.5 192.824 175.276 193.524C178.024 194.252 180.983 194.09 183.935 193.386C185.409 192.989 186.85 192.477 188.244 191.857C189.623 191.2 190.954 190.449 192.228 189.609C189.04 189.011 187.397 187.534 185.907 186.09C184.42 184.629 183.118 183.238 180.774 182.503C176.391 181.181 171.327 182.931 166.825 184.796C168.015 184.872 169.573 184.924 171.272 185.106C172.986 185.306 174.803 185.55 176.474 186C179.058 186.705 180.419 187.617 181.652 188.404C182.886 189.191 184.035 189.878 186.313 189.958C183.605 190.151 182.231 189.335 180.645 188.449C179.06 187.536 177.237 186.546 173.872 186.198C171.748 185.925 170.077 185.772 168.767 185.704ZM193.885 169.061C193.086 169.191 192.374 169.307 191.758 169.428C190.844 169.596 189.939 169.814 189.049 170.081C191.683 172.762 194.201 175.016 199.676 175.045C205.018 175.018 210.455 171.702 214.215 167.432C211.194 167.663 209.284 166.655 207.576 165.687C205.863 164.701 204.301 163.703 202.002 163.612C200.912 163.582 199.823 163.71 198.77 163.993C197.684 164.293 196.636 164.71 195.642 165.238C194.591 165.756 193.581 166.352 192.62 167.022C191.653 167.694 190.667 168.362 189.767 169.081C190.845 168.823 192.341 168.555 193.93 168.288C195.579 168 197.25 167.856 198.925 167.858C201.438 167.858 202.906 168.372 204.242 168.814C205.579 169.256 206.816 169.624 208.892 169.13C207.697 169.557 206.727 169.656 205.836 169.584C204.945 169.513 204.164 169.303 203.326 169.079C201.642 168.615 199.794 168.196 196.563 168.636C195.561 168.782 194.674 168.922 193.885 169.061ZM211.72 146.282C211.019 146.598 210.41 146.883 209.881 147.146C208.824 147.673 208.085 148.108 207.567 148.409C209.106 149.314 210.604 150.112 212.34 150.536C214.076 150.96 216.017 150.983 218.511 150.313C223.363 148.98 227.541 144.681 229.89 139.879C227.142 140.79 225.198 140.356 223.39 139.879C221.581 139.402 219.94 138.876 217.789 139.334C213.753 140.215 210.636 143.859 207.989 147.333C208.909 146.833 210.164 146.19 211.581 145.576C212.999 144.962 214.498 144.332 216.02 143.953C218.365 143.368 219.79 143.456 221.124 143.532C222.457 143.608 223.643 143.637 225.456 142.708C223.435 144.032 221.996 144.001 220.362 144.007C218.745 144.013 216.863 144.03 214.079 145.249L211.72 146.282ZM221.749 119.731C220.935 120.485 220.376 121.068 219.986 121.477C221.622 121.898 223.19 122.224 224.877 122.157C226.548 122.082 228.327 121.608 230.406 120.359C230.92 120.05 231.412 119.706 231.879 119.331C232.338 118.946 232.772 118.532 233.179 118.093C234.018 117.183 234.763 116.193 235.404 115.135C236.627 112.969 237.567 110.513 238 108.057C235.757 109.571 233.888 109.672 232.121 109.7C230.354 109.729 228.689 109.661 226.865 110.628C226.012 111.086 225.24 111.68 224.579 112.387C223.889 113.114 223.273 113.908 222.74 114.756C221.673 116.545 220.782 118.433 220.079 120.392C220.78 119.699 221.747 118.79 222.867 117.866C224.006 116.949 225.185 115.987 226.468 115.254C228.421 114.117 229.793 113.846 231.001 113.57C232.209 113.294 233.307 113.017 234.7 111.723C233.22 113.432 231.917 113.772 230.436 114.194C228.933 114.605 227.256 115.107 225.055 116.931C223.676 118.062 222.558 118.974 221.749 119.731ZM224.356 91.6057C227.517 91.4773 230.424 91.17 233.436 87.8664C234.915 86.2372 235.991 84.1565 236.606 81.899C237.135 79.6457 237.28 77.2146 237.135 74.8929C235.452 76.8241 233.774 77.3946 232.178 77.8724C230.583 78.3502 229.066 78.7143 227.681 80.0499C225.172 82.5663 224.318 86.7655 224.156 90.6038C225.037 88.9914 226.604 86.3003 228.546 84.3123C229.159 83.6767 229.836 83.1053 230.566 82.6073C231.095 82.2519 231.643 81.9265 232.209 81.6327C233.234 81.0718 234.142 80.5445 235.05 79.03C234.178 80.9381 233.087 81.5791 231.868 82.3389C230.648 83.0988 229.217 83.9776 227.676 86.1888C226.44 87.9125 225.33 89.7228 224.356 91.6057ZM220.686 62.9371C223.513 62.0194 226.055 61.0059 227.937 57.274C228.861 55.4353 229.31 53.2926 229.298 51.1098C229.214 48.9523 228.738 46.7348 228.03 44.6899C226.989 46.8411 225.615 47.7725 224.294 48.5987C222.973 49.4248 221.692 50.1289 220.775 51.6792C219.14 54.5723 219.427 58.5811 220.264 62.0847C220.637 60.4092 221.381 57.5834 222.63 55.3048C223.606 53.5483 224.479 52.7306 225.263 51.9749C226.047 51.2192 226.735 50.512 227.177 48.9228C226.865 50.8562 226.041 51.7055 225.131 52.6937C224.221 53.682 223.151 54.8333 222.317 57.2192C221.25 60.1755 220.922 61.9468 220.686 62.9371ZM210.493 38.9414C212.827 37.468 214.88 35.9693 215.805 32.1437C216.609 28.4433 215.372 24.1052 213.046 20.8447C212.598 22.9938 211.567 24.1378 210.555 25.1744C209.544 26.2111 208.548 27.132 208.078 28.7243C207.627 30.2314 207.674 31.8943 208.078 33.5108C208.463 35.1411 209.241 36.7145 209.901 38.271C209.966 36.6071 209.916 33.9339 210.514 31.6091C210.971 29.8252 211.603 28.8727 212.161 28.0055C212.451 27.5784 212.699 27.1241 212.9 26.6489C213.136 26.0627 213.256 25.4366 213.254 24.805C213.338 25.5511 213.253 26.3064 213.004 27.0152C212.793 27.6256 212.496 28.1444 212.183 28.6991C211.556 29.8062 210.883 31.066 210.691 33.3888C210.487 36.2525 210.416 38.0342 210.493 38.9457V38.9414ZM197.103 20.3321C198.941 18.5146 200.443 16.7928 200.501 13.1755C200.52 11.4011 200.052 9.59723 199.232 7.91332C198.362 6.2894 197.17 4.77072 195.861 3.46885C195.849 5.51375 195.13 6.75247 194.411 7.88911C193.691 9.02575 192.961 10.0561 192.834 11.6021C192.655 14.4595 194.412 17.4674 196.411 19.8596C196.054 18.4135 195.543 15.9361 195.645 13.6997C195.671 12.9866 195.775 12.2785 195.953 11.5874C196.084 11.0876 196.243 10.5956 196.43 10.114C196.747 9.22782 197.022 8.43007 196.772 7.03663C197.252 8.63951 196.932 9.60881 196.599 10.7202C196.266 11.8316 195.869 13.1282 196.131 15.2899C196.449 17.9905 196.846 19.5239 197.103 20.3321ZM178.799 1.5271C177.33 0.809329 175.955 0.853532 174.535 0.825116C173.116 0.7967 171.617 0.74513 169.765 0.003158C170.337 1.34501 171.122 2.58632 172.09 3.67934C172.608 4.25842 173.18 4.78703 173.799 5.25801C174.444 5.72424 175.088 6.2473 175.843 6.65144C177.142 7.3992 178.559 7.9223 180.034 8.19853C181.303 8.44862 182.59 8.59505 183.883 8.63635C183.503 8.17443 183.098 7.7335 182.669 7.31553C182.376 7.03453 182.052 6.69564 181.641 6.36833C181.23 6.04102 180.757 5.68214 180.223 5.29168C178.503 4.03822 177.188 3.63303 176.024 3.30046C174.833 3.00472 173.769 2.81844 172.555 1.90387C173.695 2.59217 174.569 2.75951 175.56 2.93737C176.552 3.11523 177.594 3.39834 179.131 4.20767C180.117 4.74639 181.056 5.36782 181.936 6.06523C182.634 6.67191 183.299 7.31664 183.926 7.99646C183.727 7.35121 183.489 6.71858 183.213 6.10207C183.07 5.78633 182.917 5.46534 182.742 5.16329C182.567 4.86124 182.364 4.57918 182.151 4.29818C181.305 3.16996 180.204 2.1754 178.799 1.5271Z" fill="url(#paint0_linear_935_138)" />
          <defs>
            <linearGradient id="paint0_linear_935_138" x1="118.999" y1="0.00315733" x2="118.999" y2="194" gradientUnits="userSpaceOnUse">
              <stop stopColor="#AB7511" />
              <stop offset="0.25" stopColor="#F9D867" />
              <stop offset="0.38" stopColor="#FEFA88" />
              <stop offset="1" stopColor="#AB7511" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={'circlebg'}></div>
      <div className={'content'}>
        {children}
        <div className={'name'}>
          {name ?? 'ს.ხ'}
        </div>
      </div>
    </div>
  </div>
}