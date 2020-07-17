// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DoubleRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DoubleRightOutlined';

export default {
  name: 'IconDoubleRightOutlined',
  displayName: 'DoubleRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DoubleRightOutlinedSvg } },
      children,
    ),
};