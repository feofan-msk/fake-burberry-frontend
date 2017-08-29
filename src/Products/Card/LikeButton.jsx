import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = props =>
  (<svg width={props.width} height={props.height} viewBox={props.viewbox} version="1.1">
    <defs>
      <path
        d="M7.00147577,14 L1.1995764,7.7486402 C-0.43417144,5.94319333 -0.39228047,3.05447833 1.28335834,1.29416763 C2.85426972,-0.353302646 5.34678245,-0.44357499 7.00147577,1.11362294 C8.67711458,-0.44357499 11.1905728,-0.353302646 12.7614842,1.3393038 L12.7614842,1.3393038 C14.395232,3.0996145 14.4161775,5.96576141 12.8033751,7.7486402 L12.8033751,7.7486402 L7.00147577,14 Z"
        id="path-1"
      />
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
      <g id="Icon-/-Like" transform="translate(1.000000, 1.000000)">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <use id="Shape" stroke="#171717" fillRule="nonzero" xlinkHref="#path-1" />
      </g>
    </g>
  </svg>);

LikeButton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  viewbox: PropTypes.string.isRequired,
};

LikeButton.defaultProps = {
  width: 16,
  height: 15,
  fill: 'none',
  viewBox: '0 0 16 15',
};

export default LikeButton;
