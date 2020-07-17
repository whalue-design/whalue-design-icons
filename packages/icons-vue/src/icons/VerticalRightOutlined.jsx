// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VerticalRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VerticalRightOutlined';

export default {
  name: 'IconVerticalRightOutlined',
  displayName: 'VerticalRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerticalRightOutlinedSvg } },
      children,
    ),
};