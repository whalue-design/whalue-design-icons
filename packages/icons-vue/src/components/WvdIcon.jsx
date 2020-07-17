import classNames from 'classnames';
import VueIcon from './IconBase';
import { setTwoToneColor, getTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';

// Initial setting
setTwoToneColor('#1890ff');

const Icon = {
  functional: true,
  props: {
    icon: Object,
    spin: Boolean,
    rotate: Number,
    tabIndex: [String, Number],
    twoToneColor: [String, Array],
  },
  render(h, ctx) {
    const { data: { attrs, ...restData } = {}, props = {}, listeners } = ctx;
    const {
      // affect inner <svg>...</svg>
      icon,
      spin,
      rotate,
      tabIndex,
      // other
      twoToneColor,
      ...restProps
    } = { ...attrs, ...props };
    const { click: onClick } = listeners;
    const classString = classNames('whalue-icon', {
      [`whalue-icon-${icon.name}`]: Boolean(icon.name),
    });

    const svgClassString = classNames({
      'whalue-icon-spin': !!spin || icon.name === 'loading',
    });

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;
    const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

    return (
      <span
        role="img"
        aria-label={icon.name}
        tabIndex={iconTabIndex}
        class={classString}
        {...{ ...restData, attrs: restProps, on: listeners }}
      >
        <VueIcon
          class={svgClassString}
          icon={icon}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          style={svgStyle}
        />
      </span>
    );
  },
};

Icon.name = 'WvdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
