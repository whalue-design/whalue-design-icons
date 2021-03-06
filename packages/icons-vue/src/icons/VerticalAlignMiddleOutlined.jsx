// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VerticalAlignMiddleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';

export default {
  name: 'IconVerticalAlignMiddleOutlined',
  displayName: 'VerticalAlignMiddleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerticalAlignMiddleOutlinedSvg } },
      children,
    ),
};