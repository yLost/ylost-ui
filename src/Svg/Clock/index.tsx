import React = require('react');

export function Clock(props: React.HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" fill="#FFF" {...props}>
      <path d="M280 260V152C280 138.8 269.3 128 256 128S232 138.8 232 152V272c0 7.562 3.562 14.66 9.594 19.19l64 48C309.9 342.4 314.1 344 319.1 344c7.297 0 14.5-3.312 19.22-9.594c7.953-10.62 5.797-25.66-4.797-33.59L280 260zM255.1 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s255.1-114.6 255.1-256S397.4 0 255.1 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
    </svg>
  );
}
