// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ArrowRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ArrowRightOutlined';

export default {
  name: 'IconArrowRightOutlined',
  displayName: 'ArrowRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ArrowRightOutlinedSvg } },
      children,
    ),
};