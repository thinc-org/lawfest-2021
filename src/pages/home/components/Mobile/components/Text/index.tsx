import React from 'react'
import { IHopeYouHope, TextContainer, YouHopeIHope } from './styled'
import { TextProps } from './types'

const Text = ({ state }: TextProps) => {
  return (
    <TextContainer state={state}>
      <YouHopeIHope
        state={state}
        height="25vh"
        viewBox="0 0 312 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.9082 35.3555C23.3366 37.862 20.2116 40.7591 16.5332 44.0469C14.4499 45.9024 12.5944 47.3998 10.9668 48.5391C9.27407 49.7761 7.49998 50.3946 5.64452 50.3946C3.78905 50.3946 2.37303 49.418 1.39647 47.4649C0.875636 46.4232 0.615219 45.3002 0.615219 44.0957C0.615219 39.9942 2.27538 34.8998 5.59569 28.8125C8.55793 23.3763 12.6432 18.1029 17.8515 12.9922C23.0273 7.88154 26.6894 5.3262 28.8379 5.3262C29.3587 5.3262 29.8144 5.52151 30.2051 5.91214C30.5631 6.30276 30.7422 6.77477 30.7422 7.32816C30.7422 8.23961 30.4167 8.98831 29.7656 9.57425C29.2448 10.03 28.4798 10.5671 27.4707 11.1856C25.6478 12.3249 23.3854 14.2129 20.6836 16.8496C16.3867 21.0814 12.9687 25.655 10.4297 30.5703C7.63019 36.0065 6.23045 39.8477 6.23045 42.0938C6.23045 42.5821 6.37694 43.0215 6.66991 43.4121C7.06053 43.9655 7.58136 44.2422 8.23241 44.2422C9.46939 44.2422 11.5853 43.0541 14.5801 40.6778C18.1608 37.9108 21.0579 35.3229 23.2715 32.9141C29.7168 25.9479 34.5508 20.3002 37.7734 15.9707C40.8659 11.7715 43.47 8.41865 45.5859 5.91214C47.3763 3.79625 48.7598 2.73831 49.7363 2.73831C50.3874 2.73831 50.9407 3.06383 51.3965 3.71487C51.7545 4.23571 51.9336 4.83792 51.9336 5.52151C51.9336 6.66084 51.3151 8.02803 50.0781 9.62308C41.2565 21.2116 35.4134 29.1055 32.5488 33.3047C28.2194 39.75 24.4596 46.4395 21.2695 53.3731C17.5911 61.2507 15.3613 66.5078 14.5801 69.1446C13.8314 71.586 13.1315 73.1322 12.4805 73.7832C11.8294 74.4343 11.097 74.7598 10.2832 74.7598C8.75324 74.7598 7.98827 74.0274 7.98827 72.5625C7.98827 70.9675 9.01366 67.7123 11.0644 62.7969C13.4733 56.9701 16.4193 51.1758 19.9023 45.4141C22.8646 40.5313 24.8665 37.1784 25.9082 35.3555ZM52.2265 35.6973C54.8958 35.6973 56.2305 37.3249 56.2305 40.5801C56.2305 44.9095 54.2285 50.3946 50.2246 57.0352C45.8626 64.2292 41.6471 67.8262 37.5781 67.8262C35.6901 67.8262 34.3066 66.9473 33.4277 65.1895C32.972 64.3106 32.7441 63.2526 32.7441 62.0157C32.7441 57.849 34.1764 53.3242 37.041 48.4414C39.7103 43.9167 42.8515 40.4011 46.4648 37.8946C48.5807 36.4297 50.5013 35.6973 52.2265 35.6973ZM47.1484 54.1543C46.3346 53.5033 45.9277 52.9987 45.9277 52.6407C45.9277 52.3802 46.4486 51.6641 47.4902 50.4922C50.4199 47.2045 51.8848 44.5515 51.8848 42.5332C51.8848 42.2728 51.8034 42.0124 51.6406 41.752C51.3802 41.2637 50.9733 41.0196 50.4199 41.0196C49.3782 41.0196 47.8483 42.0287 45.8301 44.0469C43.2259 46.6511 41.2402 49.3366 39.873 52.1035C38.278 55.2611 37.4805 57.8815 37.4805 59.9649C37.4805 60.5183 37.6269 61.0065 37.9199 61.4297C38.3431 62.0157 38.8802 62.3086 39.5312 62.3086C41.0937 62.3086 42.7702 61.1367 44.5605 58.793C45.3418 57.8164 45.9765 56.8073 46.4648 55.7657C46.9531 54.724 47.181 54.1869 47.1484 54.1543ZM70.2441 59.7207C68.8444 61.6739 67.6074 63.2364 66.5332 64.4082C64.6452 66.4916 62.7734 67.5332 60.918 67.5332C59.3229 67.5332 58.0859 66.8171 57.207 65.3848C56.5885 64.3757 56.2793 63.1713 56.2793 61.7715C56.2793 57.5723 58.0696 52.7546 61.6504 47.3184C63.3105 44.7793 64.9544 42.8425 66.582 41.5078C67.8515 40.4336 68.8932 39.8965 69.707 39.8965C70.1627 39.8965 70.5859 40.0918 70.9765 40.4825C71.3021 40.8405 71.4648 41.1986 71.4648 41.5567C71.4648 42.1752 70.8626 43.1843 69.6582 44.584C66.9564 47.8067 64.9056 50.7689 63.5058 53.4707C61.8782 56.6283 61.0644 59.1022 61.0644 60.8926C61.0644 61.3483 61.1621 61.7064 61.3574 61.9668C61.5853 62.1947 61.8945 62.3086 62.2851 62.3086C63.9453 62.3086 66.2565 59.9323 69.2187 55.1797C70.7487 52.7058 72.067 49.9714 73.1738 46.9766C73.7598 45.349 74.5247 43.9004 75.4687 42.6309C76.3802 41.4916 77.2754 40.9219 78.1543 40.9219C78.6426 40.9219 79.082 41.1335 79.4726 41.5567C79.8958 42.0124 80.1074 42.517 80.1074 43.0703C80.1074 44.2422 78.9844 46.8789 76.7383 50.9805C75.2083 53.8125 74.4433 56.1726 74.4433 58.0606C74.4433 60.0788 74.9805 61.8041 76.0547 63.2364C76.3476 63.627 77.2428 64.2455 78.7402 65.0918C79.4564 65.515 79.8144 66.1986 79.8144 67.1426C79.8144 67.7285 79.554 68.2331 79.0332 68.6563C78.5449 69.0795 77.9427 69.291 77.2265 69.291C75.5989 69.291 74.1178 68.64 72.7832 67.3379C71.5788 66.166 70.8138 64.4733 70.4883 62.2598C70.4232 61.9668 70.3418 61.1205 70.2441 59.7207ZM144.463 37.1621C137.757 38.5293 130.807 40.6452 123.613 43.5098C123.353 44.0306 123.092 44.5677 122.832 45.1211C118.34 53.7474 115.312 61.918 113.75 69.6328C113.424 71.4558 112.692 72.3672 111.553 72.3672C110.706 72.3672 109.958 71.944 109.307 71.0977C108.786 70.4466 108.525 69.7468 108.525 68.9981C108.525 68.0866 108.932 66.1986 109.746 63.334C110.56 60.4369 111.406 57.8978 112.285 55.7168C112.611 54.903 113.636 52.5267 115.361 48.5879C115.784 47.6439 116.208 46.6511 116.631 45.6094C115.947 45.8698 115.003 46.2604 113.799 46.7813C113.278 47.0091 112.806 47.1231 112.383 47.1231C111.374 47.1231 110.869 46.3581 110.869 44.8282C110.869 43.819 111.292 43.0541 112.139 42.5332C112.79 42.1101 113.945 41.6055 115.605 41.0196C117.363 40.3685 118.747 39.8314 119.756 39.4082C120.407 38.2689 121.644 35.9252 123.467 32.377C123.792 31.7259 124.883 29.8705 126.738 26.8106C132.044 17.8913 135.495 11.5437 137.09 7.76761C138.555 4.34964 139.466 2.41279 139.824 1.95706C140.475 1.11071 141.256 0.687531 142.168 0.687531C143.698 0.687531 144.463 1.43623 144.463 2.93362C144.463 6.35159 139.808 15.5801 130.498 30.6192C128.968 33.0931 127.845 35.2416 127.129 37.0645L129.57 36.3809C136.211 34.4603 142.249 32.7839 147.686 31.3516C151.429 24.4506 156.019 16.8008 161.455 8.40237C162.399 6.90498 162.952 5.97724 163.115 5.61917C163.896 4.21943 164.727 3.51956 165.605 3.51956C166.354 3.51956 166.973 3.82881 167.461 4.4473C167.852 4.96813 168.047 5.53779 168.047 6.15628C168.047 7.32816 167.412 9.00459 166.143 11.1856C165.85 11.7064 164.515 13.7897 162.139 17.4356C157.972 23.8809 155.352 28.194 154.277 30.375C155.221 30.2774 155.937 30.2285 156.426 30.2285C158.997 30.2285 160.283 30.8633 160.283 32.1328C160.283 32.9141 159.876 33.6791 159.062 34.4278C158.444 35.0137 157.76 35.3067 157.012 35.3067H155.107C154.326 35.3067 153.154 35.4532 151.592 35.7461C144.691 48.0508 140.182 58.8418 138.066 68.1192C137.546 70.2025 136.732 71.2442 135.625 71.2442C134.779 71.2442 133.981 70.7071 133.232 69.6328C132.744 68.8841 132.5 68.0866 132.5 67.2403C132.5 64.1153 136.488 54.0892 144.463 37.1621ZM172.441 35.6973C175.111 35.6973 176.445 37.3249 176.445 40.5801C176.445 44.9095 174.443 50.3946 170.439 57.0352C166.077 64.2292 161.862 67.8262 157.793 67.8262C155.905 67.8262 154.521 66.9473 153.643 65.1895C153.187 64.3106 152.959 63.2526 152.959 62.0157C152.959 57.849 154.391 53.3242 157.256 48.4414C159.925 43.9167 163.066 40.4011 166.68 37.8946C168.796 36.4297 170.716 35.6973 172.441 35.6973ZM167.363 54.1543C166.549 53.5033 166.143 52.9987 166.143 52.6407C166.143 52.3802 166.663 51.6641 167.705 50.4922C170.635 47.2045 172.1 44.5515 172.1 42.5332C172.1 42.2728 172.018 42.0124 171.855 41.752C171.595 41.2637 171.188 41.0196 170.635 41.0196C169.593 41.0196 168.063 42.0287 166.045 44.0469C163.441 46.6511 161.455 49.3366 160.088 52.1035C158.493 55.2611 157.695 57.8815 157.695 59.9649C157.695 60.5183 157.842 61.0065 158.135 61.4297C158.558 62.0157 159.095 62.3086 159.746 62.3086C161.309 62.3086 162.985 61.1367 164.775 58.793C165.557 57.8164 166.191 56.8073 166.68 55.7657C167.168 54.724 167.396 54.1869 167.363 54.1543ZM190.898 41.2637C192.233 40.4173 193.226 39.8314 193.877 39.5059C195.212 38.8548 196.514 38.5293 197.783 38.5293C199.215 38.5293 200.29 38.9525 201.006 39.7989C201.722 40.6127 202.08 41.8496 202.08 43.5098C202.08 45.7884 201.283 48.5228 199.687 51.7129C197.214 56.7585 194.219 60.7298 190.703 63.627C187.741 66.0684 184.958 67.2891 182.354 67.2891C180.921 67.2891 179.505 66.7357 178.105 65.6289C173.646 74.6459 169.658 83.8418 166.143 93.2168C165.394 95.4629 164.515 96.586 163.506 96.586C163.018 96.586 162.529 96.2604 162.041 95.6094C161.683 95.1537 161.504 94.6491 161.504 94.0957C161.504 92.3379 163.652 86.625 167.949 76.9571C174.59 62.0482 180.889 49.6621 186.846 39.7989C188.083 37.7155 188.913 36.2832 189.336 35.502C190.475 33.3861 191.582 32.3282 192.656 32.3282C193.763 32.3282 194.316 32.9955 194.316 34.3301C194.316 35.0788 193.926 36.0879 193.145 37.3575C192.201 38.9851 191.452 40.2871 190.898 41.2637ZM179.912 61.5274C180.628 62.2761 181.523 62.6504 182.598 62.6504C185.625 62.6504 188.978 59.9649 192.656 54.5938C194.023 52.6081 195.114 50.5736 195.928 48.4903C196.579 46.8301 196.904 45.5769 196.904 44.7305C196.904 44.1446 196.758 43.7051 196.465 43.4121C196.204 43.1192 195.781 42.9727 195.195 42.9727C193.665 42.9727 191.794 44.0306 189.58 46.1465C187.464 48.1973 185.43 51.0782 183.477 54.7891C181.686 58.2071 180.498 60.4532 179.912 61.5274ZM207.012 57.8164V58.6953C207.012 59.4115 207.191 60.03 207.549 60.5508C208.363 61.7552 209.697 62.3575 211.553 62.3575C215.622 62.3575 220.326 59.2325 225.664 52.9825C226.608 51.9082 227.406 51.3711 228.057 51.3711C228.415 51.3711 228.74 51.5502 229.033 51.9082C229.229 52.1687 229.326 52.4128 229.326 52.6407C229.326 53.9102 227.764 56.0586 224.639 59.086C222.197 61.4623 219.593 63.3991 216.826 64.8965C214.059 66.3939 211.488 67.1426 209.111 67.1426C206.67 67.1426 204.749 66.2963 203.35 64.6035C202.406 63.4317 201.934 61.8366 201.934 59.8184C201.934 54.3171 204.521 48.9297 209.697 43.6563C213.896 39.3594 217.559 37.211 220.684 37.211C221.53 37.211 222.295 37.4714 222.979 37.9922C223.825 38.6758 224.248 39.571 224.248 40.6778C224.248 42.403 223.451 44.5189 221.855 47.0254C218.568 52.2338 213.62 55.8308 207.012 57.8164ZM208.086 54.0078C210.365 53.2266 212.155 52.3477 213.457 51.3711C215.736 49.6133 217.542 47.6276 218.877 45.4141C219.365 44.6328 219.609 43.933 219.609 43.3145C219.609 42.6634 219.3 42.3379 218.682 42.3379C217.835 42.3379 216.631 42.9727 215.068 44.2422C212.269 46.4883 209.941 49.7435 208.086 54.0078ZM179.082 84.9356C179.603 84.9356 180.107 85.2123 180.596 85.7657C181.019 86.2539 181.23 86.791 181.23 87.377C181.23 88.1908 180.791 89.2976 179.912 90.6973C179.489 91.3809 177.894 93.6433 175.127 97.4844C162.171 115.323 153.838 131.42 150.127 145.775C149.704 148.087 148.825 149.242 147.49 149.242C146.774 149.242 146.139 148.9 145.586 148.217C145.065 147.598 144.805 146.898 144.805 146.117C144.805 144.49 145.586 141.479 147.148 137.084C150.729 126.928 157.142 114.786 166.387 100.658C170.163 94.864 173.239 90.5183 175.615 87.6211C177.145 85.8308 178.301 84.9356 179.082 84.9356ZM226.592 117.162C219.886 118.529 212.936 120.645 205.742 123.51C205.482 124.031 205.221 124.568 204.961 125.121C200.469 133.747 197.441 141.918 195.879 149.633C195.553 151.456 194.821 152.367 193.682 152.367C192.835 152.367 192.087 151.944 191.436 151.098C190.915 150.447 190.654 149.747 190.654 148.998C190.654 148.087 191.061 146.199 191.875 143.334C192.689 140.437 193.535 137.898 194.414 135.717C194.74 134.903 195.765 132.527 197.49 128.588C197.913 127.644 198.337 126.651 198.76 125.609C198.076 125.87 197.132 126.26 195.928 126.781C195.407 127.009 194.935 127.123 194.512 127.123C193.503 127.123 192.998 126.358 192.998 124.828C192.998 123.819 193.421 123.054 194.268 122.533C194.919 122.11 196.074 121.605 197.734 121.02C199.492 120.369 200.876 119.831 201.885 119.408C202.536 118.269 203.773 115.925 205.596 112.377C205.921 111.726 207.012 109.87 208.867 106.811C214.173 97.8913 217.624 91.5437 219.219 87.7676C220.684 84.3496 221.595 82.4128 221.953 81.9571C222.604 81.1107 223.385 80.6875 224.297 80.6875C225.827 80.6875 226.592 81.4362 226.592 82.9336C226.592 86.3516 221.937 95.5801 212.627 110.619C211.097 113.093 209.974 115.242 209.258 117.064L211.699 116.381C218.34 114.46 224.378 112.784 229.814 111.352C233.558 104.451 238.148 96.8008 243.584 88.4024C244.528 86.905 245.081 85.9772 245.244 85.6192C246.025 84.2194 246.855 83.5196 247.734 83.5196C248.483 83.5196 249.102 83.8288 249.59 84.4473C249.98 84.9681 250.176 85.5378 250.176 86.1563C250.176 87.3282 249.541 89.0046 248.271 91.1856C247.979 91.7064 246.644 93.7897 244.268 97.4356C240.101 103.881 237.48 108.194 236.406 110.375C237.35 110.277 238.066 110.229 238.555 110.229C241.126 110.229 242.412 110.863 242.412 112.133C242.412 112.914 242.005 113.679 241.191 114.428C240.573 115.014 239.889 115.307 239.141 115.307H237.236C236.455 115.307 235.283 115.453 233.721 115.746C226.82 128.051 222.311 138.842 220.195 148.119C219.674 150.203 218.861 151.244 217.754 151.244C216.908 151.244 216.11 150.707 215.361 149.633C214.873 148.884 214.629 148.087 214.629 147.24C214.629 144.115 218.617 134.089 226.592 117.162ZM254.57 115.697C257.24 115.697 258.574 117.325 258.574 120.58C258.574 124.91 256.572 130.395 252.568 137.035C248.206 144.229 243.991 147.826 239.922 147.826C238.034 147.826 236.65 146.947 235.771 145.189C235.316 144.311 235.088 143.253 235.088 142.016C235.088 137.849 236.52 133.324 239.385 128.441C242.054 123.917 245.195 120.401 248.809 117.895C250.924 116.43 252.845 115.697 254.57 115.697ZM249.492 134.154C248.678 133.503 248.271 132.999 248.271 132.641C248.271 132.38 248.792 131.664 249.834 130.492C252.764 127.204 254.229 124.551 254.229 122.533C254.229 122.273 254.147 122.012 253.984 121.752C253.724 121.264 253.317 121.02 252.764 121.02C251.722 121.02 250.192 122.029 248.174 124.047C245.57 126.651 243.584 129.337 242.217 132.104C240.622 135.261 239.824 137.882 239.824 139.965C239.824 140.518 239.971 141.007 240.264 141.43C240.687 142.016 241.224 142.309 241.875 142.309C243.437 142.309 245.114 141.137 246.904 138.793C247.686 137.816 248.32 136.807 248.809 135.766C249.297 134.724 249.525 134.187 249.492 134.154ZM273.027 121.264C274.362 120.417 275.355 119.831 276.006 119.506C277.34 118.855 278.643 118.529 279.912 118.529C281.344 118.529 282.419 118.953 283.135 119.799C283.851 120.613 284.209 121.85 284.209 123.51C284.209 125.788 283.411 128.523 281.816 131.713C279.342 136.758 276.348 140.73 272.832 143.627C269.87 146.068 267.087 147.289 264.482 147.289C263.05 147.289 261.634 146.736 260.234 145.629C255.775 154.646 251.787 163.842 248.271 173.217C247.523 175.463 246.644 176.586 245.635 176.586C245.146 176.586 244.658 176.26 244.17 175.609C243.812 175.154 243.633 174.649 243.633 174.096C243.633 172.338 245.781 166.625 250.078 156.957C256.719 142.048 263.018 129.662 268.975 119.799C270.212 117.716 271.042 116.283 271.465 115.502C272.604 113.386 273.711 112.328 274.785 112.328C275.892 112.328 276.445 112.995 276.445 114.33C276.445 115.079 276.055 116.088 275.273 117.357C274.329 118.985 273.581 120.287 273.027 121.264ZM262.041 141.527C262.757 142.276 263.652 142.65 264.727 142.65C267.754 142.65 271.107 139.965 274.785 134.594C276.152 132.608 277.243 130.574 278.057 128.49C278.708 126.83 279.033 125.577 279.033 124.73C279.033 124.145 278.887 123.705 278.594 123.412C278.333 123.119 277.91 122.973 277.324 122.973C275.794 122.973 273.923 124.031 271.709 126.147C269.593 128.197 267.559 131.078 265.605 134.789C263.815 138.207 262.627 140.453 262.041 141.527ZM289.141 137.816V138.695C289.141 139.411 289.32 140.03 289.678 140.551C290.492 141.755 291.826 142.357 293.682 142.357C297.751 142.357 302.454 139.232 307.793 132.982C308.737 131.908 309.534 131.371 310.186 131.371C310.544 131.371 310.869 131.55 311.162 131.908C311.357 132.169 311.455 132.413 311.455 132.641C311.455 133.91 309.893 136.059 306.768 139.086C304.326 141.462 301.722 143.399 298.955 144.897C296.188 146.394 293.617 147.143 291.24 147.143C288.799 147.143 286.878 146.296 285.479 144.604C284.534 143.432 284.062 141.837 284.062 139.818C284.062 134.317 286.65 128.93 291.826 123.656C296.025 119.359 299.687 117.211 302.812 117.211C303.659 117.211 304.424 117.471 305.107 117.992C305.954 118.676 306.377 119.571 306.377 120.678C306.377 122.403 305.579 124.519 303.984 127.025C300.697 132.234 295.749 135.831 289.141 137.816ZM290.215 134.008C292.493 133.227 294.284 132.348 295.586 131.371C297.865 129.613 299.671 127.628 301.006 125.414C301.494 124.633 301.738 123.933 301.738 123.314C301.738 122.663 301.429 122.338 300.811 122.338C299.964 122.338 298.76 122.973 297.197 124.242C294.398 126.488 292.07 129.744 290.215 134.008Z"
          fill="inherit"
        />
      </YouHopeIHope>
      <IHopeYouHope
        state={state}
        height="5vh"
        viewBox="0 0 173 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6328 2.57422C14.8411 2.57422 15.043 2.6849 15.2383 2.90625C15.4076 3.10156 15.4922 3.31641 15.4922 3.55078C15.4922 3.8763 15.3164 4.31901 14.9648 4.87891C14.7956 5.15234 14.1576 6.05729 13.0508 7.59375C7.86849 14.7292 4.53516 21.168 3.05078 26.9102C2.88151 27.8346 2.52995 28.2969 1.99609 28.2969C1.70964 28.2969 1.45573 28.1602 1.23438 27.8867C1.02604 27.6393 0.921875 27.3594 0.921875 27.0469C0.921875 26.3958 1.23438 25.1914 1.85938 23.4336C3.29167 19.3711 5.85677 14.5143 9.55469 8.86328C11.0651 6.54557 12.2956 4.80729 13.2461 3.64844C13.8581 2.93229 14.3203 2.57422 14.6328 2.57422ZM33.6367 15.4648C30.9544 16.0117 28.1745 16.8581 25.2969 18.0039C25.1927 18.2122 25.0885 18.4271 24.9844 18.6484C23.1875 22.099 21.9766 25.3672 21.3516 28.4531C21.2214 29.1823 20.9284 29.5469 20.4727 29.5469C20.1341 29.5469 19.8346 29.3776 19.5742 29.0391C19.3659 28.7786 19.2617 28.4987 19.2617 28.1992C19.2617 27.8346 19.4245 27.0794 19.75 25.9336C20.0755 24.7747 20.4141 23.7591 20.7656 22.8867C20.8958 22.5612 21.306 21.6107 21.9961 20.0352C22.1654 19.6576 22.3346 19.2604 22.5039 18.8438C22.2305 18.9479 21.8529 19.1042 21.3711 19.3125C21.1628 19.4036 20.974 19.4492 20.8047 19.4492C20.401 19.4492 20.1992 19.1432 20.1992 18.5312C20.1992 18.1276 20.3685 17.8216 20.707 17.6133C20.9674 17.444 21.4297 17.2422 22.0938 17.0078C22.7969 16.7474 23.3503 16.5326 23.7539 16.3633C24.0143 15.9076 24.5091 14.9701 25.2383 13.5508C25.3685 13.2904 25.8047 12.5482 26.5469 11.3242C28.6693 7.75651 30.0495 5.21745 30.6875 3.70703C31.2734 2.33984 31.638 1.5651 31.7812 1.38281C32.0417 1.04427 32.3542 0.875 32.7188 0.875C33.3307 0.875 33.6367 1.17448 33.6367 1.77344C33.6367 3.14062 31.7747 6.83203 28.0508 12.8477C27.4388 13.8372 26.9896 14.6966 26.7031 15.4258L27.6797 15.1523C30.3359 14.3841 32.7513 13.7135 34.9258 13.1406C36.4232 10.3802 38.2591 7.32031 40.4336 3.96094C40.8112 3.36198 41.0326 2.99089 41.0977 2.84766C41.4102 2.28776 41.7422 2.00781 42.0938 2.00781C42.3932 2.00781 42.6406 2.13151 42.8359 2.37891C42.9922 2.58724 43.0703 2.8151 43.0703 3.0625C43.0703 3.53125 42.8164 4.20182 42.3086 5.07422C42.1914 5.28255 41.6576 6.11589 40.707 7.57422C39.0404 10.1523 37.9922 11.8776 37.5625 12.75C37.9401 12.7109 38.2266 12.6914 38.4219 12.6914C39.4505 12.6914 39.9648 12.9453 39.9648 13.4531C39.9648 13.7656 39.8021 14.0716 39.4766 14.3711C39.2292 14.6055 38.9557 14.7227 38.6562 14.7227H37.8945C37.582 14.7227 37.1133 14.7812 36.4883 14.8984C33.7279 19.8203 31.9245 24.1367 31.0781 27.8477C30.8698 28.681 30.5443 29.0977 30.1016 29.0977C29.763 29.0977 29.444 28.8828 29.1445 28.4531C28.9492 28.1536 28.8516 27.8346 28.8516 27.4961C28.8516 26.2461 30.4466 22.2357 33.6367 15.4648ZM44.8281 14.8789C45.8958 14.8789 46.4297 15.5299 46.4297 16.832C46.4297 18.5638 45.6289 20.7578 44.0273 23.4141C42.2826 26.2917 40.5964 27.7305 38.9688 27.7305C38.2135 27.7305 37.6602 27.3789 37.3086 26.6758C37.1263 26.3242 37.0352 25.901 37.0352 25.4062C37.0352 23.7396 37.6081 21.9297 38.7539 19.9766C39.8216 18.1667 41.0781 16.7604 42.5234 15.7578C43.3698 15.1719 44.138 14.8789 44.8281 14.8789ZM42.7969 22.2617C42.4714 22.0013 42.3086 21.7995 42.3086 21.6562C42.3086 21.5521 42.5169 21.2656 42.9336 20.7969C44.1055 19.4818 44.6914 18.4206 44.6914 17.6133C44.6914 17.5091 44.6589 17.4049 44.5938 17.3008C44.4896 17.1055 44.3268 17.0078 44.1055 17.0078C43.6888 17.0078 43.0768 17.4115 42.2695 18.2188C41.2279 19.2604 40.4336 20.3346 39.8867 21.4414C39.2487 22.7044 38.9297 23.7526 38.9297 24.5859C38.9297 24.8073 38.9883 25.0026 39.1055 25.1719C39.2747 25.4062 39.4896 25.5234 39.75 25.5234C40.375 25.5234 41.0456 25.0547 41.7617 24.1172C42.0742 23.7266 42.3281 23.3229 42.5234 22.9062C42.7188 22.4896 42.8099 22.2747 42.7969 22.2617ZM52.2109 17.1055C52.7448 16.7669 53.1419 16.5326 53.4023 16.4023C53.9362 16.1419 54.457 16.0117 54.9648 16.0117C55.5378 16.0117 55.9674 16.181 56.2539 16.5195C56.5404 16.8451 56.6836 17.3398 56.6836 18.0039C56.6836 18.9154 56.3646 20.0091 55.7266 21.2852C54.737 23.3034 53.5391 24.8919 52.1328 26.0508C50.9479 27.0273 49.8346 27.5156 48.793 27.5156C48.2201 27.5156 47.6536 27.2943 47.0938 26.8516C45.3099 30.4583 43.7148 34.1367 42.3086 37.8867C42.0091 38.7852 41.6576 39.2344 41.2539 39.2344C41.0586 39.2344 40.8633 39.1042 40.668 38.8438C40.5247 38.6615 40.4531 38.4596 40.4531 38.2383C40.4531 37.5352 41.3125 35.25 43.0312 31.3828C45.6875 25.4193 48.207 20.4648 50.5898 16.5195C51.0846 15.6862 51.4167 15.1133 51.5859 14.8008C52.0417 13.9544 52.4844 13.5312 52.9141 13.5312C53.3568 13.5312 53.5781 13.7982 53.5781 14.332C53.5781 14.6315 53.4219 15.0352 53.1094 15.543C52.7318 16.194 52.4323 16.7148 52.2109 17.1055ZM47.8164 25.2109C48.1029 25.5104 48.4609 25.6602 48.8906 25.6602C50.1016 25.6602 51.4427 24.5859 52.9141 22.4375C53.4609 21.6432 53.8971 20.8294 54.2227 19.9961C54.4831 19.332 54.6133 18.8307 54.6133 18.4922C54.6133 18.2578 54.5547 18.082 54.4375 17.9648C54.3333 17.8477 54.1641 17.7891 53.9297 17.7891C53.3177 17.7891 52.569 18.2122 51.6836 19.0586C50.8372 19.8789 50.0234 21.0312 49.2422 22.5156C48.526 23.8828 48.0508 24.7812 47.8164 25.2109ZM58.6562 23.7266V24.0781C58.6562 24.3646 58.7279 24.612 58.8711 24.8203C59.1966 25.3021 59.7305 25.543 60.4727 25.543C62.1003 25.543 63.9818 24.293 66.1172 21.793C66.4948 21.3633 66.8138 21.1484 67.0742 21.1484C67.2174 21.1484 67.3477 21.2201 67.4648 21.3633C67.543 21.4674 67.582 21.5651 67.582 21.6562C67.582 22.1641 66.957 23.0234 65.707 24.2344C64.7305 25.1849 63.6888 25.9596 62.582 26.5586C61.4753 27.1576 60.4466 27.457 59.4961 27.457C58.5195 27.457 57.7513 27.1185 57.1914 26.4414C56.8138 25.9727 56.625 25.3346 56.625 24.5273C56.625 22.3268 57.6602 20.1719 59.7305 18.0625C61.4102 16.3438 62.875 15.4844 64.125 15.4844C64.4635 15.4844 64.7695 15.5885 65.043 15.7969C65.3815 16.0703 65.5508 16.4284 65.5508 16.8711C65.5508 17.5612 65.2318 18.4076 64.5938 19.4102C63.2786 21.4935 61.2995 22.9323 58.6562 23.7266ZM59.0859 22.2031C59.9974 21.8906 60.7135 21.5391 61.2344 21.1484C62.1458 20.4453 62.8685 19.651 63.4023 18.7656C63.5977 18.4531 63.6953 18.1732 63.6953 17.9258C63.6953 17.6654 63.5716 17.5352 63.3242 17.5352C62.9857 17.5352 62.5039 17.7891 61.8789 18.2969C60.7591 19.1953 59.8281 20.4974 59.0859 22.2031ZM69.9062 26.1289C70.5182 26.1289 70.8242 26.513 70.8242 27.2812C70.8242 28.4661 70.1667 30.0156 68.8516 31.9297C68.3177 32.7109 67.6862 33.4271 66.957 34.0781C66.4883 34.5078 66.1107 34.7227 65.8242 34.7227C65.5508 34.7227 65.3294 34.599 65.1602 34.3516C65.043 34.1953 64.9844 34.013 64.9844 33.8047C64.9844 33.5182 65.2643 33.1211 65.8242 32.6133C67.4128 31.0898 68.3438 29.306 68.6172 27.2617C68.6823 26.8841 68.8581 26.5911 69.1445 26.3828C69.4049 26.2135 69.6589 26.1289 69.9062 26.1289ZM93.4023 22.0078C92.2435 23.375 91.319 24.3906 90.6289 25.0547C89.2617 26.3568 88.1224 27.0078 87.2109 27.0078C86.7682 27.0078 86.4167 26.8451 86.1562 26.5195C85.9609 26.2591 85.8633 25.9336 85.8633 25.543C85.8633 24.1367 86.6966 22.2682 88.3633 19.9375C90.056 17.5677 91.2799 16.3828 92.0352 16.3828C92.2435 16.3828 92.4258 16.474 92.582 16.6562C92.7253 16.7995 92.7969 16.9688 92.7969 17.1641C92.7969 17.4505 92.7188 17.7044 92.5625 17.9258C92.4193 18.1341 91.9961 18.6094 91.293 19.3516C90.5508 20.1198 89.8672 20.9531 89.2422 21.8516C88.526 22.8672 88.168 23.6094 88.168 24.0781C88.168 24.3516 88.2982 24.4883 88.5586 24.4883C89.0794 24.4883 90.056 23.7786 91.4883 22.3594C92.3867 21.4609 93.0898 20.7057 93.5977 20.0938C93.7018 19.9635 94.1576 19.3451 94.9648 18.2383C95.694 17.2617 96.1432 16.6823 96.3125 16.5C96.7031 16.0443 97.0677 15.8164 97.4062 15.8164C97.6146 15.8164 97.8034 15.9076 97.9727 16.0898C98.1289 16.2591 98.207 16.4544 98.207 16.6758C98.207 17.0534 97.9466 17.6849 97.4258 18.5703C96.8008 19.651 96.2279 20.6602 95.707 21.5977C94.8867 23.056 94.2552 24.3581 93.8125 25.5039C94.6458 25.0221 95.4076 24.4297 96.0977 23.7266C97.2695 22.5547 97.9857 21.6823 98.2461 21.1094C98.4935 20.5885 98.7474 20.3281 99.0078 20.3281C99.3724 20.3281 99.5547 20.5104 99.5547 20.875C99.5547 21.5651 98.9688 22.5938 97.7969 23.9609C96.3906 25.6016 94.6589 26.9948 92.6016 28.1406C91.5078 30.7708 90.4727 32.9518 89.4961 34.6836C87.6732 37.8737 85.7917 39.4688 83.8516 39.4688C83.0573 39.4688 82.4193 39.1628 81.9375 38.5508C81.5599 38.082 81.3711 37.4896 81.3711 36.7734C81.3711 34.7422 82.7969 32.6654 85.6484 30.543C86.4818 29.918 87.7188 29.1367 89.3594 28.1992C90.0234 27.8216 90.5443 27.5156 90.9219 27.2812C91.1562 26.6823 91.5143 25.888 91.9961 24.8984C92.5299 23.8307 92.9987 22.8672 93.4023 22.0078ZM89.8086 29.6836C88.4284 30.3867 87.0156 31.3893 85.5703 32.6914C84.112 34.0326 83.3828 35.2826 83.3828 36.4414C83.3828 36.6888 83.4544 36.8971 83.5977 37.0664C83.793 37.3008 84.0469 37.418 84.3594 37.418C85.3359 37.418 86.4167 36.3958 87.6016 34.3516C87.7969 34.013 88.3307 32.8867 89.2031 30.9727C89.3854 30.582 89.5872 30.1523 89.8086 29.6836ZM107.445 14.8789C108.513 14.8789 109.047 15.5299 109.047 16.832C109.047 18.5638 108.246 20.7578 106.645 23.4141C104.9 26.2917 103.214 27.7305 101.586 27.7305C100.831 27.7305 100.277 27.3789 99.9258 26.6758C99.7435 26.3242 99.6523 25.901 99.6523 25.4062C99.6523 23.7396 100.225 21.9297 101.371 19.9766C102.439 18.1667 103.695 16.7604 105.141 15.7578C105.987 15.1719 106.755 14.8789 107.445 14.8789ZM105.414 22.2617C105.089 22.0013 104.926 21.7995 104.926 21.6562C104.926 21.5521 105.134 21.2656 105.551 20.7969C106.723 19.4818 107.309 18.4206 107.309 17.6133C107.309 17.5091 107.276 17.4049 107.211 17.3008C107.107 17.1055 106.944 17.0078 106.723 17.0078C106.306 17.0078 105.694 17.4115 104.887 18.2188C103.845 19.2604 103.051 20.3346 102.504 21.4414C101.866 22.7044 101.547 23.7526 101.547 24.5859C101.547 24.8073 101.605 25.0026 101.723 25.1719C101.892 25.4062 102.107 25.5234 102.367 25.5234C102.992 25.5234 103.663 25.0547 104.379 24.1172C104.691 23.7266 104.945 23.3229 105.141 22.9062C105.336 22.4896 105.427 22.2747 105.414 22.2617ZM114.652 24.4883C114.092 25.2695 113.598 25.8945 113.168 26.3633C112.413 27.1966 111.664 27.6133 110.922 27.6133C110.284 27.6133 109.789 27.3268 109.438 26.7539C109.19 26.3503 109.066 25.8685 109.066 25.3086C109.066 23.6289 109.783 21.7018 111.215 19.5273C111.879 18.5117 112.536 17.737 113.188 17.2031C113.695 16.7734 114.112 16.5586 114.438 16.5586C114.62 16.5586 114.789 16.6367 114.945 16.793C115.076 16.9362 115.141 17.0794 115.141 17.2227C115.141 17.4701 114.9 17.8737 114.418 18.4336C113.337 19.7227 112.517 20.9076 111.957 21.9883C111.306 23.2513 110.98 24.2409 110.98 24.957C110.98 25.1393 111.02 25.2826 111.098 25.3867C111.189 25.4779 111.312 25.5234 111.469 25.5234C112.133 25.5234 113.057 24.5729 114.242 22.6719C114.854 21.6823 115.382 20.5885 115.824 19.3906C116.059 18.7396 116.365 18.1602 116.742 17.6523C117.107 17.1966 117.465 16.9688 117.816 16.9688C118.012 16.9688 118.188 17.0534 118.344 17.2227C118.513 17.4049 118.598 17.6068 118.598 17.8281C118.598 18.2969 118.148 19.3516 117.25 20.9922C116.638 22.125 116.332 23.069 116.332 23.8242C116.332 24.6315 116.547 25.3216 116.977 25.8945C117.094 26.0508 117.452 26.2982 118.051 26.6367C118.337 26.806 118.48 27.0794 118.48 27.457C118.48 27.6914 118.376 27.8932 118.168 28.0625C117.973 28.2318 117.732 28.3164 117.445 28.3164C116.794 28.3164 116.202 28.056 115.668 27.5352C115.186 27.0664 114.88 26.3893 114.75 25.5039C114.724 25.3867 114.691 25.0482 114.652 24.4883ZM134.34 19.4883C135.303 18.4857 136.267 17.6458 137.23 16.9688C138.467 16.1094 139.353 15.6797 139.887 15.6797C140.108 15.6797 140.323 15.7708 140.531 15.9531C140.766 16.1615 140.883 16.4023 140.883 16.6758C140.883 17.0273 140.603 17.5742 140.043 18.3164C138.962 19.7487 138.142 21.0508 137.582 22.2227C137.087 23.2383 136.84 23.9284 136.84 24.293C136.84 24.6445 137.009 24.8203 137.348 24.8203C138.051 24.8203 139.236 23.5703 140.902 21.0703C141.241 20.5625 141.547 20.3086 141.82 20.3086C142.094 20.3086 142.23 20.4648 142.23 20.7773C142.23 21.2852 141.736 22.2552 140.746 23.6875C139.887 24.9375 138.988 25.8945 138.051 26.5586C137.387 27.0143 136.788 27.2422 136.254 27.2422C135.694 27.2422 135.29 27.0013 135.043 26.5195C134.887 26.2201 134.809 25.888 134.809 25.5234C134.809 24.3646 135.219 23.043 136.039 21.5586C136.234 21.207 136.82 20.2044 137.797 18.5508C135.141 19.8919 132.895 22.7891 131.059 27.2422C130.889 27.75 130.629 28.0039 130.277 28.0039C130.03 28.0039 129.828 27.9193 129.672 27.75C129.516 27.5677 129.438 27.3464 129.438 27.0859C129.438 26.6562 129.854 25.4388 130.688 23.4336C132.237 19.7096 133.682 16.5586 135.023 13.9805C136.365 11.3763 137.855 8.67448 139.496 5.875C139.887 5.19792 140.193 4.74219 140.414 4.50781C140.635 4.27344 140.87 4.15625 141.117 4.15625C141.352 4.15625 141.553 4.27995 141.723 4.52734C141.853 4.70964 141.918 4.91797 141.918 5.15234C141.918 5.51693 141.71 6.00521 141.293 6.61719C139.887 8.79167 138.487 11.181 137.094 13.7852C135.596 16.5716 134.678 18.4727 134.34 19.4883ZM149.633 14.8789C150.701 14.8789 151.234 15.5299 151.234 16.832C151.234 18.5638 150.434 20.7578 148.832 23.4141C147.087 26.2917 145.401 27.7305 143.773 27.7305C143.018 27.7305 142.465 27.3789 142.113 26.6758C141.931 26.3242 141.84 25.901 141.84 25.4062C141.84 23.7396 142.413 21.9297 143.559 19.9766C144.626 18.1667 145.883 16.7604 147.328 15.7578C148.174 15.1719 148.943 14.8789 149.633 14.8789ZM147.602 22.2617C147.276 22.0013 147.113 21.7995 147.113 21.6562C147.113 21.5521 147.322 21.2656 147.738 20.7969C148.91 19.4818 149.496 18.4206 149.496 17.6133C149.496 17.5091 149.464 17.4049 149.398 17.3008C149.294 17.1055 149.132 17.0078 148.91 17.0078C148.493 17.0078 147.882 17.4115 147.074 18.2188C146.033 19.2604 145.238 20.3346 144.691 21.4414C144.053 22.7044 143.734 23.7526 143.734 24.5859C143.734 24.8073 143.793 25.0026 143.91 25.1719C144.079 25.4062 144.294 25.5234 144.555 25.5234C145.18 25.5234 145.85 25.0547 146.566 24.1172C146.879 23.7266 147.133 23.3229 147.328 22.9062C147.523 22.4896 147.615 22.2747 147.602 22.2617ZM157.016 17.1055C157.549 16.7669 157.947 16.5326 158.207 16.4023C158.741 16.1419 159.262 16.0117 159.77 16.0117C160.342 16.0117 160.772 16.181 161.059 16.5195C161.345 16.8451 161.488 17.3398 161.488 18.0039C161.488 18.9154 161.169 20.0091 160.531 21.2852C159.542 23.3034 158.344 24.8919 156.938 26.0508C155.753 27.0273 154.639 27.5156 153.598 27.5156C153.025 27.5156 152.458 27.2943 151.898 26.8516C150.115 30.4583 148.52 34.1367 147.113 37.8867C146.814 38.7852 146.462 39.2344 146.059 39.2344C145.863 39.2344 145.668 39.1042 145.473 38.8438C145.329 38.6615 145.258 38.4596 145.258 38.2383C145.258 37.5352 146.117 35.25 147.836 31.3828C150.492 25.4193 153.012 20.4648 155.395 16.5195C155.889 15.6862 156.221 15.1133 156.391 14.8008C156.846 13.9544 157.289 13.5312 157.719 13.5312C158.161 13.5312 158.383 13.7982 158.383 14.332C158.383 14.6315 158.227 15.0352 157.914 15.543C157.536 16.194 157.237 16.7148 157.016 17.1055ZM152.621 25.2109C152.908 25.5104 153.266 25.6602 153.695 25.6602C154.906 25.6602 156.247 24.5859 157.719 22.4375C158.266 21.6432 158.702 20.8294 159.027 19.9961C159.288 19.332 159.418 18.8307 159.418 18.4922C159.418 18.2578 159.359 18.082 159.242 17.9648C159.138 17.8477 158.969 17.7891 158.734 17.7891C158.122 17.7891 157.374 18.2122 156.488 19.0586C155.642 19.8789 154.828 21.0312 154.047 22.5156C153.331 23.8828 152.855 24.7812 152.621 25.2109ZM163.461 23.7266V24.0781C163.461 24.3646 163.533 24.612 163.676 24.8203C164.001 25.3021 164.535 25.543 165.277 25.543C166.905 25.543 168.786 24.293 170.922 21.793C171.299 21.3633 171.618 21.1484 171.879 21.1484C172.022 21.1484 172.152 21.2201 172.27 21.3633C172.348 21.4674 172.387 21.5651 172.387 21.6562C172.387 22.1641 171.762 23.0234 170.512 24.2344C169.535 25.1849 168.493 25.9596 167.387 26.5586C166.28 27.1576 165.251 27.457 164.301 27.457C163.324 27.457 162.556 27.1185 161.996 26.4414C161.618 25.9727 161.43 25.3346 161.43 24.5273C161.43 22.3268 162.465 20.1719 164.535 18.0625C166.215 16.3438 167.68 15.4844 168.93 15.4844C169.268 15.4844 169.574 15.5885 169.848 15.7969C170.186 16.0703 170.355 16.4284 170.355 16.8711C170.355 17.5612 170.036 18.4076 169.398 19.4102C168.083 21.4935 166.104 22.9323 163.461 23.7266ZM163.891 22.2031C164.802 21.8906 165.518 21.5391 166.039 21.1484C166.951 20.4453 167.673 19.651 168.207 18.7656C168.402 18.4531 168.5 18.1732 168.5 17.9258C168.5 17.6654 168.376 17.5352 168.129 17.5352C167.79 17.5352 167.309 17.7891 166.684 18.2969C165.564 19.1953 164.633 20.4974 163.891 22.2031Z"
          fill="black"
        />
      </IHopeYouHope>
    </TextContainer>
  )
}

export default Text