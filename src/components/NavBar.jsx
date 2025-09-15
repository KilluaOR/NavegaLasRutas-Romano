import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar({}) {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              opacity="1"
              d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
              fill="white"
            ></path>
            <path
              d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
              fill="white"
            ></path>
          </g>
        </svg>
      </NavLink>

      <NavLink to="/category/tabaco-armar" className="nav-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 297 297"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M297,243.117c0-23.242-40.531-35.227-83.868-40.687v81.373C256.469,278.343,297,266.359,297,243.117z"
                fill="white"
              ></path>
              <path
                d="M149.204,198.54c-26.704,0-49.031,1.802-68.298,5.634v77.886c19.267,3.832,41.595,5.634,68.298,5.634 c14.679,0,32.076-0.672,49.688-2.329v-84.496C181.281,199.212,163.883,198.54,149.204,198.54z"
                fill="white"
              ></path>
              <path
                d="M31.627,227.772v30.69c0,3.85,2.174,7.37,5.616,9.094c9.006,4.51,18.723,8.206,29.423,11.149v-71.177 c-10.7,2.943-20.417,6.639-29.423,11.149C33.801,220.402,31.627,223.922,31.627,227.772z"
                fill="white"
              ></path>
              <path
                d="M0,157.102c0,10.153,7.928,28.458,23.545,54.455c2.024-2.27,4.483-4.19,7.321-5.611c5.635-2.822,11.506-5.349,17.67-7.592 c3.052-15.315,13.131-35.484,22.343-53.907c18.638-37.277,22.398-74.288,18.004-92.9c-6.243-26.45-22.806-42.24-44.306-42.24 C19.998,9.306,0,29.303,0,53.883c0,15.786,5.528,24.084,11.927,33.692c2.123,3.187,4.318,6.482,6.645,10.503 c6.594,11.389,3.13,16.857-5.334,28.139C7.34,134.079,0,143.865,0,157.102z"
                fill="white"
              ></path>
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink to="/category/tabaco-pipa" className="nav-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>Pipe</title>
            <defs></defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M11.2742697,4.64414711 C9.75026973,6.47014711 8.31826973,7.87314711 6.03026973,8.49314711 L5.30126973,6.41314711 C4.87126973,5.17714711 -0.344730272,6.99814711 0.0882697282,8.23514711 L1.22126973,11.4771471 C1.65326973,12.7131471 3.27960785,13.2907915 4.76354965,12.853149 C5.9393281,12.5063897 8.85126973,11.5001471 12.2922697,6.50414711 C13.4172697,4.86914711 14.8580511,3.84423001 15.9900511,3.49823001 L15.4750511,2.02523001 C15.4750511,2.02523001 13.1972697,2.34114711 11.2742697,4.64414711 Z"
                fill="white"
                className="si-glyph-fill"
              ></path>
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink to="/category/accesorios" className="nav-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 512 512"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M447.918,230.4c-1.453-36.754-27.809-67.197-62.628-74.904c3.288-8.543,5.11-17.809,5.11-27.496 c0-67.104-63.448-110.175-66.15-111.976l-10.65-7.1l-10.65,7.1C300.248,17.825,236.8,60.896,236.8,128 c0,19.425,7.264,37.178,19.2,50.717V230.4h-38.4V0H64v268.8h115.2V512H448V230.4H447.918z M342.19,153.6h-57.181 c-6.094-6.799-9.809-15.772-9.809-25.6c0-32.566,23.971-58.71,38.397-71.494C328.044,69.306,352,95.442,352,128 C352,137.828,348.285,146.801,342.19,153.6z M371.2,230.4v-38.272c20.392,1.562,36.707,17.879,38.264,38.272H371.2z"
                  fill="white"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </NavLink>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
