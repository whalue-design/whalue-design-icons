// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RotateRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RotateRightOutlined';

export default {
  name: 'IconRotateRightOutlined',
  displayName: 'RotateRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RotateRightOutlinedSvg } },
      children,
    ),
};