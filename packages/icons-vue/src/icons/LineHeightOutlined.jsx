// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LineHeightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LineHeightOutlined';

export default {
  name: 'IconLineHeightOutlined',
  displayName: 'LineHeightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LineHeightOutlinedSvg } },
      children,
    ),
};