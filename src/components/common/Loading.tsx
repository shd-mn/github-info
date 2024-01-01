export default function Loading() {
  return (
    <section>
      <div className="container">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M10 50A40 40 0 0 0 90 50A40 42.4 0 0 1 10 50"
              fill="#5bc2e1"
              stroke="none"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 51.2;360 50 51.2"
              ></animateTransform>
            </path>
          </svg>
        </div>
      </div>
    </section>
  );
}
