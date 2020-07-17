// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WarningOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WarningOutlined';

export default {
  name: 'IconWarningOutlined',
  displayName: 'WarningOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WarningOutlinedSvg } },
      children,
    ),
};