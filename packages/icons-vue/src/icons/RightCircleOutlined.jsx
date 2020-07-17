// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RightCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RightCircleOutlined';

export default {
  name: 'IconRightCircleOutlined',
  displayName: 'RightCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightCircleOutlinedSvg } },
      children,
    ),
};