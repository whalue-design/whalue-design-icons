// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ToolTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ToolTwoTone';

export default {
  name: 'IconToolTwoTone',
  displayName: 'ToolTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ToolTwoToneSvg } },
      children,
    ),
};