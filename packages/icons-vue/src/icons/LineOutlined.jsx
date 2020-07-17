// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LineOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LineOutlined';

export default {
  name: 'IconLineOutlined',
  displayName: 'LineOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LineOutlinedSvg } },
      children,
    ),
};