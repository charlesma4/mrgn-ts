import * as React from "react";

export const WalletIcon: React.FC<React.SVGAttributes<SVGElement>> = ({ width = 16, height = 17 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
      <path
        d="M13.5 5.125H3.5C3.33424 5.125 3.17527 5.05915 3.05806 4.94194C2.94085 4.82473 2.875 4.66576 2.875 4.5C2.875 4.33424 2.94085 4.17527 3.05806 4.05806C3.17527 3.94085 3.33424 3.875 3.5 3.875H12C12.0995 3.875 12.1948 3.83549 12.2652 3.76517C12.3355 3.69484 12.375 3.59946 12.375 3.5C12.375 3.40054 12.3355 3.30516 12.2652 3.23483C12.1948 3.16451 12.0995 3.125 12 3.125H3.5C3.13533 3.125 2.78559 3.26987 2.52773 3.52773C2.26987 3.78559 2.125 4.13533 2.125 4.5V12.5C2.125 12.8647 2.26987 13.2144 2.52773 13.4723C2.78559 13.7301 3.13533 13.875 3.5 13.875H13.5C13.7321 13.875 13.9546 13.7828 14.1187 13.6187C14.2828 13.4546 14.375 13.2321 14.375 13V6C14.375 5.76794 14.2828 5.54538 14.1187 5.38128C13.9546 5.21719 13.7321 5.125 13.5 5.125ZM13.625 13C13.625 13.0332 13.6118 13.0649 13.5884 13.0884C13.5649 13.1118 13.5332 13.125 13.5 13.125H3.5C3.33424 13.125 3.17527 13.0592 3.05806 12.9419C2.94085 12.8247 2.875 12.6658 2.875 12.5V5.72437C3.06837 5.82363 3.28265 5.87527 3.5 5.875H13.5C13.5332 5.875 13.5649 5.88817 13.5884 5.91161C13.6118 5.93505 13.625 5.96685 13.625 6V13ZM11.875 9.25C11.875 9.37361 11.8383 9.49445 11.7697 9.59723C11.701 9.70001 11.6034 9.78012 11.4892 9.82743C11.375 9.87473 11.2493 9.88711 11.1281 9.86299C11.0068 9.83887 10.8955 9.77935 10.8081 9.69194C10.7206 9.60453 10.6611 9.49317 10.637 9.37193C10.6129 9.25069 10.6253 9.12503 10.6726 9.01082C10.7199 8.89662 10.8 8.79901 10.9028 8.73033C11.0055 8.66166 11.1264 8.625 11.25 8.625C11.4158 8.625 11.5747 8.69085 11.6919 8.80806C11.8092 8.92527 11.875 9.08424 11.875 9.25Z"
        fill="white"
      />
    </svg>
  );
};