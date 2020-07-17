// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ToolFilledSvg from '@whalue-design/icons-svg/lib/asn/ToolFilled';

export default {
  name: 'IconToolFilled',
  displayName: 'ToolFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ToolFilledSvg } },
      children,
    ),
};